const dbHost = "127.0.0.1";
const dbName = "delilah_resto";
const dbPort = "3306";
const dbUser = "root";
const password = "3146340903";

const dbPath = `mysql://${dbUser}:${password}@${dbHost}:${dbPort}/`;

module.exports = { dbName, dbPath };
