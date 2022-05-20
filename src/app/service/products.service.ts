import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { timeout } from 'rxjs';
import { ProductsInterface } from '../interfaces/products.interface';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  loadingProducts=true;
  products:ProductsInterface[]=[];

  constructor(private http :HttpClient) {

    this.loadProducts();

   }

  private loadProducts(){
             this.http.get('https://desing-portfolio-default-rtdb.europe-west1.firebasedatabase.app/products_idx.json')
                           .subscribe((resp: any)=>{
                              console.log(resp);
                              this.products=resp;
                              setTimeout(() => {
                                this.loadingProducts=false;
                              },1000 );
                           });
  }
}
