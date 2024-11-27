import { create } from "domain";
import { IdGenerator } from "../services/IdGenerator";

export class User {
    id:string|undefined;
    primeiro_nome: string;
    ultimo_nome: string;
    email: string;
    password: string;
    permanentLink: string|undefined;
    avatarImg : string |undefined;
    constructor(
        id:string|undefined,
        primeiro_nome: string,
        ultimo_nome: string,
        email: string,
        password: string,
        permanentLink: string|undefined,
        avatarImg : string |undefined
    ) {
        this.id = id;
        this.primeiro_nome = primeiro_nome;
        this.ultimo_nome = ultimo_nome;
        this.email = email;
        this.password = password;
        this.permanentLink = permanentLink;
        this.avatarImg = avatarImg;
    }

    getId(id:string|undefined):void {
        const newIdGenerator = new IdGenerator();
        if(id === undefined){
            const newIdGenerator = new IdGenerator();
            this.id = newIdGenerator.generate();
        }else{
            this.id=id;
        }
    }
    getPermanentLink(id:string|undefined):void {
        const linkGenerator = new IdGenerator();
        if(this.permanentLink === undefined){
            const newIdGenerator = new IdGenerator();
            this.id = newIdGenerator.generate();
        }else{
            this.id=id;
        }
    }

    getAvatarImgUrl(avatarImg:string|null):void{
        const defaultAvatarImg:string="";
        if(avatarImg===null){
            this.avatarImg=defaultAvatarImg;
        }else{
            this.avatarImg=avatarImg;
        }
    }
    
}