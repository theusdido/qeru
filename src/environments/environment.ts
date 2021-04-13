// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { globalEnvironment } from '../../environments/environments';
export const environment = {
  global: globalEnvironment,
  application: {
    project: 'Qeru'
  }
};

/* ************************************************************
  ENVIADO PELO GIT - EDILSON 
************************************************************* */

// Lojista teste 
export const lojista = {
  nome:"Bianca Peruchi",
  cpf:"044.725.179-14",
  email:"bianca_peruchi@hotmail.com",
  datanascimento:"27/11/1983",
  cnpj:"53.848.608/0001-37",
  razaosocial:"Peruchis Store LTDA",
  nomefantasia:"Peruchis Store",
  fixo:"(48) 3443-4141",
  celular:"(48) 9.9659-9350",
  endereco:"Rua Walter da Silva Medeiros",
  numero:"85",
  complemento:"",
  cep:"88804-770",
  bairro:"Jardim Angélica",
  cidade:"Criciúma",
  senha:"12345678",
  csenha:"12345678",
  isentrega:"S",
  categorias:"[7,13]",
  estado:""
}

export const perfil = "";

// Cliente Teste
export const cliente = {
  nome:"Edilson Bitencourt",
  cpf:"044.725.179-14",
  datanascimento:"27/11/1983",
  fixo:"(48) 3443-4141",
  celular:"(48) 9.9659-9350",
  endereco:"Rua Walter da Silva Medeiros, 85",
  cep:"88804-770",
  bairro:"Jardim Angélica",
  cidade:"Criciúma",
  estado:"SC"
}

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
