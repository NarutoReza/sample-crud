import { useEffect } from "react"
import { useNavigate } from "react-router"
import Cookies from "universal-cookie"
const cookies = new Cookies()

const Logout = () => {
    const email = cookies.get('email')

    useEffect(() => {
        cookies.remove('email', {path: '/'})
        window.location.href="http://localhost:3000"
    })

    return(
        <>
            <h1>Log Out</h1>
        </>
    )
}

export default Logout