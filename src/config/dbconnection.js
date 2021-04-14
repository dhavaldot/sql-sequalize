const { Sequelize } = require('sequelize');
// const CONNECTION_URL = process.env.CONNECTION_URL;
const DATABASE_NAME = process.env.DATABASE_NAME;
const CONNECTION_URL = process.env.CONNECTION_URL + DATABASE_NAME;

console.log(`CONNECTION_URL`, DATABASE_NAME);
console.log(`CONNECTION_URL`, process.env.CONNECTION_URL);
console.log(`CONNECTION_URL`, CONNECTION_URL);
// const sequelize = new Sequelize(`${CONNECTION_URL}/${DATABASE}`);
const sequelize = new Sequelize(`mysql:root:Dhaval@06@localhost:3306/test`);

/* sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  }); */

sequelize.sync().then(() => {
	console.log(`Database & tables sync completed!`);
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

export default db;
