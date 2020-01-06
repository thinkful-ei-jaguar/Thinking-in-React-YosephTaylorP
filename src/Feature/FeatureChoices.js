import React, {Component} from 'react';
import './FeatureChoices.css';

export default class FeatureChoices extends Component {
  render() {
    return (
      <li className="feature__item">
        <div 
          className={this.props.featureClass}
          onClick={e => this.props.onSelect(this.props.featureName, this.props.item)}>
            { this.props.item.name }
            ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'}).format(this.props.item.cost) })
        </div>
      </li>
    )
  }
}