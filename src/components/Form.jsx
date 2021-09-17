import React, {useState} from 'react'
import { Link } from 'react-router-dom'

const Form = (props) => {
    const { error, createAuthor, zeroName } = props;

    const [name, setName] = useState(zeroName);

    const submitHandler = e => {
        e.preventDefault();
        createAuthor( {name})
    }

    return (
        <div>
            <h3>Name:</h3>
            <form onSubmit={submitHandler} >
                <input onChange={(e) => setName(e.target.value)} type="text" value={name} name="name" id="name" />
                {error && <p style={{ color: 'red'}}>{error.slice(31)} </p>}
                <Link to="/"> Cancel </Link>
                <button> Submit </button>
            </form>
        </div>
    )
}

export default Form
