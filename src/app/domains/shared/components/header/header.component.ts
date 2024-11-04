import { Component, inject, Input, signal, SimpleChange, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductComponent } from 'src/app/domains/products/components/product/product.component';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  // @Input({required:true}) cart: Product[] = []; now by store
  // total = signal(0);
  hideSideMenu = signal(true);
  private cartService = inject(CartService)
  cart = this.cartService.cart;
  total = this.cartService.total;

  toogleSideMenu() {
    this.hideSideMenu.update(prevState => !prevState);
  }

  // ngOnChanges(changes: SimpleChanges){
  //   const cart  = changes['cart'];
  //   if (cart) {
  //     this.total.set(this.calcTotal())
  //   }
  // }

  // calcTotal(){
  //   return this.cart.reduce((total,product) => total + product.price,0 )
  // }

}
