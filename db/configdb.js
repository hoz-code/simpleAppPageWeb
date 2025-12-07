import pg from 'pg'

const database = async (nameQuery, info) => {
    const cruduser = new pg.Client({
        user: 'cruduser',
        password: '123+*',
        host: 'localhost',
        database: 'prbdatabase',
        port: 5432,
    })
    await cruduser.connect()

    try {
        let queryStm = ''
        let res = ''
        switch (nameQuery) {
            case "pokeinsert":
                queryStm = `INSERT INTO pokeinfo (code, name) VALUES (${info.code}, '${info.name}');`
                res = await cruduser.query(`${queryStm}`)
                return res
        
            case "pokeselect":
                queryStm = `SELECT * FROM pokeinfo;`
                res = await cruduser.query(`${queryStm}`)
                return res
            
            case "pokeupdate":
                queryStm = `UPDATE pokeinfo SET name = '${info.name}' WHERE code = ${info.code};`
                console.log(queryStm)
                res = await cruduser.query(`${queryStm}`)
                return res

            case "pokedelete":
                queryStm = `DELETE FROM pokeinfo WHERE code = ${info.code};`
                console.log(queryStm)
                res = await cruduser.query(`${queryStm}`)
                return res
        }
    }

    catch (err) {
        console.log(err)
        return err
    }

    finally {
        console.log('///////////////////////////')
        await cruduser.end()
    }

}

export { database };
