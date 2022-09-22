import React from 'react';
import "./Clientes.css";
import { useState, useEffect } from 'react';
import Card from "./Card";
import axios from 'axios';

export function Clientes (){
const [data, setData] = useState([])


const getData = () => {
    axios
      .get(`https://632be0221aabd837398d6627.mockapi.io/VentureLabs`)
      .then((res) => {
        setData(res.data);
      });
  };

useEffect(() => {
        getData();
      }, []);

return (
    <div className='principal'>
            
           {data.map((objeto) => (
            <Card 

            nome={objeto.nome}
            sobrenome={objeto.sobrenome}
            email={objeto.email}
            cep={objeto.cep}
            cpf={objeto.cpf}
            end={objeto.end}
            dataNasc={objeto.dataNasc}
            renda={objeto.renda}
            
            
            
            />
           ))}          
                    
    

        </div>
        
           
            

        
    )
}