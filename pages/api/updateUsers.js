import {table, getRegistroUsers} from './utils/Airtable';

export default async (req, res) => {
    const { id , fields} = req.body;
    try {
        const updatedUser = await table.update([{id, fields}]);
        res.statusCode = 200;
        res.json(getRegistroUsers(updatedUser[0]));
    }catch (err) {
        res.statusCode = 500;
        res.json({msg: 'Algo deu errado'});
    }
};