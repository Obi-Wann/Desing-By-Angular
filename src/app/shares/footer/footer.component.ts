import { Component, OnInit } from '@angular/core';
import { InfoPagService } from 'src/app/service/info-pag.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  anyo:number=new Date().getFullYear();

  constructor(public infoPagService:InfoPagService) { }

  ngOnInit(): void {
  }

}
