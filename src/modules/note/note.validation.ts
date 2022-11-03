import Joi from "joi";
import { objectId } from "../../validate/custom.validation";
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

export const deleteNote = {
  params: Joi.object().keys({
    id: Joi.string().custom(objectId),
  }),
};

export const updateNote = {
  params: Joi.object().keys({
    id: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      title: Joi.string(),
      body: Joi.string(),
      tag: Joi.string().valid(...Object.values(Tag)),
    })
    .min(1),
};
