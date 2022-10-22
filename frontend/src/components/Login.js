import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';
import IMG from "../image_hub.png";
 
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
    const history = useNavigate();
 
    const Auth = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/login', {
                email: email,
                password: password
            });
            history("/dashboard");
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }
 
    return (
  
    <div class="container">
        <div class="row">
        <div class="col-lg-3 col-md-2"></div>
        <div class="col-lg-6 col-md-8 login-box">
            <div class="col-lg-12 login-key">
                <img className='ssss' src={IMG} />
            </div>
            <div class="col-lg-12 login-title">
                ImageHub
            </div>

            <div class="col-lg-12 login-form">
                <div class="col-lg-12 login-form">
                    <form onSubmit={Auth}>
                        <div class="form-group">
                            <label class="form-control-label">USERNAME</label>
                            <input placeholder="Username" value={email} onChange={(e) => setEmail(e.target.value)} type="text" class="form-control"/>
                        </div>
                        <div class="form-group">
                            <label class="form-control-label">PASSWORD</label>
                            <input  className="form-control" placeholder="******" value={password} onChange={(e) => setPassword(e.target.value)} type="password"/>
                        </div>

                        <div class="col-lg-12 loginbttm">
                            <div class="col-lg-6 login-btm login-text">
                                 {msg}
                            </div>
                            <div class="col-lg-6 login-btm login-button">
                                <button type="submit" class="btn btn-outline-primary">LOGIN</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div class="col-lg-3 col-md-2"></div>
        </div>
    </div>
    </div>
    )
}
 
export default Login