import { Injectable } from "@angular/core";

@Injectable()
export class Subcategoria {
    public id!:number;
    public descricao!:string;
    public categoria!:number;
    public atributos!:Array<any>;
    public inativo!:boolean;
    public isExcluir = false;
}
