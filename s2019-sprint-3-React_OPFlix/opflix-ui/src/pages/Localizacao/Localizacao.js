import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import Axios from "axios";

export class MapContainer extends Component {
    constructor() {
        super();
        this.state = {
            listalocalizacoes: [],
        }
    }

    componentDidMount() {
        this.listarLocalizacoes();
    }

    listarLocalizacoes = () => {
        Axios.get('http://192.168.3.47:5000/api/Localizacoes', {
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => {
                this.setState({ listalocalizacoes: response.data })
            })
            .catch(erro => console.log(erro))
    }

    render() {
        return (
            <Map google={this.props.google} zoom={14} initialCenter={{
                lat: ,
                lng: ,
            }}>
                {this.state.listalocalizacoes.map(x => {
                    return (
                        <Marker
                            title={x.nomeLancamento}
                            name={x.nomeLancamento}
                            position={{ lat: x.latitude, lng: x.longitude }} />
                    );
                })}
                <InfoWindow onClose={this.onInfoWindowClose}></InfoWindow>
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    // apiKey: (YOUR_GOOGLE_API_KEY_GOES_HERE)
})(MapContainer)