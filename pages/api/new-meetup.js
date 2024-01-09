import { MongoClient } from 'mongodb';

// import { MONGO_URI } from '../../.env';

async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;

    const { title, image, address, description } = data;
    try {
      const client = await MongoClient.connect(process.env.MONGO_URI);
      const db = client.db();

      const meetupsCollection = db.collection('meetups');
      const result = await meetupsCollection.insertOne(data);

      console.log(result);

      client.close();

      res.status(201).json({ message: 'Meetup inserted.' });
    } catch (error) {
      throw new Error('Connection error');
    }
  }
}
export default handler;
