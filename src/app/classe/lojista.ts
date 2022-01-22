import { Injectable } from "@angular/core";
import { RequisicaoService } from '../service/requisicao.service';
import { PropostaService } from '../dashboard/proposta/proposta.service';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class Lojista  {   
    public id!:number;
    public nome!:string;
    public cpf!:string;
    public email!:string;
    public datanascimento!:string;
    public cnpj!:string;
    public razaosocial!:string;
    public nomefantasia!:string;
    public fixo!:string;
    public celular!:string;
    public endereco!:string;
    public numero!:string;
    public complemento!:string;
    public cep!:string;
    public bairro!:number;
    public bairro_desc!:string;
    public cidade!:number;
    public isentrega!:boolean;
    public categorias:Array<any> = [];
    public estado!:number;
    public propostas!:Observable<any>;
    public loja:any;
    public logo!:string;

    constructor(
        public rs:RequisicaoService,
        public proposta:PropostaService
    ){}

    getCategoriasVirgula():Array<any> {
        let categorias = [];
        for (let c of this.categorias){
            categorias.push(c.id);
        }
        return categorias;
    }
}