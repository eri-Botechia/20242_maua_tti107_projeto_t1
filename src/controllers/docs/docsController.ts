import { Request, Response } from "express";

export const getSlash = async(req: Request, res: Response) => {
    res.status(200).json({message: 'DOCS Slash'});	
};
