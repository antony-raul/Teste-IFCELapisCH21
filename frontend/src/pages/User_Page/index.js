import React, { useEffect, useState } from 'react'
import './style.css'
import { Link, useHistory } from 'react-router-dom'
import api from '../../services/api'
import { FiEdit, FiTrash2, FiLogOut, FiPower } from 'react-icons/fi'

export default function User_Page() {
    const [products, setProducts] = useState([])
    const history = useHistory()

    async function handleDeleteProduct(id) {
        try{
            if (window.confirm("Deseja mesmo deletar esse produto?")) {
                await api.delete(`products/${id}`)
                alert('Produto deletado com sucesso')

            }
        }catch {
            alert('Erro ao deletar, tente novamente.')
        }
    }

    function navigateToCreateProducts() {
        history.push('/create_products');
    }

    useEffect(() => {
        api.get('products').then(response => {
            setProducts(response.data)
        })
    }, [products])

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light  pb-4 pt-3 ">
                <div className="container-fluid col-11">

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">

                        </ul>

                        <button className="btn btn-primary btn-lg " type="button" 
                            onClick={navigateToCreateProducts} >
                            Novo Produto
                        </button>
                        
                        

                    </div>
                    <hr>
                    </hr>
                    
                </div>
                <Link className=" log-out" to="/">
                            <FiPower size="27" />
                    </Link>
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
                                    <span className="icons">
                                    <Link className="ico" to={{ pathname: '/edit_products', state: product }} ><FiEdit size={20} color="#0062cc" /></Link>
                                    <a className="ico" onClick={() => handleDeleteProduct(product.id)}><FiTrash2 size={20} color="#E02041" /></a>
                                    </span>
                                    
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

            <footer className="container mt-5">

            </footer>

        </div>
    )
}
