import React, { useRef } from 'react'

export const Hello = () => {
    const renders= useRef(0);
    console.log('Hello renders: ', renders.current++)
    return (
        <div>
            Hello
        </div>
    )
}
