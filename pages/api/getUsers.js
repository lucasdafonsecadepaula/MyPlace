import { table, registroUsers } from "./utils/AirtableUser";

export default async (req, res) => {
  try {
    const records = await table.select({}).firstPage();
    const registro = registroUsers(records);
    res.statusCode = 200;
    res.json({ registro });
  } catch (err) {
    res.statusCode = 500;
    res.json({ msg: "Algo deu errado" });
  }
};
