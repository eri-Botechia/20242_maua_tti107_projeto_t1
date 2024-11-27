import { IdGenerator } from '../services/IdGenerator';
export class Post {
    private id:string|undefined;
    private imgUrl : string|undefined;	

    constructor(id:string|undefined, imgUrl:string|undefined){
        this.id=this.getId(id); 
        this.imgUrl=this.getImgUrl(imgUrl);
    }

    getId(id:string|undefined):string{
        const idGenerator = new IdGenerator();
        this.id=idGenerator.generate();
        return this.id;
    }

    getImgUrl (imgUrl:string|undefined):string{
        const defaultImgUrl:string="https://i.ibb.co/WP3fz4c/avatar001.png";
        if(imgUrl===undefined|| imgUrl== null || imgUrl==""){
             this.imgUrl=defaultImgUrl;
            return this.imgUrl;
        }else{
            const imgDefault:string = defaultImgUrl
            this.imgUrl = imgDefault
            return this.imgUrl;
        }
    }   
}