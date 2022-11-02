import mongoose, { Schema, Document } from "mongoose";
import { INote, Tag } from "./note.interfaces";

const NoteSchema: Schema = new Schema({
  title: { type: String },
  body: { type: String },
  tag: { type: String, enum: Object.values(Tag) },
});

export default mongoose.model<INote>("Note", NoteSchema);
