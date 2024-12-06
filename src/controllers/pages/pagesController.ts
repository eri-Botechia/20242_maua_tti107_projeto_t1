import { Request, Response } from "express";

export const getIndex = async(req: Request, res: Response) => {
    res.status(200).sendFile("index.html", {root: "public"})
};

export const getTasks= async(req: Request, res: Response) => {
    res.status(200).sendFile("tasks-list.html", {root: "public"})
};

export const getTask = async(req: Request, res: Response) => {
    res.status(200).sendFile("task.html", {root: "public"})
};
export const createItem = async(req: Request, res: Response) => {
    res.status(200).sendFile("create.html", {root: "public"})
};

export const getNotebooks= async(req: Request, res: Response) => {
    res.status(200).sendFile("notebooks.html", {root: "public"})
};

export const getNotebook = async(req: Request, res: Response) => {
    res.status(200).sendFile("notebook.html", {root: "public"})
};

export const getBooks= async(req: Request, res: Response) => {
    res.status(200).sendFile("books.html", {root: "public"})
};

export const getBook = async(req: Request, res: Response) => {
    res.status(200).sendFile("book.html", {root: "public"})
};