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
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
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

// Armazenamento local
export const ls = new LocalStorageService();

// Ambiente
export var ambiente = "producao";

// Categorias 
export const categorias:Array<number> = [];

// Limpa os dados locais
export const lsClear = () => {
  if (ambiente == "desenv") ls.clear();
}

// Funções genéricas
export const funcoes = new Funcoes();
