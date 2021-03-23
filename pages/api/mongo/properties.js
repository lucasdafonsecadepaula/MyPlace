import { connectToDatabase } from "../../../mongodb/mongodb";

export default async function (req, res) {
  const { db } = await connectToDatabase();

  const users = await db.collection("users").find({}).limit(25).toArray();
  const locais = await db.collection("locais").find({}).limit(25).toArray();

  res.json({
    users: users,
    locais: locais,
  });
}
