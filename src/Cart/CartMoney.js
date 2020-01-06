import React, {Component} from 'react';
import './CartMoney.css';

export default class CartMoney extends Component {
  render () {
    const CartMoney = Object.keys(this.props.selected)
        .reduce((acc, curr) => acc + this.props.selected[curr].cost, 0);
    return (
      <div className="CartList__CartMoney">
        <div className="CartList__CartMoney__label">Total: </div>
        <div className="CartList__CartMoney__value">
          { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'}).format(CartMoney) }
        </div>
      </div>
    )
  }
}