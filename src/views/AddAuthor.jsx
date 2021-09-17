import React, { useState } from 'react'
import {Link, useHistory} from 'react-router-dom'
import axios from 'axios'
import Form from '../components/Form'

const AddAuthor = () => {

    const [error, setError] = useState();
    const [name, setName] = useState("");
    
    const history = useHistory();
    
    const submitAuthor = name =>{
        axios.post(`http://localhost:8000/api/authors/create`, name)
            .then(res => history.push('/'))
            .catch((err) => {
                const showError = err.response.data.message
                setError(showError)
            })
    }

    return (
        <div>
            <Link to="/">Home</Link>
            <h3>Add a new author:</h3>
            <Form createAuthor={submitAuthor} error={error} zeroName={name}/>
        </div>
    )
}

export default AddAuthor
