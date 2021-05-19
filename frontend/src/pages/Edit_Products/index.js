import React, { useState } from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import './style.css'
import api from '../../services/api'

export default function Edit_Products() {
    const location = useLocation()
    const product = location.state
    const [name, setName] = useState(product.name)
    const [description, setDescription] = useState(product.description)
    const [price, setPrice] = useState(product.price)
    const [image, setImage] = useState()
    const userID = localStorage.getItem('userID')
    const history = useHistory()

    console.log(image)

    function handleSelectImage(event) {
        if(!event.target.files) {
            return;
        }

        const selectedImage = Array.from(event.target.files)

        setImage(selectedImage[0])
    }

    async function handleCreateProduct(e) {
        e.preventDefault();

        const data = new FormData()
        data.append('name', name)
        data.append('description', description)
        data.append('price', price)
        data.append('image', image)

        try {
            await api.put(`products/${product.id}`, data)

            history.push('/user_page')
            alert("Produto editado com sucesso.")

        } catch (err) {
            alert("Falha ao editar, tente novamente.")
        }
    }

    return (

        <div className="container products-container">
            <div className="row">
                <div className="offset-3 col-md-6 products-form-2">
                    <Link className="back" to="/user_page">
                            <FiArrowLeft/>
                    </Link>
                    <h3>Editar produto</h3>
                    <form onSubmit={handleCreateProduct}>
                        <div className="form-group">
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Nome do produto *" 
                                value={name}
                                onChange={e => setName(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Descrição *"
                                value={description}
                                onChange={e => setDescription(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Preço *" 
                                value={price}
                                onChange={e => setPrice(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <input 
                                type="file" 
                                className="form-control" 
                                accept="image/jpeg, image/png" 
                                onChange={handleSelectImage} 
                            />
                        </div>

                        <div className="form-group">
                            <input type="submit" className="btnSubmit" value="Cadastrar" />
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>



    )
}