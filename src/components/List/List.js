import React, { Component } from 'react'
import './list.css'

class List extends Component {

  addClick = (id) => {
    const { lists,calTotal}=this.props
    const newLists = lists.map( t => {
      if(t.id === id){
        t.count++
      }
      return t
    })
    calTotal(newLists)
    this.setState({
      lists:newLists
    })
  }

  minusClick = (id) => {
    const { lists,calTotal }=this.props
    let newLists = lists.map( t => {
      if(t.id === id && t.count !== 0){
        t.count--
      }
      return t
    })
    calTotal(newLists)
    this.setState({
      lists:newLists
    })
  }
  render() {
    const { lists,total }=this.props
      console.log(total)
    const listEach = lists.map(t => (
      <div key={t.id} className='list-each'>
        <div className='imgbox'>
          <img src={t.url} alt=""/>
        </div>
        <div>
          <span>{t.name}</span>
          <span>$ {t.price}</span>
        </div>
        <div className='qty'>
          <span onClick={()=>this.minusClick(t.id)} className='minus'>-</span>
          <span>{t.count}</span>
          <span onClick={()=>this.addClick(t.id)} className='add'>+</span>
        </div>
      </div>
    ))

    return (
      <div className="list">
        <div className="total">
          { total === 0 ? '请添加商品到购物车' : total }
        </div>
        <div className="lists">
          {listEach}
        </div>
      </div>
    )
  }
}

export default List
