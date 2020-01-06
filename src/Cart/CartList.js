import React, {Component} from 'react';
import './CartList.css';

export default class CartList extends Component {
  render () {
    return (
      Object.keys(this.props.selected).map(key => {
        return(
          <div className="CartList__option" key={key}>
            <div className="CartList__option__label">{key}</div>
            <div className="CartList__option__value">{this.props.selected[key].name}</div>
            <div className="CartList__option__cost">
              { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'}).format(this.props.selected[key].cost) }
            </div>
          </div>
        ) 
      })
    )
  }
}