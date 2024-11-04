import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './../../components/product/product.component'
import {Product} from './../../../shared/models/product.model'
import { HeaderComponent } from "../../../shared/components/header/header.component";
import { CartService } from '../../../shared/services/cart.service';
import { ProductService } from 'src/app/domains/shared/services/product.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ProductComponent, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {


  // cart = signal<Product[]>([]);
  products = signal<Product[]>([]);
  private cartService = inject(CartService);
  private productService = inject(ProductService)


  ngOnInit(){
    this.productService.getProducts()
    .subscribe({
      next: (products) => {
        this.products.set(products);
      },
      error: () => {

      }
    })
  }



  //fromChild(event: string){
    addToCart(product: Product){
      console.log('we stay in the father');
      // this.cart.update(prevState => [...prevState, product])
      this.cartService.addToCart(product);
    }

  }







  // constructor(){
  //   const initProducts: Product[] = [
  //     {
  //       id: Date.now(),
  //       title: 'pro 1',
  //       price: 100,
  //       image: "https://picsum.photos/640/640?r=27",
  //       creationAt: new Date().toISOString()
  //     },
  //     {
  //       id: Date.now(),
  //       title: 'pro 2',
  //       price: 100,
  //       image: "https://picsum.photos/640/640?r=26",
  //       creationAt: new Date().toISOString()
  //     },
  //     {
  //       id: Date.now(),
  //       title: 'pro 3',
  //       price: 100,
  //       image: "https://picsum.photos/640/640?r=25",
  //       creationAt: new Date().toISOString()
  //     },
  //     {
  //       id: Date.now(),
  //       title: 'pro 1',
  //       price: 100,
  //       image: "https://picsum.photos/640/640?r=27",
  //       creationAt: new Date().toISOString()
  //     },
  //     {
  //       id: Date.now(),
  //       title: 'pro 2',
  //       price: 100,
  //       image: "https://picsum.photos/640/640?r=26",
  //       creationAt: new Date().toISOString()
  //     },
  //     {
  //       id: Date.now(),
  //       title: 'pro 3',
  //       price: 100,
  //       image: "https://picsum.photos/640/640?r=25",
  //       creationAt: new Date().toISOString()
  //     }
  //   ];
  //   this.products.set(initProducts);
  // }
