import express, { Router } from "express";
import { noteController, noteValidation } from "../modules/note";
import { validate } from "../validate";

const router: Router = express.Router();

router
  .route("/")
  .post(validate(noteValidation.createNote), noteController.createNote)
  .get(validate(noteValidation.getNotes), noteController.getNotes)
  .delete(validate(noteValidation.deleteNote), noteController.deleteNote)
  .patch(validate(noteValidation.updateNote), noteController.updateNote);

router
  .route("/:id")
  .delete(validate(noteValidation.deleteNote), noteController.deleteNote)
  .post(validate(noteValidation.createNote), noteController.createNote)
  .get(validate(noteValidation.getNotes), noteController.getNotes)
  .patch(validate(noteValidation.updateNote), noteController.updateNote);

export default router;
