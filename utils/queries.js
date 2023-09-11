import { Client } from "pg";

const client = new Client({
    host: 'localhost',
    user: 'abdulsalamabodunrin',
    database: 'persons',
    password: 'hadith1002',
    port: 5432
})
client.connect();

export default client;
