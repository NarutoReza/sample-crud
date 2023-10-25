import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import axios from "axios"
import { Link } from "react-router-dom"
import Cookies from "universal-cookie"
const cookies = new Cookies()

const All = () => {
    const navigate = useNavigate()
    const email = cookies.get('email')

    useEffect(() => {
        if(!email){
            navigate('/')
        }
    })

    const [ all, setAll ] = useState([])

    useEffect(() => {
        axios
            .get("http://localhost:8080/all")
            .then(({ data }) => {setAll(data)
            })
    })

    console.log(all)

    return(
        <>
            <div className="container">
                <div className="box">
                    <div className="col-sm-12">
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                   <tr>
                                        <td>Name</td>
                                        <td>Email</td>
                                        <td>Password</td>
                                        <td>Phone Number</td>
                                        <td>Gender</td>
                                        <td>City</td>
                                        <td>State</td>
                                        <td>Edit User</td>
                                        <td>Delete User</td>
                                   </tr>
                                </thead>

                                <tbody>
                                   {all && all.map((item) => {
                                    return(
                                        <tr key={item._id}>
                                            <td>{item.name}</td>
                                            <td>{item.email}</td>
                                            <td>{item.password}</td>
                                            <td>{item.phone}</td>
                                            <td>{item.gender}</td>
                                            <td>{item.city}</td>
                                            <td>{item.state}</td>
                                            <td>
                                                <Link className="edit-link" to={'/edit/'+item._id}>
                                                    <button className="btn btn-outline-info">Edit User</button>
                                                </Link>
                                            </td>
                                            <td>
                                                <Link className="edit-link" to={'/delete/'+item._id}>
                                                    <button className="btn btn-outline-info">Delete User</button>
                                                </Link>
                                            </td>
                                    </tr>
                                    )
                                   })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default All