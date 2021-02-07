import React, {useState} from 'react'

function Form(props){
    const [formData, setFormData] =
        useState({location: null, type: "Robbery", description: "Describe the event"})
    const handleSubmit = (e) => {
                e.preventDefault();
                const newReport = {
                    type : "Feature",
                    geometry : {
                        type : "Point",
                        coordinates: ["17", "46"]
                    },
                    properties: {
                        description : formData.description
                    },
                    reporterID : "601ee822fd80bb19ec978358"
                }
                alert('A form was submitted: ' + formData.location);
                
                fetch('http://localhost:7000/api/reports', {
                    method: 'POST',
                    // We convert the React state to JSON and send it as the POST body
                    body: JSON.stringify(newReport)
                }).then(function(response) {
                    console.log(response)
                    return response.json();
                });   
    }
        
        return(
            <div>
                <form method='POST' onSubmit={(e) => handleSubmit(e)}>  
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
                <br/>
                <br/>
                <button  type={"submit"}>SUBMIT</button>
                </form>
            </div>
        )
}

export  default  Form