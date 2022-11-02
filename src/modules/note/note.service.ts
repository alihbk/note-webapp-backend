import { INote } from "./note.interfaces";
import Note from "./note.model";
import mongoose from "mongoose";
import { ApiError } from "../../errors";
import httpStatus from "http-status";

export const getNoteById = async (
  id: mongoose.Types.ObjectId
): Promise<INote | null> => Note.findById(id);

export const createNote = async (body: INote): Promise<INote> => {
  return Note.create(body);
};

export const queryNotes = async (filter: Record<string, any>) => {
  const notes = await Note.find(filter);
  return notes;
};

export const deleteNoteById = async (
  userId: mongoose.Types.ObjectId
): Promise<INote | null> => {
  const user = await getNoteById(userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, "User not found");
  }
  await user.remove();
  return user;
};
