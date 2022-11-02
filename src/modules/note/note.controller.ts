import { Request, Response } from "express";
import httpStatus from "http-status";
import { catchAsync } from "../../utils";
import * as noteService from "./note.service";

export const createNote = catchAsync(async (req: Request, res: Response) => {
  const user = await noteService.createNote(req.body);
  res.status(httpStatus.CREATED).send(user);
});

export const getNotes = catchAsync(async (req: Request, res: Response) => {
  const result = await noteService.queryNotes();
  res.send(result);
});
