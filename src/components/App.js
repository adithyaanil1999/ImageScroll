import React from 'react';
import ImageScroll from './ImageScroll';
import ImageScrollHeader from './Header';
// function getCook(cookiename) {
//     var cookiestring = RegExp("" + cookiename + "[^;]+").exec(document.cookie);
//     return decodeURIComponent(!!cookiestring ? cookiestring.toString().replace(/^[^=]+./, "") : "");
// }
class App extends React.Component{
    componentDidMount(){
        console.log('APP started!')
    }
    render(){
        return (
            <div id="main-cont" className="main-containter">
                <ImageScrollHeader/>
                <ImageScroll/>
            </div>
        )
    }
}

export default App;
