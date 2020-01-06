import React, {Component} from 'react'
//import Cart from '../Cart/Cart'
import CartList from '../Cart/CartList';
import CartMoney from '../Cart/CartMoney';
import './Cart.css';

export default class Cart extends Component {
    render() {
      return (
        <section className="main__CartList">
            <h3>Your Cart</h3>
            < CartList selected={this.props.selected} />
            < CartMoney selected={this.props.selected} />
        </section>
      )
    }
}