import React,{useState,useContext} from 'react'
import { useForm } from 'react-hook-form'
import ItemContext from '../../context/ItemContext.jsx'

export default function InsForm() {
  const {register, handleSubmit} = useForm();
  const {list,setList} = useContext(ItemContext);

  const handleSub = (data) => { 
    setList([...list,data]);
   };
  return (
    <div className='.block m-8 p-8 border-2'>
        <form onSubmit={handleSubmit(handleSub)}>
          <label htmlFor='fname'>FirstName</label>
          <input 
            {...register('firstName')}
            type='text' 
            className='border border-gray-900 rounded-lg m-4' 
            id='fname' />
          <label htmlFor='lname'>LastName</label>
          <input 
            {...register('lastName')}
            type='text' 
            className='border border-gray-900 rounded-lg m-4' 
            id='lname' />
          <label htmlFor='email'>Email</label>
          <input 
            {...register('email')}
            type='text' 
            className='border border-gray-900 rounded-lg m-4' 
            id='email' />
          <select name="price">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <button type='submit'>Submit</button>
        </form>
    </div>
  )
}
