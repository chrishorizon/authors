import axios from 'axios';
import React, {useState, useEffect} from 'react'
import {Link, useHistory, useParams} from 'react-router-dom'
import Form from '../components/Form'

const Edit = () => {

    const [ author , setAuthor ] = useState();
    const [ error, setError ] = useState();
    const history = useHistory();
    const {id} = useParams();

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/' + id)
            .then(res => {
                setAuthor(res.data.name)
            })
            .catch(err => console.log(err))
    }, [])

    const editAuthor = name => {
        axios.put('http://localhost:8000/api/authors/' + id, name)
            .then(res => history.push("/"))
            .catch(err => {
                const showError = err.response.data.message
                setError(showError)
            })
    }

    return (
        <div>
            <Link to="/">Home</Link>
            <p>Edit this author:</p>
            {<Form createAuthor={editAuthor} error={error} zeroName={author} />}
        </div>
    )
}

export default Edit
