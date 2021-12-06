// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { LocalStorageService } from 'src/app/service/local-storage.service';
import { globalEnvironment } from '../../environments/environments';
import { Funcoes } from '../app/funcoes';

export const environment = {
  global: globalEnvironment,
  application: {
    project: 'Qeru'
  },  
  firebase: {
    apiKey: "",
    authDomain: "qeru-6981b.firebaseapp.com",
    databaseURL: "https://qeru-6981b-default-rtdb.firebaseio.com",
    projectId: "",
    storageBucket: "qeru-6981b.appspot.com",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
  },
  miles:{
    host:"https://teia.tec.br/miles/sistema/"
  }
};

// Lojista teste 
export const lojista = {
  nome:",
  cpf:"",
  email:"",
  datanascimento:"",
  cnpj:"",
  razaosocial:"",
  nomefantasia:"",
  fixo:"",
  celular:"",
  endereco:"",
  numero:"",
  complemento:"",
  cep:"",
  bairro:"",
  cidade:"",
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

// Seta o perfil de acesso
export const perfil:string = "C";

// Armazenamento local
export const ls = new LocalStorageService();

// Ambiente
export var ambiente = "desenv";

// Categorias 
export const categorias:Array<number> = [7,13];

// Limpa os dados locais
export const lsClear = () => {
    if (ambiente == "desenv") ls.clear();
}

// Funções genéricas
export const funcoes = new Funcoes();

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
