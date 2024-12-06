import { Request, Response } from 'express';
export const getSignUp= async(req: Request, res: Response) => {
    res.sendFile('registration.html', {root: 'public'});    
};

export const getSignIn = async(req: Request, res: Response) => {
    const {id} =req.params;
    res.sendFile('login.html', {root: 'public'});    
};


export const getRecovery= async(req: Request, res: Response) => {
    const {body} = req;
    res.sendFile('recovery.html', {root: 'public'});    
};
