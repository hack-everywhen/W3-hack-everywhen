import React, {useState} from 'react'

function Form(props){
    const [formData, setFormData] =
        useState('')
    const handleChange = (e) => {
        setFormData(e.target.value);
    }
        return(
            <div>
                <form onSubmit={console.log(formData)}>
                    <label>Name</label>
                    <input onChange={(e) => handleChange(e)} type='text'/>
                    <button>Click to submit</button>
                </form>
            </div>
        )
}

export  default  Form