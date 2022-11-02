import express, { Router } from "express";
import { noteController, noteValidation } from "../modules/note";
import { validate } from "../validate";

const router: Router = express.Router();

router
  .route("/")
  .post(validate(noteValidation.createNote), noteController.createNote)
  .get(validate(noteValidation.getNotes), noteController.getNotes);

export default router;
