import React, { Component } from 'react'
import './app.css'
import List from '../List/List'
class App extends Component {
  state = {
    list:[],
    total:'',
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
  addClick = (t) => {
    const {goods} = this.state
    let newGoods = goods.map(re => {
      if(re.id === t.id){
        return {...re,clicked:true}
      }
      return re
    })
    this.setState({
      goods:newGoods,
      list:[...this.state.list,this.state.goods.find(re => re.id === t.id)]
    })
    this.subTotal(t.price)
  }

  subTotal = (n,text,count) => {
    if(text == '-'){
      this.setState({
        total:Number(this.state.total) - Number(n)
      })
    }else {
      this.setState({
        total:Number(this.state.total) + Number(n)
      })
    }
  }

  render() {
    const goods = this.state.goods.map(t => (
      <div key={t.id}>
        <img src={t.url} alt=""/>
        <button onClick={() => this.addClick(t)}
          disabled={t.clicked && 'disabled'}
          className={`${t.clicked && 'active'}`}>购买</button>
      </div>
    ))
    return (
      <div className="app">
        <div className="main">
          <div className="goods-wrap">
            {goods}
          </div>
          <div className="list-wrap">
            <List list={this.state.list}
              subTotal={this.subTotal}
              total={this.state.total}/>
          </div>
        </div>
      </div>
    )
  }
}

export default App
