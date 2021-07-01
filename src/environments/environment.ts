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
    apiKey: "AIzaSyDcSQDPkFqpQBd8UbX-Wtw23tNTg-0dmn4",
    authDomain: "qeru-6981b.firebaseapp.com",
    databaseURL: "https://qeru-6981b-default-rtdb.firebaseio.com",
    projectId: "qeru-6981b",
    storageBucket: "qeru-6981b.appspot.com",
    messagingSenderId: "924685319501",
    appId: "1:924685319501:web:3ac10436cb87c9b4610b04",
    measurementId: "G-NL8C6QZEX1"
  },
  miles:{
    host:"https://teia.tec.br/miles/sistema/"
  }
};

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
  categorias:"[]",
  estado:""
}

// Cliente Teste
export const cliente = {
  nome:"Edilson Bitencourt",
  cpf:"044.725.179-14",
  datanascimento:"27/11/1983",
  fixo:"(48) 3443-4141",
  celular:"(48) 9.9659-9350",
  endereco:"Rua Walter da Silva Medeiros, 85",
  numero:"85",
  complemento:"",  
  cep:"88804-770",
  bairro:"Jardim Angélica",
  cidade:"Criciúma",
  estado:"SC",
  email:"edilsonbitencourt@hotmail.com",
  senha:"12345678"
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
