//import pg from 'pg'
import pg from 'pg'

const database = async () => {

    const cruduser = new pg.Client({
        user: 'cruduser',
        password: '123+*',
        host: 'localhost',
        database: 'prbdatabase',
        port: 5432,
    })

    await cruduser.connect()
    // INSERT INTO pokeinfo (code, name) VALUE (29, 'nidoran');
    // SELECT * FROM pokeinfo;
    try {
        //const res = await cruduser.query("INSERT INTO pokeinfo (code, name) VALUES (29, 'nidoran');")
        const res = await cruduser.query("SELECT * FROM pokeinfo;")
        await cruduser.end()
        return res.rows
    }

    catch (err) {
        return err
    }

    /*finally {
        console.log('///////////////////////////')
        
    }*/

}

export { database };
