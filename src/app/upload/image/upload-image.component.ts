import { AfterViewInit, Component, ElementRef, Input, OnInit, Output, ViewChild,EventEmitter } from '@angular/core';
import { UploadService } from '../upload.service';
import { environment } from '../../../environments/environment';
import { HttpParams } from '@angular/common/http';



declare var $:any;

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.scss']
})
export class UploadImageComponent implements OnInit,AfterViewInit{
  @Input() displayButton = '+ Adicionar';
  @ViewChild('inputFile') anexo!:ElementRef;
  @Input() srcImage!:string;
  @Input() params!:HttpParams;
  @Input('id') idImage:string = '';
  @Output() uploaded = new EventEmitter();
  @Output() no_image = new EventEmitter<any>();
  @Output() set_image = new EventEmitter<any>();
  public sem_imagem_src = 'assets/img/semimagem.jpg';
  constructor(
    public us:UploadService
  ) {}

  ngOnInit(): void {

  }
  ngAfterViewInit(): void {

  }
  onFileSelected(event:any){  

    // Arquivo Uploaded
    let selectedFile               = <File>event.target.files[0];
    this.uploaded.emit(selectedFile.name);

    // Upload de Arquivo
    this.us.upload(selectedFile,this.params).subscribe(
      (response:any) => {
        this.srcImage = environment.miles.arquivos + response.filename;
      }
    );

  }

  noImagem(){
    this.no_image.emit();
    this.srcImage = this.sem_imagem_src;
  }

  setImagem(src:string){    
    this.set_image.emit();
    this.srcImage = src;
  }
}