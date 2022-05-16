import { Component } from '@angular/core';
import { InfoPagService } from './service/info-pag.service';
import { ProductsService } from './service/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public infoPagService:InfoPagService,
                      public productsService:ProductsService){

  }
}
