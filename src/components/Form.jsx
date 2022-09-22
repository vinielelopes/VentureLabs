import React from 'react';
import "./Form.css";
import { useState } from 'react'
import { Clientes } from "./Clientes";
import axios from 'axios';




export function Form (){
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [cep, setCep] = useState('');
  const [cpf, setCpf] = useState('');
  const [renda, setRenda] = useState('');
  const [dataNasc, setData] = useState('');
  const [end, setEnd] = useState('');


  const postData = (e) => {
    e.preventDefault()
    axios.post(`https://632be0221aabd837398d6627.mockapi.io/VentureLabs`, {
      nome,
      sobrenome,
      email, 
      cep,
      cpf,
      end,
      dataNasc, 
      renda

    } )
            alert("Cadastro efetuado!")

  }

    return (
      <form>
          <label>Nome:</label>
          <input placeholder='Nome' onChange={(e) => setNome(e.target.value)} type='text'/>
          <label>Sobrenome:</label>
          <input placeholder='Sobrenome' onChange={(e) => setSobrenome(e.target.value)} type='text'/>
          <label>Email:</label>
          <input placeholder='Email' onChange={(e) => setEmail(e.target.value)} type='email'/>
          <label>CEP:</label>
          <input placeholder='CEP' onChange={(e) => setCep(e.target.value)} type='number'/>
          <label>Endereço:</label>
          <input placeholder='Endereço' onChange={(e) => setEnd(e.target.value)} type='text'/>
          <label>Data de Nascimento:</label>
          <input nplaceholder='Data de Nascimento' onChange={(e) => setData(e.target.value)} type='date'/>
          <label>CPF:</label>
          <input placeholder='CPF' onChange={(e) => setCpf(e.target.value)} type='number'/>
          <label>Renda Mensal:</label>
          <input placeholder='Renda' onChange={(e) => setRenda(e.target.value)} type='number'/>
          <br></br>
          <button type='submit' onClick={postData}  className='botao'>Salvar</button>

          <br></br>
          <br></br>
         

        </form>
    )
}