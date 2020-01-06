import React, {Component} from 'react'
import Feature from '../Feature/Feature'
import './FeatureList.css';

export default class FeatureList extends Component {
  render() {
    const {selected} = this.props;
    const feature = Object.keys(this.props.feature)
      .map(key => {
          return (
              <Feature 
                name={key} 
                key={key} 
                options={this.props.feature[key]} 
                selected={selected}
                onSelect={this.props.onSelect}
              />
          )
      })

    return (
      <section className="main__form">
        {feature}
      </section>
    )
  }
}
