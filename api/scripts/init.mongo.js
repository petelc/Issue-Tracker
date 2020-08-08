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
        description: 'Steps to recreate the problem:'
          + '\n1. Refresh the browser.'
          + '\n2. Select "New" in the filter'
          + '\n3. Refresh the browser again. Note the warning in the console:'
          + '\n   Warning: Hash history cannot PUSH the same path; a new entry'
          + '\n   will not be added to the history stack'
          + '\n4. Click on Add.'
          + '\n5. There is an error in console, and add doesn\'t work.',
      },
      {
        id: 2,
        status: 'Assigned',
        owner: 'Eddie',
        effort: 14,
        created: new Date(2020, 5, 16),
        due: new Date(2020, 7, 16),
        title: 'Missing bottom border on panel',
        description: 'There needs to be a border in the bottom in the panel'
          + ' that appears when clicking on Add',
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
