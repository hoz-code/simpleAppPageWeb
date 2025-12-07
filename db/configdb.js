//import pg from 'pg'
import { Client } from 'pg'

const database = async () => {

    const client = new Client({
        user: 'cruduser',
        password: '123+*',
        host: 'localhost',
        database: 'prbdatabase',
        port: 5432,
    })

    await client.connect()

    try {
        return 1
    } 
    
    catch (err) {
        return err
    } 
    
    /*finally {
        console.log('///////////////////////////')
        await client.end()
    }*/

}

export { database };
