import express from "express";
import { INTERNAL_LINKS } from "../enum";
import { notesController } from "../controllers";

export default express
  .Router()
  .get(INTERNAL_LINKS.NOTES.GET_ALL_NOTES, notesController.findAll)
  .post(INTERNAL_LINKS.NOTES.SAVE_NOTES, notesController.savenotes);
