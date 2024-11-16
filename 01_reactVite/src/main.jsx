import ReactDom from 'react-dom/client'
import React from 'react'
import App from './App.jsx'


function Myapp() {
    return(
        <h1>hello there</h1>
    )
}

// const Reactelement = {
//     type : 'a',
//     children : "click here",
//     props : {
//                 href : 'https://google.com',
//                 target : '_blank'
//             }
// }     // iss tareeke se hum object send krk render nhi kra sakte hai, coz createRoot object ko apne defined tareeke se parse krta hai



const anotherElement = (<a href='https://google.com/' target='blank'>click here !!</a>)

const username = '   aazad tiwari 2'
const reactElement = React.createElement(
    'a',
    {href:'https://google.com/', target: '_blank'},
    'click to visit',
    username
)

ReactDom.createRoot(document.getElementById('root')).render(
    // <App/>
    // <Myapp/>
    // Myapp()
    // <Reactelement/>   // error
    // anotherElement
    reactElement

)
