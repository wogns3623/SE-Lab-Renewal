const mysql = require("mysql2/promise");
const config = require("./config.json");

let pool = mysql.createPool(config);

exports.select = async (sql, values) => {
  try {
    const conn = await pool.getConnection(async (conn) => conn);
    try {
      const [rows] = await conn.query(sql, values);

      conn.release();
      return rows;
    } catch (error) {
      console.error("error on query", error);

      conn.release();
      return false;
    }
  } catch (error) {
    console.error("error on getting connection\n", error);

    return false;
  }
};

exports.change = async (rows) => {
  try {
    const conn = await pool.getConnection(async (conn) => conn);

    try {
      await conn.beginTransaction();

      rows.forEach(async (row) => {
        await conn.query(row.sql, row.args);
      });

      await conn.commit();
      conn.release();

      return true;
    } catch (error) {
      console.error(error);

      await conn.rollback();
      conn.release();

      return false;
    }
  } catch (error) {
    console.error(error);

    return false;
  }
};
