import React, { Component } from 'react'
import './app.css'
import List from '../List/List'
class App extends Component {
  state = {
    lists:[],
    total:0,
    goods:[
      {
        id:1,
        url:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=952185356,2784269270&fm=27&gp=0.jpg',
        price:43.00,
        name:'cake',
        count:1,
        clicked:false
      },
      {
        id:2,
        url:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=952185356,2784269270&fm=27&gp=0.jpg',
        price:93.00,
        name:'blackcake',
        count:1,
        clicked:false
      },
      {
        id:3,
        url:'http://f12.baidu.com/it/u=881166037,2952098823&fm=72',
        price:63.00,
        name:'抹茶蛋糕',
        count:1,
        clicked:false
      }
    ]
  }
  addClick = (id) => {
    const {goods,lists} = this.state
    const newGoods = goods.map(t => {
      if(t.id === id){
        return {...t,clicked:true}
      }
      return t
    })
    const newLists = [...lists,goods.find(t => t.id === id)]
    this.setState({
      goods:newGoods,
      lists:newLists
    })
    this.calTotal(newLists)
  }

  calTotal = (lists) => {
    this.setState({
      total:lists.map(t=>t.price*t.count).reduce((sum,total)=>{
        return sum + total
      },0)
    })
  }

  render() {
    const goods = this.state.goods.map(t => (
      <div key={t.id}>
        <img src={t.url} alt=""/>
        <button onClick={() => this.addClick(t.id)}
          disabled={t.clicked && 'disabled'}
          className={`${t.clicked && 'active'}`}>
          {`${t.clicked ? '已购':'购买'}`}
        </button>
      </div>
    ))
    return (
      <div className="app">
        <div className="main">
          <div className="goods-wrap">
            {goods}
          </div>
          <div className="list-wrap">
            <List lists={this.state.lists}
              calTotal={this.calTotal}
              total={this.state.total}/>
          </div>
        </div>
      </div>
    )
  }
}

export default App
