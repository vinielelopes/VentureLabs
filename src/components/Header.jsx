import React from 'react';
import "./Header.css";
import { Form } from './Form';
import { Clientes } from "./Clientes";

import {Route, Routes, Link} from "react-router-dom";



export function Header (){

    return (

        <header className='nav'>
            <h1>Venture Labs</h1>
            <div className='botoes'>
            <Link className = 'navbar' to='/cadastro'>
                <button className='botao'>Cadastrar</button>
            </Link>
            <Link className = 'navbar' to='/clientes'>
                <button className='botao'>Clientes</button>
            </Link>
            </div>
      
            
            <hr></hr>
            <br></br>
            <br></br>
            <div>
            <Routes>
                <Route path='/cadastro'element ={<Form/>}/>
                <Route path='/clientes'element ={<Clientes/>}/>
            </Routes>
            </div>
        </header>
        

    )

}