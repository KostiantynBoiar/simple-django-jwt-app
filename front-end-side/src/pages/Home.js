import React from 'react'
import { useState, useEffect, useContext } from 'react';
import AuthContext from '../context/AuthContext';


const Home = () => {
    
    let [items, setItems] = useState([])

    let {authTokens} = useContext(AuthContext)
    useEffect(() => {
       getItems()
    }, [])

    let getItems = async () => {
       let response = await fetch('http://localhost:8000/api/items/',
    {
        method: 'GET',
        headers:{
            'Content-type': 'application/json',
            'Authorization': 'Bearer ' + String(authTokens.access)
        }
    })

    let data = await response.json()
    setItems(data)
    }

  return (
    <div>
        <p>
            You are logged in
        </p>
        <ul>
            {
                items.map(item => (
                    <li key={item.id}>
                        {item.label}
                    </li>
                ))
            }
            <ul>
            {
                items.map(item => (
                    <li key={item.id}>
                        {item.body}
                    </li>
                ))
            }
            </ul>
        </ul>
    </div>
  )
}

export default Home;