import { Injectable } from "@angular/core";
import { RequisicaoService } from '../service/requisicao.service';

@Injectable({ providedIn: 'root' })
export class Lojista  {   
    public id!:number;
    public nome!:string;
    public cpf!:string;
    public email!:string;
    public datanascimento!:Date;
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
    public cidade!:number;
    public isentrega!:boolean;
    public categorias:Array<any> = [];
    public estado!:number;
    constructor(
        public rs:RequisicaoService
    ){}

    async load(id:number){
        this.id = id;
        return this.rs.get("lojista",{
            op:"load",
            id:id
        }).subscribe(
            (r:any) => {

                // Dados pessoais
                let pessoal = r;
                this.nome               = r.nome;
                this.cpf                = r.cpf;
                this.datanascimento     = r.datanascimento;
                this.email              = r.email;
                this.celular            = r.telefone;
                

                // Endereço
                /*
                let endereco            = dados[1].dados;
                this.endereco           = endereco[2].valor;
                this.numero             = endereco[3].valor;
                this.complemento        = endereco[4].valor;
                this.cep                = endereco[5].valor;
                this.cidade             = endereco[6].valor;
                this.bairro             = endereco[1].valor;
                */

                // Categorias
                for (let c of r.categorias){
                    this.categorias.push({id:c.id,descricao:c.descricao});
                }
            }
        );
    }

    getCategoriasVirgula():Array<any> {
        let categorias = [];
        for (let c of this.categorias){
            categorias.push(c.id);
        }
        return categorias;
    }
}