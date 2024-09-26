import React from 'react'
import { useParams } from 'react-router-dom'

export default function UserInfo() {
    const data = useParams();
  return (
    <div>UserInfo {data.id}</div>
  )
}
