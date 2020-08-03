/* eslint-disable linebreak-style */

const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost/issuetracker';

async function processInitialization() {
  const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
  try {
    await client.connect();
    const db = client.db();
    const collection = db.collection('issues');
    const countCollection = db.collection('counters');


    collection.deleteMany({});
    countCollection.deleteMany({});

    const issuesDB = [
      {
        id: 1,
        status: 'New',
        owner: 'Ravan',
        effort: 5,
        created: new Date(2020, 8, 23),
        due: undefined,
        title: 'Error in console when clicking Add',
      },
      {
        id: 2,
        status: 'Assigned',
        owner: 'Eddie',
        effort: 14,
        created: new Date(2020, 5, 16),
        due: new Date(2020, 7, 16),
        title: 'Missing bottom border on panel',
      },
    ];
    console.log(collection);
    await collection.insertMany(issuesDB);
    // should be 2
    const count = collection.count();
    console.log('Inserted', count, 'issues');

    countCollection.insertOne({ _id: 'issues', current: parseInt(count, 10) });
    console.log(countCollection);
  } catch (err) {
    console.log('ERROR:', err);
  } finally {
    client.close();
  }
}

processInitialization();
