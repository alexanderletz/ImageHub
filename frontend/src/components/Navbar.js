import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import jwt_decode from "jwt-decode";
import React, { useState, useEffect } from 'react'
import '../styles/Navbar.css'; 
import { NavLink } from 'react-router-dom';

const axiosJWT = axios.create();

const Navbar = () => {
    const history = useNavigate();
    const [name, setName] = useState('');
    const [token, setToken] = useState('');
    const [expire, setExpire] = useState('');
    const [users, setUsers] = useState([]);
 
    useEffect(() => {
        refreshToken();
        getUsers();
    }, []);
 
    const Logout = async () => {
        try {
            await axios.delete('http://localhost:5000/logout');
            history("/");
        } catch (error) {
            console.log(error);
        }
    }
 
    const getUsers = async () => {
        const response = await axiosJWT.get('http://localhost:5000/users', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        setUsers(response.data);
    }

    const refreshToken = async () => {
        try {
            const response = await axios.get('http://localhost:5000/token');
            console.log(response)
            setToken(response.data.accessToken);
            const decoded = jwt_decode(response.data.accessToken);
            setName(decoded.name);
            setExpire(decoded.exp);
        } catch (error) {
            if (error.response) {
                history("/");
            }
        }
    }

    return (
        <div>
        <div className="navbar">
            <a href="#"><div className="title">Image<span>Hub</span></div></a>
            <ul>
                <a href="#"><li>
                       <em>{name}</em>
                    </li></a>
                <a href="#"><li>Geliked</li></a>
                <a href="#"><li>Alte</li></a>
                <a href="#"><li>Neuste</li></a>
                <NavLink to="/upload"><li>Hochladen</li></NavLink>
                <a href='#logout' onClick={Logout}><li className="weee">Abmelden</li></a>
            </ul>
            <div id="ham" className="ham">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </div>
        <div id="menu" className="menu">
            <ul>
                <a href="#"><li>Geliked</li></a>
                <a href="#"><li>Alte</li></a>
                <a href="#"><li>Neuste</li></a>
                <NavLink to="/upload"><li>Hochladen</li></NavLink>
                <a href='#logout' onClick={Logout}><li className="weee">Abmelden</li></a>
            </ul>
        </div>
        </div>
    )
}
 

/*const menu = document.getElementById("menu");
const ham = document.getElementById("ham");

ham.onclick = () => {
    if (menu.style.display === "none") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}*/

export default Navbar;