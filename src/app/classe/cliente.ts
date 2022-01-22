import { Injectable } from '@angular/core';
@Injectable({ providedIn: 'root' })
export class Cliente {
    public id!:number;
    public nome!:string;
    public cpf!:string;
    public datanascimento!:string;
    public fixo!:string;
    public celular!:string;
    public endereco!:string;
    public numero!:string;
    public complemento!:string;
    public cep!:string;
    public bairro!:string;
    public cidade!:string;
    public estado!:string;
    public email!:string;
    public senha!:string;
}