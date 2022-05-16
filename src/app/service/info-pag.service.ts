import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPag } from '../interfaces/info-pag.inerface';

@Injectable({
  providedIn: 'root'
})
export class InfoPagService {

  info:InfoPag={};
  loadJSON=false;

  constructor(private http: HttpClient) { 
    console.log("info desde el service");

    // READ  JSON File
    this.http.get('assets/data/data-pag.json')
                  .subscribe((resp:InfoPag) =>{
                    this.loadJSON=true;
                    this.info=resp;
                    console.log(resp);
                 
                  });
  }
}
