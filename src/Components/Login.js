import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import Cookies from "universal-cookie"
const cookies = new Cookies()



const Login = () => {
    const navigate = useNavigate()

    const email = cookies.get('email')

    if(email){
        navigate('/dashboard')
    }
    
    const [ user, setUser ] = useState({
        email: "",
        password: ""
    })

    const updateData = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const [ userData, setUserData ] = useState("")

    const emp = (demo) => {
        axios
            .post("http://localhost:8080/login", demo)
            .then(({data}) => {
                setUserData(data[0].email)
            })
            .catch(() => {
                setUserData("not Ok")
            })
    }

    useEffect(() => {
        emp(user)
    })

    console.log(userData)
    console.log(user)

    const submit = e => {
        e.preventDefault()
        if(user.email==userData){
            console.log("Ok")
            setUserData("")
            window.location.href="/dashboard"
            cookies.set('email', user.email, {path: '/'})
        }
        else{
            console.log("Not ok")
            setUserData("")
            alert("No User Data Found")
            emp(user)
        }
    }

    return(
        <>
            <div className="container">
                <div className="box">
                    <div className="col-cm-6">
                        <form onSubmit={submit}>
                            <div className="form-grp">
                                <input type='email' className='form-control my-3' autoFocus required name='email' placeholder='Enter your email' onChange={updateData} />
                            </div>
                            
                            <div className="form-grp">
                                <input type='password' className='form-control my-3' autoFocus required name='password' placeholder='Enter your password' onChange={updateData} />
                            </div>

                            <button className="btn btn-outline-info">Submit</button>
                        </form>


                        <br />

                        <div>
                            <h4>Don't have an account? Sign up!</h4>

                            <button className="btn btn-outline-info" onClick={() => {
                                navigate('/signup')
                            }}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login