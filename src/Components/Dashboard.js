import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import axios from "axios"
import Cookies from "universal-cookie"
const cookies = new Cookies()

const Dashboard = () => {
    const navigate = useNavigate()
    const email = cookies.get('email')

    useEffect(() => {
        if(!email){
            navigate('/')
        }
    })

    const [ data, setData ] = useState([])

    const emp = (demo) => {
        axios
            .post("http://localhost:8080/check", demo)
            .then(({data}) => {
                setData(data[0])
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        emp({email: email})
    }, [])

    console.log(data)

    console.log(email)

    const [ isHovering, setIsHovering ] = useState(false)

    const handleMouseOver = () => {
        setIsHovering(true)
    }

    const handleMouseOut = () => {
        setIsHovering(false)
    }

    const goToAdd = () => {
        navigate('/add')
    }

    return(
        <>
            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                            <td colSpan={2} style={{textAlign: "center"}}><b>Dashboard</b></td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><b>Name</b></td>
                            <td>{data.name}</td>
                        </tr>

                        
                        <tr>
                            <td><b>Email</b></td>
                            <td>{data.email}</td>
                        </tr>

                        
                        <tr>
                            <td><b>Phone Number</b></td>
                            <td>{data.phone}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="container">
                <div className="box">
                    <div className="col-sm-12 add" style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                        <button onClick={goToAdd} onMouseOver={handleMouseOver}
                        onMouseOut={handleMouseOut} className="btn btn-outline-info ">+</button>
                    </div>

                    {isHovering && (
                        <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                            <h2>Add New User</h2>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default Dashboard