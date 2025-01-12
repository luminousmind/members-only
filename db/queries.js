const pool = require("./pool");

async function executeSQL(SQL) {
    const {rows} = await pool.query(
        SQL
    );

    return rows;
}

module.exports = executeSQL;