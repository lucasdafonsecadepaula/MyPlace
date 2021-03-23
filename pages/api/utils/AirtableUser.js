const Airtable = require("airtable");
const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY_USER }).base(
  process.env.AIRTABLE_BASE_ID_USER
);
const table = base(process.env.AIRTABLE_TABLE_NAME_USER);

const registroUsers = (records) => {
  return records.map((record) => getRegistroUsers(record));
};

const getRegistroUsers = (record) => {
  return {
    id: record.id,
    fields: record.fields,
  };
};

export { table, getRegistroUsers, registroUsers };
