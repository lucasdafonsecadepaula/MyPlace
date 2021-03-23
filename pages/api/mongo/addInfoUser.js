import { connectToDatabase } from "../../../mongodb/mongodb";

export default async function addInfo(req, res) {
  const { db } = await connectToDatabase();

 const users = await db.collection("users").insertOne({"sla":"sla"});

  const up = await db.collection("users")
  .updateOne({novo: "1"},
    {$set: {
      sla: "DEU BOM PORRA!!",
      esse: "NAO TINHA ATT AGR!!"
    }},
    {}
  )
  

  res.json({
    users: users,
    up: up,
  });
}
