import React from 'react';
import "./Card.css";


function Card (props){


    return (
        <div className='clientes'>
            <ul>
                <li>
                <a className='cliente'>Nome: {props.nome} {props.sobrenome}</a>
                <div  className='clientesHover'>
                <h5>Email: {props.email}</h5>
                <h5>CEP: {props.cep}</h5>
                <h5>Endereço: {props.end}</h5>
                <h5>Data de Nascimento: {props.dataNasc}</h5>
                <h5>CPF: {props.cpf}</h5>
                <h5>Renda: {props.renda}</h5>
                </div>


                </li>
                
                </ul>

           

            

               




            
                    
        </div>
        
           
            

        
    )
}

export default Card;