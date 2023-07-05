import './App.css';
import React from 'react';
import Customer from './components/Customer';

const customer = [
  {
    'id': 1,
    'name': '홍길동',
    'birthday': '961222',
    'gender': '남자',
    'job': '대학생'
  },
  {
    'id': 2,
    'name': '동글동',
    'birthday': '991222',
    'gender': '여자',
    'job': '대학생'
  }
]

function App() {
  return (
    <div>
      {
        customer.map(c=> {
          return (
            <Customer
            key={c.id}
            id={c.id}
            name={c.name}
            birthday={c.birthday}
            gender={c.gender}
            job={c.job}
            />
          )
        })
      }
    </div>
  )
}

export default App; 


