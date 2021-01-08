const mysql = require("mysql2/promise");
const config = require("config.json").db;

let pool = mysql.createPool(config);

function DBException(type, value) {
  this.name = "DBException";
  this.type = type;
  this.value = value;
  this.message = `DBException error when ${this.type} in ${this.value} function`;
}
DBException.prototype.toString = function () {
  return this.message;
};

let select = async (sql, values) => {
  try {
    const conn = await pool.getConnection(async (conn) => conn);
    try {
      const [rows] = await conn.query(sql, values);

      conn.release();
      return rows;
    } catch (err) {
      conn.release();
      throw new DBException("query", "select");
    }
  } catch (err) {
    throw new DBException("connection", "select");
  }
};

let change = async (rows) => {
  try {
    const conn = await pool.getConnection(async (conn) => conn);

    try {
      await conn.beginTransaction();

      for (const row of rows) {
        await conn.query(row.sql, row.args);
      }

      await conn.commit();
      conn.release();

      return true;
    } catch (err) {
      await conn.rollback();
      conn.release();
      console.error(err);
      throw new DBException("transaction", "change");
    }
  } catch (err) {
    throw new DBException("connection", "change");
  }
};

exports.select = select;
exports.change = change;
