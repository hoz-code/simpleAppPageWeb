//import pg from 'pg'
import { Client } from 'pg'

const database = async () => {
    console.log('hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh')
    const client = new Client()
    await client.connect()

    try {
        console.log('rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr')
        const res = await client.query('SELECT $1::text as message', ['Hello world!'])
        console.log(res.rows[0].message) // Hello world!
    } catch (err) {
        console.log('****************************')
        console.error(err);

    } finally {
        console.log('///////////////////////////')
        await client.end()
    }

}





/*
const database = async () => {
    const {Client} = pg
    console.log('Im function database')
    const client = new Client();

    await client.connect()

    console.log('Im POSTGRES funciton')

    const res = await client.query('SELECT $1::text as message', ['Hello world!'])
    console.log(res.rows[0].message)
    await client.end()

};
*/
/*
const database = async () => {
    const { Client } = pg

    const client = new Client({
        host: '127.0.0.1', // use IPv4 to avoid ::1 issues
        port: 5432,
        user: 'your_db_user',
        password: 'your_db_password',
        database: 'your_db_name'
    });
    try {
        await client.connect()
        const res = await client.query('SELECT $1::text as message', ['Hello world!'])
        console.log(res.rows[0].message)
    } catch (err) {
        console.error('Connection error:', err);
    } finally {
        await client.end()
    }




};

const setPool = () => {
    const { pool } = new Pool(
        {
            user: 'user',
            host: 'localhost',
            database: 'databasename',
            password: 'password',
            port: 5432
        }
    )
}
database();
*/
export { database };
