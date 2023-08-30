import React from 'react'

export default function Login() {
  return (
    <div className="container">
        <form action="/login" method='POST'>
            <label> Enter username: </label>
            <input type="text" id="username"/>

            <label> Enter password: </label>
            <input type="password" id="password"/> 
        </form>
    </div>
  )
}
