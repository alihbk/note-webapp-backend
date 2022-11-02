import { INote } from "./note.interfaces";
import Note from "./note.model";

export const createNote = async (body: INote): Promise<INote> => {
  return Note.create(body);
};

export const queryNotes = async () => {
  const notes = await Note.find();
  return notes;
};
