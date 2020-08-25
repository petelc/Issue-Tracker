/* eslint-disable no-undef */
const { UserInputError } = require('apollo-server-express');
const { getDb, getNextSequence } = require('./db.js');

/** Gets data by param: id */
async function get(_, { id }) {
  const db = getDb();
  const issue = await db.collection('issues').findOne({ id });
  return issue;
}

async function list(_, { status, effortMin, effortMax }) {
  const db = getDb();
  const filter = {};
  if (status) filter.status = status;

  if (effortMin !== undefined || effortMax !== undefined) {
    filter.effort = {};
    if (effortMin !== undefined) filter.effort.$gte = effortMin;
    if (effortMax !== undefined) filter.effort.$lte = effortMax;
  }

  const issues = await db.collection('issues').find(filter).toArray();
  return issues;
}

function validate(issue) {
  const errors = [];
  if (issue.title.length < 3) {
    errors.push('Field "title" must be at least 3 characters long');
  }

  if (issue.status === 'Assigned' && !issue.owner) {
    errors.push('Field "owner" is required when status is "Assigned"');
  }

  if (errors.length > 0) {
    throw new UserInputError('Invalid input(s)', { errors });
  }
}

async function add(_, { issue }) {
  const db = getDb();
  validate(issue);
  const newIssue = Object.assign({}, issue);
  newIssue.created = new Date();
  // gets the id generated by the counters collection
  // in mongodb
  newIssue.id = await getNextSequence('issues');
  // console.log(`The new Issue Id is ${newIssue.id}`);
  // using the above id inserts the new issue
  // into mongodb
  const result = await db.collection('issues').insertOne(newIssue);

  // Looks in mongo db and finds the newly inserted issue
  const savedIssue = await db.collection('issues').findOne(
    { _id: result.insertedId },
  );


  return savedIssue;
}

async function update(_, { id, changes }) {
  const db = getDb();
  if (changes.title || changes.status || changes.owner) {
    const issue = await db.collection('issues').findOne({ id });
    Object.assign(issue, changes);
    validate(issue);
  }
  await db.collection('issues').updateOne({ id }, { $set: changes });
  const savedIssue = await db.collection('issues').findOne({ id });
  return savedIssue;
}

async function remove(_, { id }) {
  const db = getDb();
  const issue = await db.collection('issues').findOne({ id });
  if (!issue) return false;
  issue.deleted = new Date();

  let result = await db.collection('deleted_issues').insertOne(issue);
  if (result.insertedId) {
    result = await db.collection('issues').removeOne({ id });
    return result.deletedCount === 1;
  }
  return false;
}

module.exports = {
  list,
  add,
  get,
  update,
  delete: remove,
};
