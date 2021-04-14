import { db } from "../config";

const Note = db.sequelize.define("notes", {
  note: db.Sequelize.TEXT,
  tag: db.Sequelize.STRING,
});

export default Note;
