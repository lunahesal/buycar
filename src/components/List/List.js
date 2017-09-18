import React, { Component } from 'react'
import './list.css'

class List extends Component {

  addClick = (t,n) => {
    const { list,total ,subTotal}=this.props
    let newList = list.map( re => {
      if(re.id === t.id){
        re.count++
        subTotal(t.price,n)
      }
      return t
    })
    this.setState({
      list:newList
    })
  }

  minusClick = (t,n) => {
    const { list,subTotal }=this.props
    let newList = list.map( re => {
      if(re.id === t.id){
        re.count--
        if(re.count === 0){
          re.count=1
        }
      }

      subTotal(t.price,n)

      return t
    })
    this.setState({
      list:newList
    })
  }
  render() {
    const { list,total }=this.props
    const listEach = list.map(t => (
      <div key={t.id} className='list-each'>
        <div className='imgbox'>
          <img src={t.url} alt=""/>
        </div>
        <div>
          <span>{t.name}</span>
          <span>$ {t.price}</span>
        </div>
        <div className='qty'>
          <span onClick={()=>this.minusClick(t,'-')} className='minus'>-</span>
          <span>{t.count}</span>
          <span onClick={()=>this.addClick(t,'+')} className='add'>+</span>
        </div>
      </div>
    ))

    return (
      <div className="list">
        <div className="total">
          {total}
        </div>
        <div className="lists">
          {listEach}
        </div>
      </div>
    )
  }
}

export default List
