import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return (
        <div>
            <h1>Custom App !</h1>
        </div>
    )
}

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }

const anotherUser = "Chai aur react";
const anotherElement =(
    <a href="http://google.com" target='_blank'>Visit Google</a>
)

const reactElement = React.createElement(
    'a',
    {href: 'https://google.com', target: '_blank'},
    'Click me to Visit google',
    anotherUser
)

createRoot(document.getElementById('root')).render(
  
    reactElement
  
)
