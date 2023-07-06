import React, { useEffect, useContext, forwardRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import mapData from "./Data/map.geojson";
import AuthContext from "../../store/auth-context";


const Map = forwardRef((props, ref) => {
  const ctx = useContext(AuthContext);


  
  useEffect(() => {
    const map = L.map("map", {
      minZoom: 10,
    }).setView([38.2987, 26.6803], 11);
    
    const southWest = L.latLng(37.9, 26.3);
    const northEast = L.latLng(38.5 , 26.9);
    const bounds = L.latLngBounds(southWest, northEast);
    
    map.setMaxBounds(bounds);
    map.on("drag", () => {
      map.panInsideBounds(bounds, { animate: false });
    });
    

    

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "Map data &copy; OpenStreetMap contributors",
    }).addTo(map);

    function a() {
      console.log(mapData);
    }

    function onshowNeighborhoodClick() {
      console.log("onshowNeighborhoodClick");
      if (map && ctx.showNeighbourhood) {
        map.setView([38.2987, 26.6803], 11);
      }
    }


    // Add event listener for neighborhood click
    function onNeighborhoodClick(e) {
      ctx.onNotShow();
      const clickedFeature = e.target.feature;
      // console.log('Neighborhood clicked:', clickedFeature.properties);
      ctx.onMap(Object.keys(clickedFeature.properties)[0]);

      // Get the centroid of the clicked feature
      const centroid = L.geoJSON(clickedFeature).getBounds().getCenter();

      // Set the map view to the centroid
      map.setView(centroid, 13);
    }

    // Fetch the GeoJSON file
    fetch(mapData)
      .then((response) => response.json())
      .then(console.log("SA"))
      .then((geojsonData) => {
        if (geojsonData && geojsonData.features) {
          geojsonData.features.forEach((feature, index) => {
            const neighborhoodLayer = L.geoJSON(feature, {
              style: {
                fillColor: getRandomColor(index),
                fillOpacity: 0.5, // Adjust the transparency here
                color: "black",
                weight: 1,
              },
              onEachFeature: (feature, layer) => {
                layer.on("click", onNeighborhoodClick);
              },
            }).addTo(map);
          });
        }
      })
      .catch((error) => {
        console.error("Error fetching GeoJSON data:", error);
      });

      if (ref) {
        ref.current = {
          onshowNeighborhoodClick,
        };
      }

      a();

    return () => {
      // Clean up the map when the component unmounts
      map.remove();
    };
  },  [ctx.showNeighbourhood]);

  return <div id="map" style={{ height: "800px" }}></div>;
});

function getRandomColor(index) {
  const hue = (index * 137.5) % 360; // Generate hue based on index
  const saturation = 80; // Adjust saturation as needed (0-100)
  const lightness = 50; // Adjust lightness as needed (0-100)

  // Convert HSL color to RGB format
  const hslToRgb = (h, s, l) => {
    h /= 360;
    s /= 100;
    l /= 100;
    let r, g, b;
    if (s === 0) {
      r = g = b = l;
    } else {
      const hueToRgb = (p, q, t) => {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1 / 6) return p + (q - p) * 6 * t;
        if (t < 1 / 2) return q;
        if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
        return p;
      };
      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q;
      r = hueToRgb(p, q, h + 1 / 3);
      g = hueToRgb(p, q, h);
      b = hueToRgb(p, q, h - 1 / 3);
    }
    const toHex = (x) => {
      const hex = Math.round(x * 255).toString(16);
      return hex.length === 1 ? "0" + hex : hex;
    };
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  };

  // Return the generated color
  return hslToRgb(hue, saturation, lightness);
}

export default Map;
