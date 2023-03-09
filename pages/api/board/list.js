import mariadb from 'mariadb';

const dbconfig = {
    host: process.env.MARIADB_HOST,
    user: process.env.MARIADB_USER,
    password: process.env.MARIADB_PWD,
    database: process.env.MARIADB_DB
};

export default async (req, res) => {
    let conn;
    const sql = 'select bno, title, userid, date_format(regdate, "%Y-%m-%d") regdate, ' +
             ' views from board order by bno desc limit 0,25 '
    try {
        conn = await mariadb.createConnection(dbconfig);

        const rowdata = await conn.query(sql)
        res.status(200).json(rowdata);
    } catch (err){
        console.log(err);
        res.status(500).json(err);
    } finally {
        if (conn) await conn.close();
    }
}