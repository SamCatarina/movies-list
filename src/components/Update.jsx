import React, { useEffect } from 'react'
import {useForm} from 'react-hook-form'
import { Main, Form, Title, FormElement, FormElements } from './Create.style';
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom';


function Update() {
    const navigate = useNavigate()

    const { id } = useParams()

    const {register, handleSubmit, reset} = useForm();

    const onSubmit = data => {
      axios.put(`http://localhost:3000/movies/${id}`, data);
      navigate('/')
    }

    useEffect(() => {
      axios.get(`http://localhost:3000/movies/${id}`)
      .then((response) =>{
        reset(response.data)
      })
    }, [])

  return (
    <Main>
        <Title> Update a movie: </Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
        <FormElements>

        <FormElement>
          <label htmlFor="name">Movie's name:</label>
          <input type="text" name='name' {...register("title")} />
        </FormElement>
        <FormElement>
          <label htmlFor="diretor">Directed by:</label>
          <input type="text" name='diretor' {...register("diretor")} />
        </FormElement>
        <FormElement>
          <label htmlFor="year">year:</label>
          <input type="text" name='year' {...register("year")} />
        </FormElement>
        <FormElement>
          <label htmlFor="score">Score:</label>
          <input type="text" name='score' {...register("score")} />
        </FormElement>
        <FormElement className='textarea'>
          <label htmlFor="coments">Coments:</label>
          <textarea type="text" name='coments' {...register("coments")} />
        </FormElement>

        </FormElements>
       
        <button type='submit'> Update Movie </button>

      </Form>
    </Main>
  )
}

export default Update