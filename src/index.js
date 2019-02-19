import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';


 class App extends React.Component {    
     state = {lat: null, errorMsg: null}

     componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat : position.coords.latitude}),
            err => this.setState({errorMsg: err.message})
        )
     }

     render() {
        if ((this.state.errorMsg)  && (!this.state.lat)) {
            console.log('1');
            return (
                <div>
                    Error: {this.state.errorMsg}
                </div>         
            )
        }
        
        if ((this.state.lat) && (!this.state.errorMsg)){
            console.log('2');
            return(<SeasonDisplay lat = {this.state.lat} />)
        } 
        
        return(
             <div>Loading...</div>
        )


    }
 }

 ReactDOM.render(
     <App />,
     document.querySelector('#root')
 );
