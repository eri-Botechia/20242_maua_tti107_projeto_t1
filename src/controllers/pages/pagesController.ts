import { Request, Response } from "express";

    
    export const getSlash = async(req: Request, res: Response) => {
        res.status(301).redirect('/');
};
    

export const getContact = async(req: Request, res: Response) => {
    try {
        res.status(200).sendFile('pages/contact.html', { root: 'public' });
    } catch (error) {
        console.error(error);
        throw new Error('error')
        res.send('ERROR ' )
    }
};

export const getNotebooks = async(req: Request, res: Response) => {
    try {
        res.status(200).sendFile('pages/notebooks.html', { root: 'public' });
    } catch (error) {
        console.error(error);
        throw new Error('error')
        res.send('ERROR ' )
    }
};


export const getTools = async(req: Request, res: Response) => {
    try {
        res.status(200).sendFile('pages/tools.html', { root: 'public' });
    } catch (error) {
        console.error(error);
        throw new Error('error')
        res.send('ERROR ' )
    }
};
export const getSearch = async(req: Request, res: Response) => {
    try {
        res.status(200).sendFile('pages/search.html', { root: 'public' });
    } catch (error) {
        console.error(error);
        throw new Error('error')
        res.send('ERROR ' )
    }
};
