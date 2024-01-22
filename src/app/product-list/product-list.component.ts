import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  standalone: true,
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  //name: string = "John Doe";
  addToCart: number = 0;
  product = {
    name: 'iPhone',
    price: 999,
    color: 'Matte Black',
    discount: 8,
    inStock: 5,
    pImage: "../../assets/iphone-png.png"
  }

  getDiscountedPrice() {
    return this.product.price - (this.product.price * this.product.discount) / 100
  }

  onNameChange(event: any) {
    //this.name = event.target.value;
    //console.log(event.target.value);
  }

  incrementCartValue() {
    if (this.addToCart < this.product.inStock) {
      this.addToCart++;
    }
  }

  decrementCartValue() {
    if (this.addToCart > 0) {
      this.addToCart--;
    }
  }

}
