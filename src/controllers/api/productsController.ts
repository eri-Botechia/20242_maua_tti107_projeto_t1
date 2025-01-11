import { Request, Response } from "express";
import { NotFoundError } from "../../errors/NotFoundError";
import { db } from "../../database/knexDB";
import { IdGenerator } from "../../services/IdGenerator";
import { LIMIT_LENGTH } from "sqlite3"; // Add the correct path to your models
import { setDateToday, sumList } from "../../helpers/helpers";
import { TokenManager } from "../../services/TokenManager";
import { UnauthorizedError } from "../../errors/UnauthorizedError";

export const getAll = async (req: Request, res: Response) => {
    try {
        const dbList = await db.raw(`
            SELECT posts.*, produto_stock.*, produto_financeiro.*, produto_detalhes.*, midias.*, 
                   usuarios.primeiro_nome, usuarios.ultimo_sobrenome, usuarios.username, usuarios.is_active
            FROM posts
            INNER JOIN produto_stock ON posts.id = produto_stock.id_posts
            INNER JOIN produto_financeiro ON produto_financeiro.id_post = produto_stock.id_posts
            INNER JOIN produto_detalhes ON produto_detalhes.id_post = produto_stock.id_posts
            INNER JOIN midias ON midias.id_posts = posts.id
            INNER JOIN usuarios ON posts.AUTOR = usuarios.id
        `);
        if (dbList.length === 0 || dbList[0].length === 0) {
            throw new NotFoundError();
        } else {
            res.status(200).json(dbList);
        }
    } catch (error: any) {
        if (error.status === 500) {
            res.status(500).send('Internal server error');
        } else {
            res.status(400).send('Bad request');
        }
    }
};

export const getItem = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const dbList = await db.raw(`
            SELECT posts.*, produto_stock.*, produto_financeiro.*, produto_detalhes.*, midias.*, 
                   usuarios.primeiro_nome, usuarios.ultimo_sobrenome, usuarios.username, usuarios.is_active
            FROM posts
            INNER JOIN produto_stock ON posts.id = produto_stock.id_posts
            INNER JOIN produto_financeiro ON produto_financeiro.id_post = produto_stock.id_posts
            INNER JOIN produto_detalhes ON produto_detalhes.id_post = produto_stock.id_posts
            INNER JOIN midias ON midias.id_posts = posts.id
            INNER JOIN usuarios ON posts.AUTOR = usuarios.id
            WHERE posts.id = ${id};
        `);

        if (!dbList || dbList.length === 0 || !dbList[0] || dbList[0].length === 0) {
            throw new NotFoundError();
        } else {
            res.status(200).json({ message: 'PRODUTO ENCONTRADO', result: dbList[0] });
        }
    } catch (error: any) {
        if (error instanceof NotFoundError) {
            res.status(404).json({ message: 'Item not found' });
        } else {
            res.status(500).json({ message: 'Internal Server Error', error: error.message });
        }
    }
};

