// Write your code here
import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {mangoesCount: 0, bananasCount: 0}

  onClickEatBanana = () => {
    this.setState(prevState => ({bananasCount: prevState.bananasCount + 1}))
  }

  onClickEatMango = () => {
    this.setState(prevState => ({mangoesCount: prevState.mangoesCount + 1}))
  }

  render() {
    const {mangoesCount, bananasCount} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">
            Bob ate <span className="eatCount">{mangoesCount}</span> mangoes
            <span className="eatCount">{bananasCount}</span> bananas
          </h1>
          <div className="images-container">
            <div className="mango-box">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png "
                className="image"
                alt="mango"
              />
              <button
                className="button"
                type="button"
                onClick={this.onClickEatMango}
              >
                Eat Mango
              </button>
            </div>
            <div className="mango-box">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                className="image"
                alt="banana"
              />
              <button
                type="button"
                className="button"
                onClick={this.onClickEatBanana}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
