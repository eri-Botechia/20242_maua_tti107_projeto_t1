import { Request, Response } from "express";
import tasksData from './../../JSON/tasksData.json';
import { ITEM_CATEGORY } from "../../enums/enums";



interface IItem {
  id: string;
  codigo: string;
  endereco: string;
  tipo: number;
  categoria: ITEM_CATEGORY;
}

interface ITask {
   id: number,
   aula: number,
   codigo:string,
   titulo:string,
   professor: string, 
   tipo:number,
   tax:number,
   presentations:string,
   books:string,
   notebooks: string
}
export const getIndex= async(req: Request, res: Response) => {
     const result = await tasksData;
    res.status(200).json({message: 'LIST', result  });    
};

export const getItem = async(req: Request, res: Response) => {
    const id =req.params.id;
    console.log(id);
    console.log(tasksData.result);
    const order:number = Number(id)-1
    const item:ITask|undefined =  await  tasksData.result[order]
    res.status(200).json({message: 'ITEM ', result: item});    
};


export const postItem= async(req: Request, res: Response) => {
    const {body} = req;

    const semestre = req.body.inputSemestre as number
    const anoCursado = req.body.inputAnoCursado as number
    const titulo = req.body.inputTitulo as string 
    const professor = req.body.inputProfessor as string
    const key1_slides = req.body.inputKey1 as string || undefined;
    const key2_books = req.body.inputKey2 as string || undefined;
    const key3_notebooks = req.body.inputKey3 as string || undefined;
    const nroAula = req.body.inputNroAula as number

  
    const checkKeysEmptyAndSetKeys = async (keys: (string | undefined)[]): Promise<(string | undefined)[]> => {
        const filteredKeys = keys.filter(key => key !== undefined);
        return filteredKeys;
    };
    
    // Uso da função
    const keys = await checkKeysEmptyAndSetKeys([key1_slides, key2_books, key3_notebooks]);

    const tax = async (keys: (string | undefined)[]): Promise<Number> => {	
      let tax = 0;
      if(keys.length === 2) {
        tax = 1;
        return tax;
      }else if(keys.length === 1){
        tax = 2;
        return tax;
      }else if(keys.length === 0){
        tax = 3;
        return tax;
      }else{
        tax = 0;
        return tax;
      }
    }
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