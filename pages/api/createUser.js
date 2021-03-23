import { table } from "./utils/Airtable";

export default async (req, res) => {
  const { description } = req.body;
  try {
    const createdUser = await table.create([{ fields: { description } }]);
    const createdUser = {
      id: createdUser[0].id,
      fields: createdUser[0].fields,
    };
    res.statusCode = 200;
    res.json({ createdUser });
  } catch (err) {
    res.statusCode = 500;
    res.json({ msg: "Algo deu errado" });
  }
};
