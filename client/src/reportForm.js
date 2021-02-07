import Modal from 'react-modal'
import React, {useState} from 'react'
import Form from './components/Form'


// Modal.setAppElement('#root')

function ReportModal(props) {
    const modalISOpen = props.isOpen;
    const setModalIsOpen = props.setModalIsOpen;
    const [formData, setFormData] =
        useState({location: null, type: "Robbery", description: "Describe the event"})


    const handleSubmit = (e) => {
        // alert(JSON.stringify(formData))
        e.stopPropagation();
        console.log(formData);
        // submitReport(formData).then(r => setModalIsOpen(false));
    }


    // const [modalISOpen, setModalIsOpen] = useState(false)
    return (
        <Modal isOpen={modalISOpen} onRequestClose={()=> props.onRequestClose}>
            <Form formData={formData} setFormData = {setFormData}/>
        </Modal>
    );
}

export default ReportModal;