import Joi from "joi";
import { Tag } from "./note.interfaces";

const createNoteBody = {
  title: Joi.string().required(),
  body: Joi.string().required(),
  tag: Joi.string().valid(...Object.values(Tag)),
};

export const getNotes = {
  query: Joi.object().keys({
    title: Joi.string(),
    body: Joi.string(),
    tag: Joi.string().valid(...Object.values(Tag)),
  }),
};

export const createNote = {
  body: Joi.object().keys(createNoteBody),
};
