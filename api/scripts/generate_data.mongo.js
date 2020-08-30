/* global db print */
/* eslint no-restricted-globals: "off" */

const owners = ['Raven', 'Eddie', 'Mufasa', 'Pete'];
const statuses = ['New', 'Assigned', 'Fixed', 'Closed'];

const initialCount = db.issues.count();

for (let i = 0; i < 100; i += 1) {
  const randomCreateDate = (new Date())
        - Math.floor(Math.random() * 60) * 1000 * 60 * 60 * 24;
  const created = new Date(new Date(randomCreateDate));
  const randomDueDate = (new Date())
    - Math.floor(Math.random() * 60) * 1000 * 60 * 60 * 24;
  const due = new Date(new Date(randomDueDate));
  const owner = owners[Math.floor(Math.random() * 5)];
  const status = statuses[Math.floor(Math.random() * 4)];
  const effort = Math.ceil(Math.random() * 20);
  const title = 'Blah Blah Blah';
  const id = initialCount + i + 1;

  const issue = {
    id, title, created, due, owner, status, effort,
  };

  db.issues.insertOne(issue);
}

const count = db.issues.count();
db.counters.update({ _id: 'issues' }, { $set: { current: count } });

print('New Issue count: ', count);
