import axios from 'axios';
import {Link, useParams} from 'react-router-dom'
import React, {useState, useEffect} from 'react'

const Dashboard = () => {
    const [ authors, setAuthors ] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then(res => {
                setAuthors(res.data)
            })
    }, [])

    const removeAuthor = authorId => {
        axios.delete('http://localhost:8000/api/authors/' + authorId)
            .then(res => {
                setAuthors(authors.filter(a => a._id !== authorId))
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <Link to="/new">Add an author</Link>
            <h3>We have quotes by:</h3>
            <table>
                <thead>
                    <tr>
                        <th>Authors</th>
                        <th>Actions Available</th>
                    </tr>
                </thead>
                <tbody>
                    {authors.map((author, index) => {
                        return <tr key={index}>
                            <td>{author.name}</td>
                            <td>
                                <Link to={`/edit/${author._id}`}>Edit</Link>
                                <button onClick={() => removeAuthor(author._id)} >Delete</button>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
            
        </div>
    )
}

export default Dashboard
