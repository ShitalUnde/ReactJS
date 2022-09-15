import React, {useState} from 'react'
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'


function ExpenseItem(props) {
//let title = props.title

const [title, setTitle]= useState(props.title);

    const ClickHandler = (event) => {
        setTitle('updated')
        // console.log(event)
        console.log(title)
    }

    return (
     <Card className='expense-item'>  
        <ExpenseDate date = {props.date}></ExpenseDate>
        <div className='expense-item__description'>
            <h2>{title}</h2>
            <div className='expense-item__price'>${props.amount}</div>
        </div>
       {/* <button onClick={()=> {console.log('ggggg')}}>Change Title</button> */}
       <button onClick={ClickHandler}>Change Title</button> 
    </Card>)
}

export default ExpenseItem