import React from 'react';

const Stations = (props) => {
    return (
      <div>
        { props.stations.map((station, index) => {
            return (<h3 key={index}>{station.name}</h3>)
        }) }
      </div>
    );
}

export default Stations;