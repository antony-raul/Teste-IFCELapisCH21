import React, { useEffect, useState } from 'react'
import './style.css'
import { useHistory } from 'react-router-dom'
import api from '../../services/api'
import { FiEdit, FiTrash2 } from 'react-icons/fi'

export default function Home() {
    const [products, setProducts] = useState([])
    const history = useHistory()

    function navigateToLogin() {
        history.push('/login');
    }

    useEffect(() => {
        api.get('products').then(response => {
            setProducts(response.data)
        })
    }, [])

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light  pb-4 pt-3 ">
                <div className="container-fluid col-10">

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">

                        </ul>

                        <button className="btn btn-primary btn-lg" type="button" onClick={navigateToLogin}>Login</button>

                    </div>
                    <hr>
                    </hr>
                </div>

            </nav>

            <main role="main">
                <div className="container">
                    <div className="offset-5 col align-center mt-5">
                        <h1>Produtos</h1>
                    </div>
                    <div className="row">
                        {products.map(product => (
                            <div className="col-md-4 mt-5" key={product.id}>
                                <div className="card">
                                    
                                    
                                    <div className="card-body">
                                    
                                        <div className="card-img-actions">
                                        <img src={`http://localhost:3333/uploads/${product.image_url}`}
                                                className="card-img img-fluid" width="96" height="350" alt="" /> 
                                        </div>
                                    </div>
                                    <div className="card-body bg-light text-center">
                                        <div className="mb-2">
                                            <h6 className="font-weight-semibold mb-2">{product.name}</h6> <a href="#"
                                                className="text-muted" data-abc="true">{product.description}</a>
                                        </div>
                                        <h3 className="mb-0 font-weight-semibold">R$ {product.price}</h3>
                                        <div> <i className="fa fa-star star"></i> <i className="fa fa-star star"></i> <i
                                            className="fa fa-star star"></i> <i className="fa fa-star star"></i> </div>
                                        
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </main>

            <footer className="container mt-5"></footer>

        </div>
    )
}