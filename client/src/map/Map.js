import React, {useEffect} from "react";
import mapboxgl from "mapbox-gl";
// import reports from '../testData'

// var data = {"type": "FeatureCollection", "features": reports}

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
                "id": "locations",
                "type": "symbol",
                /* Add a GeoJSON source containing place coordinates and information. */
                "source": {
                    "type": "geojson",
                    "data": {}
                },
                "layout": {
                    "icon-image": "Google_Maps_pin",
                    "icon-allow-overlap": true,
                }
            });
        });


    });

    return (
        <div ref={mapContainerRef} className={"mapContainer"}/>
    )
}

export default Map;