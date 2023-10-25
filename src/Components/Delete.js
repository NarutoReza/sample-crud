import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router"
import Cookies from "universal-cookie"
const cookies = new Cookies()

const Delete = () => {
    const navigate = useNavigate()
    const email = cookies.get('email')

    useEffect(() => {
        if(!email){
            navigate('/')
        }
    })

    const { id } = useParams()

    useEffect(() => {
        axios
            .delete("http://localhost:8080/delete/"+id)
            .then(() => {
                navigate('/dashboard')
            })
    }, [])

    return(
        <>Delete</>
    )
}

export default Delete