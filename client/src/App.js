import React, {useState, useEffect, useRef} from 'react';
import mapboxgl from 'mapbox-gl';
import binoculars from './assets/binoculars64.png'
import telegram from './assets/telegram.png'
import './App.css';
import Map from './map/Map'
// import ReportModal from "./components/ReportModal";
import ReportModal from "./reportForm";

//Replace with your token
mapboxgl.accessToken = 'pk.eyJ1IjoiZmFyYWF6YiIsImEiOiJja2dldXNvaDIwbDR0MnlsN2s5MHJpa2xwIn0.gLOT6MvCNlMCCeDZbzW5jw';


function App() {
    const [center, setCenter] = useState({longitude: 72.854, latitude: 19.025});
    const [zoom, setZoom] = useState(12.5);
    const bounds = [[68.14712, 7.798000], [97.34466, 37.090000]];
    const [modalISOpen, setModalIsOpen] = useState(false)
    // const [data, setData] = useState(null);
    const mapContainerRef = useRef(null);

    // const map = new mapboxgl.Map({
    //     container: mapContainerRef.current,
    //     // style: 'mapbox://styles/mapbox/light-v10',
    //     //The style below has the custom markers
    //     style: 'mapbox://styles/faraazb/ckk2r5t5n3psi17qwkxsybbqw',
    //     center: [center.longitude, center.latitude],
    //     zoom: zoom,
    //     maxBounds: bounds
    // })

    return (
        <div className={"main"}>
            <Map center={center} zoom={zoom} bounds={bounds} container={mapContainerRef}/>
            <div className={"floating-buttons"} >
                <img className={"report-button"} src={binoculars} alt={"Report an Incident"}
                     onClick = {() => setModalIsOpen(true)} />
                <br/>
                <img className={"telegram-button"} src={telegram} alt={"Report through Telegram"}
                     onClick = {() => window.open("http://t.me/apscript_bot")} />
            </div>
            <ReportModal isOpen={modalISOpen} setModalIsOpen={setModalIsOpen}
                         onRequestClose={()=> setModalIsOpen(false)} />
        </div>
    );
}

export default App;