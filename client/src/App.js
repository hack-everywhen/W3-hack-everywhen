import React, {useState, useEffect, useRef} from 'react';
import mapboxgl from 'mapbox-gl';
import './App.css';
import Map from './map/Map'
import ReportModal from "./components/ReportModal";


//Replace with your token
mapboxgl.accessToken = 'pk.eyJ1IjoiZmFyYWF6YiIsImEiOiJja2dldXNvaDIwbDR0MnlsN2s5MHJpa2xwIn0.gLOT6MvCNlMCCeDZbzW5jw';


function App() {
    const [center, setCenter] = useState({longitude: 72.854, latitude: 19.025});
    const [zoom, setZoom] = useState(12.5);
    const bounds = [[68.14712, 7.798000], [97.34466, 37.090000]];
    const [modalISOpen, setModalIsOpen] = useState(false)
    // const [data, setData] = useState(null);
    const mapContainerRef = useRef(null);

    return (
        <div className={"main"}>
            <div className={"report-button"} >
                <button onClick = {() => setModalIsOpen(true)} >Report</button>
            </div>
            <ReportModal isOpen={modalISOpen} setModalIsOpen={setModalIsOpen} onRequestClose={()=> setModalIsOpen(false)} />
            <Map center={center} zoom={zoom} bounds={bounds} container={mapContainerRef}/>
        </div>
    );
}

export default App;