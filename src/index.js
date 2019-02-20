import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';


 class App extends React.Component {    
     state = {lat: null, errorMsg: null}

     componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat : position.coords.latitude}),
            err => this.setState({errorMsg: err.message})
        )
     }

     renderContent() {
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
        
        return(<Spinner message='Please accept location request'/>)
     }

     render() {
         return (
            <div className="border red">
                {this.renderContent()}
            </div>
         )
    }
 }

 ReactDOM.render(
     <App />,
     document.querySelector('#root')
 );
