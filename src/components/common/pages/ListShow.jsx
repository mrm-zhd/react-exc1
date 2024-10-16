import React,{useContext} from 'react'
import ItemContext from '../../context/ItemContext.jsx'

export default function ListShow() {
  const {list} = useContext(ItemContext);
  console.log(list);
  return (
    <section>
      {/* {list.map((item,index) => (
        <div className='.block m-8 p-8 border-2' key={index}>{item.firstName}</div>
      ))}; */}
    </section>
  )
}
