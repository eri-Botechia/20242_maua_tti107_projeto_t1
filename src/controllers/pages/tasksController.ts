import { Request, Response } from "express";

export const getIndex= async(req: Request, res: Response) => {
    res.sendFile('tasks-list.html', {root: 'public'});    
};

export const getItem = async(req: Request, res: Response) => {
    const {id} =req.params;
    res.sendFile('task.html', {root: 'public'});    
};


export const postItem= async(req: Request, res: Response) => {
    const {body} = req;
    res.status(201).json({message: 'CREATE' , body });    
};

export const putItem = async(req: Request, res: Response) => {
    const {id} =req.params;
    const {body} = req;
    res.status(200).json({message: 'ITEM Updated', body  });    
};

export const deleteItem = async(req: Request, res: Response) => {
    res.status(200).json({message: 'ITEM DELETE'  });    
};