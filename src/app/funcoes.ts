export class Funcoes {

   // Funções para substituir todos os caracteres de uma string
    replaceAll(str:string, de:string, para:string) : string {
        var retorno = str;
        for (let i=0;i<de.length;i++){
            retorno = retirar(retorno,de.substr(i,1),para);		
        }
        return retorno;
        function retirar(str:string, de:string, para:string){
            if (str != '' && str != null && str != undefined){
                var pos = str.indexOf(de);
                while (pos > -1){
                    str = str.replace(de, para);
                    pos = str.indexOf(de);
                }
            }else{
                str = '';
            }
            return (str);
        }
    }

    // Formatar data de yyyy-mm-dd para dd/mm/yyyy
    formatarDataDisplay(str_data:string){
        if (str_data != '' && str_data != undefined){
            var dt = str_data.split("-");
            return dt[2] + "/" + dt[1] + "/" + dt[0];
        }else{
            return '';
        }
    }
}