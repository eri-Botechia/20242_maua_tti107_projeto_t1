import { Request, Response } from "express";

export const getMain = async(req: Request, res: Response) => {
    res.status(200).sendFile('index.html', { root: 'public' });
};


export const getNotebooks = async(req: Request, res: Response) => {
    res.sendFile('notebooks.html', { root: 'public' });
};




