import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import './style.css'
import api from '../../services/api'

export default function Login() {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory()

    async function handleLogin(e) {
        e.preventDefault();

        const data = {login, password}

        try {
            const response = await api.post('sessions', data)

            localStorage.setItem('userID', response.data.id)

            history.push('/user_page')

        } catch (err) {
            alert("Falha no login, tente novamente.")
        }
    }

    return (
        <div className="container login-container">
            <div className="row">
                <div className="offset-3 col-md-6 login-form-1">
                    <Link className="back" to="/">
                            <FiArrowLeft/>
                    </Link>
                    <h3>Login</h3>
                    <form onSubmit={handleLogin}>
                        <div className="form-group">
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Login *"
                                value={login}
                                onChange={e => setLogin(e.target.value)} 
                            />
                        </div>
                        <div className="form-group">
                            <input 
                                type="password" 
                                className="form-control" 
                                placeholder="Senha *"
                                value={password}
                                onChange={e => setPassword(e.target.value)} 
                            />
                        </div>
                        <div className="center" className="form-group">
                            <input type="submit" className="btnSubmit" value="Login" />
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>       
    )
} 