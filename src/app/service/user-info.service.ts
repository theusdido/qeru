import { EventEmitter, Injectable, Output } from '@angular/core';
import { environment, ls } from 'src/environments/environment';
import { RequisicaoService } from './requisicao.service';
import { Observable  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {
  public src_image!:Observable<string>;
  public src:string = 'assets/img/usuario.png';

  @Output() change_upload = new EventEmitter();
 
  constructor(
    public rs:RequisicaoService
  ) {

  }

  setBrandImagem(){
    this.rs.get('userinfo',{
      perfil:ls.get('perfil'),
      loja:ls.get('loja'),
      cliente:ls.get('userid')
    }).subscribe(
      (retorno => {
        if (retorno == ''){
          this.setBrandImagemLocalStorage('assets/img/usuario.png');  
        }else{
          this.setBrandImagemLocalStorage(environment.miles.arquivos + retorno + "?" + new Date().getMilliseconds());
        }
      })
    );
  }
  
  setBrandImagemLocalStorage(src:string){
    ls.set('brand-user-src',src);
  }
}
