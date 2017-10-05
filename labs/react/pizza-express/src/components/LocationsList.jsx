import React, { Component } from 'react'
import Location from './Location.jsx'
import locationData from '../locationData.js'


class LocationsList extends Component {
    render() {
        const locations = locationData.map((location, index) => {
            return <Location
            key={index}
            name={location.name} 
            address={location.address} 
            phone={location.phone}/>
        })

        return (
            <div id="locations">
                <h1>Locations:</h1>
                <div className="locations">
                    {locations}
                </div>
            </div>
        )
    }
}
export default LocationsList