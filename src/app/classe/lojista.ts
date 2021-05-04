import { Injectable } from "@angular/core";
import { RequisicaoMiles } from '../miles/src/requisicao';

@Injectable({ providedIn: 'root' })
export class Lojista  {   
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
        public rm:RequisicaoMiles
    ){}

    async load(id:number){
        return this.rm.loadForm(86,id).subscribe(
            (r:any) => {
                /*
                // Dados pessoais
                let pessoal = dados[0].dados;
                this.nome               = pessoal[1].valor;
                this.cpf                = pessoal[2].valor;
                this.datanascimento     = pessoal[3].valor;
                this.email              = pessoal[4].valor;
                this.celular            = pessoal[6].valor;

                // Endereço
                let endereco            = dados[1].dados;
                this.endereco           = endereco[2].valor;
                this.numero             = endereco[3].valor;
                this.complemento        = endereco[4].valor;
                this.cep                = endereco[5].valor;
                this.cidade             = endereco[6].valor;
                this.bairro             = endereco[1].valor;

                // Categorias
                for (let d of dados){            
                    let entidade        = d.entidade;
                    if (entidade == 75){
                        this.categorias.push({id:d.id,texto:d.dados[1].valor});
                    }
                }
                */
            }
        );
    }
}