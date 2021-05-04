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

// Lojista teste 
export const lojista = {
  nome:"",
  cpf:"",
  email:"",
  datanascimento:"",
  cnpj:"",
  razaosocial:"",
  nomefantasia:"",
  fixo:"",
  celular:"",
  endereco:"",
  cep:"",
  bairro:"",
  cidade:"",
  numero:"",
  complemento:"",  
  senha:"",
  csenha:"",
  isentrega:"S",
  categorias:"[]",
  estado:""
}

// Cliente Teste
export const cliente = {
  nome:"",
  cpf:"",
  datanascimento:"",
  fixo:"",
  celular:"",
  endereco:"",
  numero:"",
  complemento:"",  
  cep:"",
  bairro:"",
  cidade:"",
  estado:"",
  email:"",
  senha:""
}

export const perfil:string = "";

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
