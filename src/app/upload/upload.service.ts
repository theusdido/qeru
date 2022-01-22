import { Injectable } from '@angular/core';
import { RequisicaoService } from '../service/requisicao.service';
import { HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(
    public rs:RequisicaoService
  ) { }

  upload(selectedFile:File,append?:HttpParams){
    const fd = new FormData();
    fd.append('image',selectedFile,selectedFile.name);

    // Adiciona os parametros na requisição
    append?.getAll('param')?.forEach( (p)=> {
      let obj   = JSON.parse(p);
      let key   = Object.keys(obj);
      let value = Object.values(obj);
      fd.append(key[0],String(value[0]));
    });

    return this.rs.uploaded(fd);
  }
}