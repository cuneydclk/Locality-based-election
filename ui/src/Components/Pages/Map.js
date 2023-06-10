
import React, { useEffect } from 'react';
import L from 'leaflet';

import 'leaflet/dist/leaflet.css';




function Map() {
  useEffect(() => {
    // Create the map
    const map = L.map('map').setView([38.3287, 26.7903], 13);

    // Add the tile layer to the map
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; OpenStreetMap contributors',
    }).addTo(map);

    // Add event listener for neighborhood click
    function onNeighborhoodClick(e) {
      // Display information about the clicked neighborhood
      console.log('Neighborhood clicked:', e.target.feature.properties.name);
    }

    // Add your neighborhood data and style
    const neighborhoodsData = [
      {
        type: 'Feature',
        properties: {
          name: 'Neighborhood 1',
        },
        geometry: {
          type: 'Polygon',
          coordinates: [[
            [26.77, 38.33],
            [26.78, 38.34],
            [26.79, 38.32],
            [26.77, 38.33],
          ]],
        },
      },
      // Add more neighborhoods here...
    ];

    const neighborhoodsLayer = L.geoJSON(neighborhoodsData, {
      onEachFeature: (feature, layer) => {
        layer.on('click', onNeighborhoodClick);
      },
    }).addTo(map);

    // Clean up the map when the component is unmounted
    return () => map.remove();
  }, []);

  return <div id="map" style={{ height: '500px' }}></div>;
}

export default Map;