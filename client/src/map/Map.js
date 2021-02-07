import React, {useEffect} from "react";
import mapboxgl from "mapbox-gl";
import reports from '../testData'

var data = {"type": "FeatureCollection", "features": reports}

function Map(props) {
    const mapContainerRef = props.container;
    const center = props.center;
    const zoom = props.zoom;
    const bounds = props.bounds;

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainerRef.current,
            // style: 'mapbox://styles/mapbox/light-v10',
            //The style below has the custom markers
            style: 'mapbox://styles/faraazb/ckk2r5t5n3psi17qwkxsybbqw',
            center: [center.longitude, center.latitude],
            zoom: zoom,
            maxBounds: bounds
        })

        map.on('load', function (e) {
            map.addLayer({
                "id": "reports",
                "type": "symbol",
                /* Add a GeoJSON source containing place coordinates and information. */
                "source": {
                    "type": "geojson",
                    "data": data
                },
                "layout": {
                    "icon-image": "Google_Maps_pin",
                    "icon-allow-overlap": true,
                }
            });
        });

        map.on('click', function(e) {
            var features = map.queryRenderedFeatures(e.point, {
                layers: ['reports'] // replace this with the name of the layer
            });

            if (!features.length) {
                return;
            }

            var feature = features[0];

            var popup = new mapboxgl.Popup({ className: "popup-earthquake", offset: [0, -15] })
                .setLngLat(feature.geometry.coordinates)
                .setHTML(`<table>
                                <tr>
                                    <td>Time</td>
                                    <td>:</td>
                                    <td>${feature.properties.time}</td>
                                </tr>
                                <tr>
                                    <td>Type</td>
                                    <td>:</td>
                                    <td>${feature.properties.type}</td>
                                </tr>
                                <tr>
                                    <td>Description</td>
                                    <td>:</td>
                                    <td>${feature.properties.description}</td>
                                </tr>
                            </table>
                            <button type="button" >More Info</button>`)
                .addTo(map);
        });


    });

    return (
        <div ref={mapContainerRef} className={"mapContainer"}/>
    )
}

export default Map;