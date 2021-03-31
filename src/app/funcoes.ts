export class Funcoes {

   // Funções para substituir todos os caracteres de uma string
    replaceAll(str:string, de:string, para:string) : string {
        var retorno = str;
        for (let i=0;i<de.length;i++){
            retorno = retirar(retorno,de.substr(i,1),para);		
        }
        return retorno;
        function retirar(str:string, de:string, para:string){
            var pos = str.indexOf(de);
            while (pos > -1){
                str = str.replace(de, para);
                pos = str.indexOf(de);
            }
            return (str);
        }
    }
}
