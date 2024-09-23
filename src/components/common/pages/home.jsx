import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <Link to="/">Go Home</Link><br/>
      <Link to="/users">Show Users</Link>
    </div>
  )
}
