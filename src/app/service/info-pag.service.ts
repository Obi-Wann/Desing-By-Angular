import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPag } from '../interfaces/info-pag.inerface';

@Injectable({
  providedIn: 'root'
})
export class InfoPagService {

  info:InfoPag={};
  loadJSON=false;

  team:any[]=[]

  constructor(private http: HttpClient) {

    this.loadInfo();
    this.loadTeam();
   }


   // READ  JSON File
  private loadInfo(){
    this.http.get('assets/data/data-pag.json')
                  .subscribe((resp:InfoPag) =>{
                    this.loadJSON=true;
                    this.info=resp;
                    // console.log(resp);                
                  });
  }

  //CALL FIREBASE TEAM
  private loadTeam(){
    this.http.get('https://desing-portfolio-default-rtdb.europe-west1.firebasedatabase.app/team.json')
                  .subscribe((resp:any) =>{
      this.team= resp;
      // console.log(resp);
    });
  }
}
