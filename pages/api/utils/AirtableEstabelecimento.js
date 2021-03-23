const Airtable = require("airtable");
const base = new Airtable({
  apiKey: process.env.AIRTABLE_API_KEY_ESTABELECIMENTO,
}).base(process.env.AIRTABLE_BASE_ID_ESTABELECIMENTO);
const table = base(process.env.AIRTABLE_TABLE_NAME_ESTABELECIMENTO);

const registroEstab = (records) => {
  return records.map((record) => getRegistroEstab(record));
};

const getRegistroEstab = (record) => {
  return {
    id: record.id,
    fields: record.fields,
  };
};

export { table, getRegistroEstab, registroEstab };
