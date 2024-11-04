import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './../../components/product/product.component'
import {Product} from './../../../shared/models/product.model'

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ProductComponent],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {


  products = signal<Product[]>([]);

  constructor(){
    const initProducts: Product[] = [
      {
        id: Date.now(),
        title: 'pro 1',
        price: 100,
        image: "https://picsum.photos/640/640?r=27",
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'pro 2',
        price: 100,
        image: "https://picsum.photos/640/640?r=26",
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'pro 3',
        price: 100,
        image: "https://picsum.photos/640/640?r=25",
        creationAt: new Date().toISOString()
      }
    ];
    this.products.set(initProducts);
  }

  fromChild(event: string){
    console.log('we stay in the father');
    console.log(event);
  }

}
