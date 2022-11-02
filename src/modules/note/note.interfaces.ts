import { Document } from "mongoose";

export enum Tag {
  ToDo = "ToDo",
  Doing = "Doing",
  Done = "Done",
}

export interface INote extends Document {
  title: string;
  body: string;
  tag: Tag;
}
