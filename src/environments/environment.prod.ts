import { LocalStorageService } from 'src/app/service/local-storage.service';
import { globalEnvironment } from '../../environments/environments';

export const environment = {
  production: true,
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

// Seta o perfil de acesso
export const perfil:string = "";

// Armazenamento local
export const ls = new LocalStorageService();

// Ambiente
export const ambiente = "producao";

// Categorias 
export const categorias:Array<number> = [];

// Limpa os dados locais
export const lsClear = () => {}