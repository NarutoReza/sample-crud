import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import Cookies from "universal-cookie"
const cookies = new Cookies()

const Signup = () => {

    const navigate = useNavigate()
    const email = cookies.get('email')

    useEffect(() => {
        if(email){
            navigate('/')
        }
    })
    
    const [ user, setUser ] = useState({
        name: "",
        password: "",
        email: "",
        phone: "",
        gender: "",
        hear: "",
        city: "",
        state: ""
    })

    const stateList = [
        { id: 1, town: "Mumbai", stateName: "Maharashtra" },
        { id: 2, town: "Pune", stateName: "Maharashtra" },
        { id: 3, town: "Ahmedabad", stateName: "Gujrat" }
    ]

    //console.log(stateList)

    //console.log(user)

    useEffect(() => {
        for(let x of stateList){
            if(x.town === user.city){
                //console.log(x.stateName)
                setUser({
                    ...user,
                    state: x.stateName
                })
            }
            else{ console.log('no result')}
        }
    })

    const updateData = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const [ check, setCheck ] = useState("")

    const checkUser = (demo) => {
        axios
            .post("http://localhost:8080/check", demo)
            .then(({ data }) => {
                setCheck(data[0])
            })
            .catch(err => console.log(err))
    }
    
    useEffect(() => {
        checkUser({email: user.email})
    })

    console.log(check)

    const emp = (demo) => {
        axios
            .post("http://localhost:8080/signup", demo)
            .then((res) => {
                //console.log(res.json)
            })
            .catch(err => console.log(err))
    }

    const submit = e => {
        e.preventDefault()
        if(check.email==user.email){
            alert("User already exist")
            window.location.href="/"
        }
        else{
            emp(user)
            alert("User added successfully")
            window.location.href="/"
        }
    }

    return(
        <>
            <div className="container">
                <div className="box">
                    <div className="col-cm-6">
                        <form onSubmit={submit}>
                            <div className="form-grp">
                                <input type='name' className='form-control my-3' autoFocus required name='name' placeholder='Enter your name' onChange={updateData} />
                            </div>

                            <div className="form-grp">
                                <input type='email' className='form-control my-3' autoFocus required name='email' placeholder='Enter your email' onChange={updateData} />
                            </div>
                            
                            <div className="form-grp">
                                <input type='password' className='form-control my-3' autoFocus required name='password' placeholder='Enter your password' onChange={updateData} />
                            </div>

                            <div className="form-grp">
                                <input type='number' className='form-control my-3' autoFocus required name='phone' placeholder='Enter your phone number' onChange={updateData} onInput = {(e) =>{
                                    e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,10)
                                }} />
                            </div>

                            <div className="form-grp">
                                <label for="gender"><b>Select your gender</b></label>
                                <br />

                                <input type="radio" value="Male" name="gender" autoFocus required onChange={updateData} /> Male&nbsp;&nbsp;
                                <input type="radio" value="Female" name="gender" autoFocus required onChange={updateData} /> Female&nbsp;&nbsp;
                                <input type="radio" value="Others" name="gender" autoFocus required onChange={updateData} /> Others
                            </div>

                            <div className="form-grp">
                                <label for="hear"><b>How did you hear about this?</b></label>
                                <br />

                                <input type="radio" value="LinkedIn" name="hear" autoFocus required onChange={updateData} /> LinkedIn&nbsp;&nbsp;
                                <input type="radio" value="Freinds" name="hear" autoFocus required onChange={updateData} /> Freinds&nbsp;&nbsp;
                                <input type="radio" value="Job Portal" name="hear" autoFocus required onChange={updateData} /> Job Portal&nbsp;&nbsp;
                                <input type="radio" value="Others" name="hear" autoFocus required onChange={updateData} /> Others 
                            </div>

                            <div className="form-grp">
                                <select  name="city" className='form-control my-3' autoFocus required onChange={updateData}>
                                    <option value="none" selected disabled hidden>Select an City</option>
                                    <option vlaue="Mumbai">Mumbai</option>
                                    <option vlaue="Pune">Pune</option>
                                    <option vlaue="Ahmedabad">Ahmedabad</option>
                                </select>
                            </div>

                            <div className="form-grp">
                                <input type='text' className='form-control my-3' autoFocus required name='state' placeholder='Enter your state' value={user.state} />
                            </div>

                            <button className="btn btn-outline-info">Submit</button>
                        </form>


                        <br />

                        <div>
                            <h4>Already have an account? Log In!</h4>

                            <button className="btn btn-outline-info" onClick={() => {
                                navigate('/signup')
                            }}>Log In</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup