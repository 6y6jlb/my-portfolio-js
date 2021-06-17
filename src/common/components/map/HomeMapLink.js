import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

export const googleAPIKey = 'AIzaSyBt9tSqpqhgQ0i9cIQe9pulKUE-lf88lH8'


const HomeMapLink = (props) => {
    const style = {
        width: '100%',
        height: '100%'
    }
    console.log(props)
    return <div>


    </div>
}




const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };

    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key:googleAPIKey }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <AnyReactComponent
                        lat={59.955413}
                        lng={30.337844}
                        text="My Marker"
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default SimpleMap;