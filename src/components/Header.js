import { useNavigate } from 'react-router-dom'; 
import {useState} from "react";
import AdminPanel from './AdminPanel';
import Login from './Login';

export default function Header({current}){

    
    const navigate = useNavigate();   
    
    const banner = {
        zIndex:"1000",
    }

    const handleNavigate=(link)=>{
        navigate(link);
    }

    const linkStyle =(buttonName)=> {
        return {
            background: "none",
            border: "2px",
            cursor: "pointer",
            color: buttonName === current ? "#a89291": "black",
            fontFamily: buttonName === current ? "sans-serif" : "helvetica",
            fontSize: "0.3em",
        }
    }

    return(
        <div style = {banner}>
            <button onClick={()=>handleNavigate("/")} style={linkStyle("home")}>About Us</button>
            <button onClick={()=>handleNavigate("/team")} style={linkStyle("team")}>Team</button>
            <button onClick={()=>handleNavigate("/events")} style={linkStyle("events")}>Events</button>
            <button onClick={()=>handleNavigate("/jobboard")} style={linkStyle("job")}>Job Board</button>
        </div>
    )
}