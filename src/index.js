import react from 'react';
import reactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import "semantic-ui-css/semantic.min.css";
import Loader from './loader';

// class based component
class App extends react.Component {
    // initialize state
    state = {lat : null, errorMessage: ''};  

    // best practice for data loading
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position => {
                console.log(position);
                // update state using only setState
                this.setState({ lat : position.coords.latitude})
            },
            err => {
                console.log(err);
                // handling error
                this.setState({ errorMessage : err.message})
            }
        );
    }
    renderContent(){
        // conditional rendering
        if(this.state.lat && !this.state.errorMessage){
            return <SeasonDisplay latitude={this.state.lat} />;

        } else if(!this.state.lat && this.state.errorMessage){
            return <div> Error: {this.state.errorMessage} </div>;

        }
        return <Loader message="Please allow Location request" />; 
    }
    render(){
        return (
            <div>
                {this.renderContent()}
            </div>
        );
    }
}

reactDOM.render( <App />, document.getElementById('root'));