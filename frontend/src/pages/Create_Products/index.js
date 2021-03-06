import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import './style.css'
import api from '../../services/api'

export default function Create_Products() {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const userID = localStorage.getItem('userID')
    const [image, setImage] = useState()
    const history = useHistory()

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
            await api.post('products', data, {
                headers: {
                    authorization: userID
                }
            })

            history.push('/user_page')
            alert("Produto cadastrado com sucesso.")

        } catch (err) {
            alert(err)
        }
    }

    return (

        <div className="container products-container">
            <div className="row">
                <div className="offset-3 col-md-6 products-form-2">
                   
                        <Link className="back" to="/user_page">
                            <FiArrowLeft/>
                        </Link>
                 
                    <h3>Cadastrar produto</h3>
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
                                placeholder="Descri????o *"
                                value={description}
                                onChange={e => setDescription(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Pre??o *" 
                                value={price}
                                onChange={e => setPrice(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <input type="file" className="form-control" onChange={handleSelectImage} accept="image/jpeg, image/png" />
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