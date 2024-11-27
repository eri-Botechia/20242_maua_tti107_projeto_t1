import { Request, Response } from "express";
import fs from 'fs';
import path from 'path';

export const getNotebooks = async(req: Request, res: Response) => {
    try {
        const readStream: any = fs.readFileSync(path.join(__dirname, './../../JSON', 'reportNotebooks.json'), 'utf-8');
        const readFile = JSON.parse(readStream);
        console.log(readFile);
        res.status(200).json({ message: 'notebooks', result: readFile });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error reading file' });
    }
};

export const getAll = async(req: Request, res: Response) => {
    res.status(200).json({ message: 'LIST' });
};

export const getItem = async(req: Request, res: Response) => {
    const { id } = req.params;
    res.status(200).json({ message: 'ITEM', id: id });
};

export const postItem = async(req: Request, res: Response) => {
    const { body } = req;
    res.status(201).json({ message: 'CREATE', body });
};

export const putItem = async(req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;
    res.status(200).json({ message: 'ITEM Updated', body });
};

export const deleteItem = async(req: Request, res: Response) => {
    res.status(200).json({ message: 'ITEM DELETE' });
};