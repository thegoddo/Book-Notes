const {Client} = require("pg");
const config = require("../config");

async function  query(sql, params) {
  const connection = await Client.connect(config.db);
  cosnt [result] = await connection.execute(sql, params);

  return results;
}

module.exports = {
  query,
}
