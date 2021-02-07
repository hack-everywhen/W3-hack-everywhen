import '../App.css';
import Modal from 'react-modal'
import React, {useState} from 'react'
import { submitReport } from "./submitReport";

Modal.setAppElement('#root')

function ReportModal(props) {
    const modalISOpen = props.isOpen;
    const setModalIsOpen = props.setModalIsOpen;
    const [formData, setFormData] =
        useState({location: null, type: "Robbery", description: "Describe the event"})


    const [selectedImages, setSelectedImage] = useState([])

    const handleSubmit = (e) => {
        // alert(JSON.stringify(formData))
        e.stopPropagation();
        console.log(formData);
        // submitReport(formData).then(r => setModalIsOpen(false));
    }

    const imageHandleChange = (e) =>{
        // console.log(e.target.files)
        if (e.target.files){
            const fileArray = Array.from(e.target.files).map((file)=> URL.createObjectURL(file))
            console.log(fileArray);


            setSelectedImage((prevImages)=>prevImages.concat(fileArray))
            Array.from(e.target.files).map(
                (file)=>URL.revokeObjectURL(file)
            );
        }
    }

    const renderPhotos = (source) =>{
        return source.map((photo) =>{
            return <img src= {photo} key={photo}/>
        })
    }

    // const [modalISOpen, setModalIsOpen] = useState(false)
    return (
        <Modal isOpen={modalISOpen} onRequestClose={()=> props.onRequestClose}>
            <form onSubmit={(e) => handleSubmit(e)}>
                <label>
                    Location:
                    <input type="text" name="location" value={formData.location}
                           onChange={(e) =>
                               setFormData({location: e.target.value,
                                   type: formData.type,
                                   description: formData.description})}/>
                </label>
                <br/>
                <br/>
                Type of Emergency:
                <select value={formData.type} onChange={(e) =>
                    setFormData({location: formData.location,
                        type: e.target.value,
                        description: formData.description})}>
                    <option value="robbery">Robbery</option>
                    <option value="fire">Fire</option>
                    <option  value="accident">Road Accident</option>
                    <option value="loss_life">Loss of Life</option>
                </select>
                <br/>
                <br/>
                <label>
                    Description:
                    <input type="text" name="description" value={formData.description}
                           onChange={(e) =>
                               setFormData({location: formData.location,
                                   type: formData.type,
                                   description: e.target.value})}/>
                </label>
                {/*<br/>*/}
                {/*<br/>*/}
                {/*<input type= "file" multiple name= "picture" onChange={imageHandleChange}/>*/}
                {/*{renderPhotos(selectedImages)}*/}
                <br/>
                <br/>
                <button value={"Submit"} type={"submit"}/>
                {/*<input type="submit" value="Submit" onClick={handleSubmit}/>*/}
                <button onClick={() => setModalIsOpen(false)}> Close</button>
            </form>
        </Modal>
    );
}

export default ReportModal;