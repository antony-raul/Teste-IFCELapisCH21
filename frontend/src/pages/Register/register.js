import React from 'react'

import './style.css'

export default function Register() {
    return (

        <div className="container register-container">
            <div className="row">
                <div class="offset-3 col-md-6 register-form-2">
                    <h3>Cadastre-se</h3>
                    <form>
                    <div class="form-group">
                            <input type="text" class="form-control" placeholder="Nome *" value="" />
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Login *" value="" />
                        </div>
                        <div class="form-group">
                            <input type="password" class="form-control" placeholder="Senha *" value="" />
                        </div>
                        <div class="form-group">
                            <input type="submit" class="btnSubmit" value="Cadastrar" />
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>



    )
}