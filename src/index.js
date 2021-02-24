import React from 'react';
import ReactDom from 'react-dom'
import Navigation from './Navigation.js';
import HomeContent from './HomeContent.js';
import './index.css';
class App extends React.Component{
    render()
    {
        return(<div>
            <Navigation/>
            <HomeContent/>
        </div>);
    }
}
ReactDom.render(<App/>,document.querySelector("#root"));