export const postItem = async (req: Request, res: Response) => {
    try {
        const today = new Date();
        const todayISO = today.toISOString();
        const idGenerator = new IdGenerator();
        const codigo: string = idGenerator.generate();
        const id = req.body.id as string | undefined;
        const id_posts_tipo: number = 1;
        const titulo = req.body.titulo as string;
        const content = req.body.content as string;
        const autor = req.body.autor as number;
        const created_at = todayISO;
        const updated_at = todayISO;
        const localizacao = req.body.localizacao as string | undefined;
        const is_unique_size = req.body.is_unique_size as number;
        const inputUnico = req.body.unico as number | undefined;
        const inputPP = req.body.pp as number | undefined;
        const inputP = req.body.p as number | undefined;
        const inputM = req.body.m as number | undefined;
        const inputG = req.body.g as number | undefined;
        const inputGG = req.body.gg as number | undefined;
        const inputXG = req.body.xg as number | undefined;
        const inputXXG = req.body.xxg as number | undefined;
        let unico: null | number = null;
        let pp: null | number = null;
        let p: null | number = null;
        let m: null | number = null;
        let g: null | number = null;
        let gg: null | number = null;
        let xg: null | number = null;
        let xxg: null | number = null;

        const imgUrl = req.body.imgUrl as string | undefined;

        const setSizeQuantityOrNull = (size: number | undefined, size2Replace: number | null): number | null => {
            if (size && size != undefined) {
                size2Replace = size;
                return size2Replace;
            } else {
                return size2Replace;
            }
        };

        setSizeQuantityOrNull(inputUnico, unico);
        setSizeQuantityOrNull(inputPP, pp);
        setSizeQuantityOrNull(inputP, p);
        setSizeQuantityOrNull(inputM, m);
        setSizeQuantityOrNull(inputG, g);
        setSizeQuantityOrNull(inputGG, gg);
        setSizeQuantityOrNull(inputXG, xg);
        setSizeQuantityOrNull(inputXXG, xxg);

        const sizesStock: number[] | undefined[] = [];
        const setStockSizes = (size: number | null, list: (number | undefined | any)[] = []): (number | undefined)[] => {
            if (size !== null) {
                list.push(size);
            }
            return list;
        };

        const stockList: undefined[] | number[] = [];
        setStockSizes(unico, stockList);
        setStockSizes(pp, stockList);
        setStockSizes(p, stockList);
        setStockSizes(m, stockList);
        setStockSizes(g, stockList);
        setStockSizes(gg, stockList);
        setStockSizes(xg, stockList);
        setStockSizes(xxg, stockList);

        const totalDaLista: number = sumList(stockList);

    } catch (error: any) {
        if (error instanceof NotFoundError) {
            res.status(404).json({ message: 'Item not found' });
        } else {
            res.status(500).json({ message: 'Internal Server Error', error: error.message });
        }
    }
}
export const putItem = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const titulo = req.body.titulo as string || undefined;
        const content = req.body.content as string || undefined;
        const token = req.headers.token as string || undefined;

        if (!token) {
            throw new Error('Token is required');
        } else if (token && token.length > 1) {
            const tokenData = new TokenManager();
            const tokenDecode: any = tokenData.getPayload(token);

            const authorDB = await db.raw(`SELECT author FROM posts WHERE id = ${id}`);
            const authorId: any = authorDB[0]?.author;

            if (authorId && tokenDecode && tokenDecode.id === authorId) {
                const updated_at: string = setDateToday();

                const dbList = await db.raw(`
                    SELECT posts.*, produto_stock.*, produto_financeiro.*, produto_detalhes.*, midias.*, 
                           usuarios.primeiro_nome, usuarios.ultimo_sobrenome, usuarios.username, usuarios.is_active
                    FROM posts
                    INNER JOIN produto_stock ON posts.id = produto_stock.id_posts
                    INNER JOIN produto_financeiro ON produto_financeiro.id_post = produto_stock.id_posts
                    INNER JOIN produto_detalhes ON produto_detalhes.id_post = produto_stock.id_posts
                    INNER JOIN midias ON midias.id_posts = posts.id
                    INNER JOIN usuarios ON posts.AUTOR = usuarios.id
                    WHERE posts.id = ${id}
                    AND posts.id_posts_tipo = 1;
                `);

                if (!dbList || dbList.length === 0 || !dbList[0]) {
                    throw new NotFoundError();
                } else {
                    const updatePost = await db.raw(`
                        UPDATE posts
                        SET titulo = '${titulo}', content = '${content}', updated_at = '${updated_at}'
                        WHERE id = ${id};
                    `);

                    if (updatePost) {
                        res.status(200).json({ message: 'PRODUTO ATUALIZADO', result: updatePost });
                    } else {
                        res.status(500).json({ message: 'Internal Server Error' });
                    }
                }
            } else {
                throw new Error('Token is required');
            }
        }
    } catch (error: any) {
        if (error instanceof NotFoundError) {
            res.status(404).json({ message: 'Item not found' });
        } else {
            res.status(500).json({ message: 'Internal Server Error', error: error.message });
        }
    }
};

export const deleteItem = async (req: Request, res: Response) => {
try {
     const {id} = req.params;
    if(!req.headers.token || req.headers.token === '' || req.headers.token === undefined|| req.headers.token === null ){
        throw new UnauthorizedError('token é necessário para deletar item');

    }else{
        const token = req.headers.token as string;
        const tokenManager = new TokenManager();
        const tokenPayload = tokenManager.getPayload(token);
        if(tokenPayload){
            const idUser = tokenPayload.id;
            const dbList = await db.raw(`
            SELECT * FROM posts WHERE id = ${id} AND autor = ${idUser};
        `);
        if(!dbList || dbList.length === 0 || !dbList[0] || dbList[0].length === 0 ){
            throw new NotFoundError();
        }else{
            const deletePost = await db.raw(`
                DELETE FROM posts WHERE id = ${id};
            `);
            if(deletePost){
                res.status(200).json({message: 'Item deletado com sucesso'});
            }else{
                throw new Error('Erro ao deletar item');
            }
        }
    }
}
} catch (error:any) {
    console.log(error)
    res.status(500).json({message: 'Internal Server Error', error: error.message});
}
}