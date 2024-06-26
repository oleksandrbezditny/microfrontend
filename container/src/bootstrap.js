import { mount } from 'products/ProductsIndex';
import { mount as mountCart } from 'cart/CartShow';

mount(document.querySelector('#dev-products-container'));
mountCart(document.querySelector('#dev-cart-container'));
console.log('container');

