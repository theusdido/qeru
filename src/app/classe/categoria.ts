import { Injectable } from "@angular/core";
import { IconProp } from '@fortawesome/fontawesome-svg-core';

@Injectable({providedIn:'root'})
export class Categoria {
    public id:number    = 0;
    public sel:boolean  = false;
    public icon!:IconProp;
    public texto:string = '';
}
