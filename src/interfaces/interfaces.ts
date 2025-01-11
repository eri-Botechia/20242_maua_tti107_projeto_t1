export interface IJSONAuthor{
        id: string;
        primeiro_nome: string;
        ultimo_nome: string;
        username: string;
        email_cadastrado: string;
        midia_id_avatar: string;
        midia_id_cover: string;
        midia_id_item: string;
}

export interface  IJSONPost{
        id:string;
        title: string;
        description: string;
        author: IJSONAuthor;
}