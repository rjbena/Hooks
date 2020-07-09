import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../UserContext'

export const About = () => {
    const {user,setUser} =useContext(UserContext)
    return (
        <div>
            About
            <pre>{JSON.stringify(user,null,2)}</pre>
        </div>
    )
}
