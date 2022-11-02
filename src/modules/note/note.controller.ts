import { Request, Response } from "express";
import httpStatus from "http-status";
import { catchAsync } from "../../utils";
import * as noteService from "./note.service";
import mongoose from "mongoose";

export const createNote = catchAsync(async (req: Request, res: Response) => {
  const user = await noteService.createNote(req.body);
  res.status(httpStatus.CREATED).send(user);
});

export const getNotes = catchAsync(async (req: Request, res: Response) => {
  const result = await noteService.queryNotes(req.query);
  res.send(result);
});

export const deleteNote = catchAsync(async (req: Request, res: Response) => {
  if (typeof req.params["id"] === "string") {
    await noteService.deleteNoteById(
      new mongoose.Types.ObjectId(req.params["id"])
    );
    res.status(httpStatus.NO_CONTENT).send();
  }
});
