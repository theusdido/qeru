import { Injectable } from '@angular/core';
import { RequisicaoService } from 'src/app/service/requisicao.service';
import { Lojista } from '../../classe/lojista';

@Injectable({
  providedIn: 'root'
})
export class LojistaService {

  constructor(
    public lojista:Lojista,
    public rs:RequisicaoService
  ) { }

  async load(id:number){
    return this.rs.get("lojista",{
        op:"load",
        id:id
    }).subscribe(
        async (r:any) => {            
            // Dados do Lojista
            this.lojista.id                 = id;
            this.lojista.nome               = r.nome;
            this.lojista.cpf                = r.cpf;
            this.lojista.datanascimento     = r.datanascimento;
            this.lojista.email              = r.email;
            this.lojista.celular            = r.telefone;

            // Dados da Loja
            this.lojista.nomefantasia       = r.loja[0].nomefantasia;
            this.lojista.razaosocial        = r.loja[0].razaosocial;
            this.lojista.cnpj               = r.loja[0].cnpj;
            this.lojista.fixo               = r.loja[0].telefone;

            // Endereço
            this.lojista.bairro_desc        = r.endereco[0].td_bairro_desc;

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
              this.lojista.categorias.push({id:c.id,descricao:c.descricao});
            }

            this.lojista.propostas = await this.lojista.proposta.getCategoria(this.lojista.getCategoriasVirgula());
        }
    );
}
}