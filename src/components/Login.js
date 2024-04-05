import { useState, useEffect } from "react"
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function Login(){
    const [clicked,setClicked] = useState(false)
    const [password,setPassword] = useState("")
    const navigate = useNavigate()
    const [placehold,setPlacehold] = useState("Password")
    
      

    const checkLogin = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post('http://localhost:3001/auth', {
              password
            });
      
            // Assuming the server responds with a JWT token upon successful login
            const token = response.data.token;
            console.log(token)
      
            // Store the token securely (e.g., local storage)
            localStorage.setItem('token', token);
            navigate("/admin")
      
            // Redirect to a protected route or perform other actions
          } catch (error) {
            console.error('Login failed', error);
            setPlacehold("Incorrect Password")


          }
        setPassword("")

    };
    

    const handleButton = () => {
        setClicked(!clicked)
    }

    return(
        <div style={{display:"flex"}}>
            <button onClick={handleButton} style={{backgroundColor:"white",border:"1px solid grey"}}>Admin</button>
            {clicked && 
                <div>
                    <form onSubmit={(e)=>checkLogin(e)}>
                        <input type="password" placeholder={placehold} onChange={(e)=>setPassword(e.target.value)} value={password}/>
                    </form>
                </div>
            }
        </div>
    )
}