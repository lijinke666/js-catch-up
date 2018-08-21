import React, { Component } from 'react'
import Slider from './components/Slider'

export default class sliderPage extends Component {
  render() {
    return (
      <Slider>
        {
          (onDestroy)=>{
            return (
              <div className="slider" onClick={onDestroy}>点我销毁</div>
            )
          }
        }
      </Slider>
    )
  }
}
