import React from 'react'
import { useForm } from 'react-hook-form'
import { Main, Form, Title, FormElements, FormElement } from './Create.style';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function Create() {
  const navigate = useNavigate()


  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    axios.post("http://localhost:3000/movies", data);
    navigate('/')

  }

  return (
    <Main>
      <Title> Adding a new movie:</Title>
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
          <label htmlFor="year">Year:</label>
          <input type="number" name='year' {...register("year")} />
        </FormElement>
        <FormElement>
          <label htmlFor="score">Score:</label>
          <input type="number" name='score' {...register("score")} />
        </FormElement>
        <FormElement className='textarea'>
          <label htmlFor="coments">Coments:</label>
          <textarea type="text" name='coments' {...register("coments")} />
        </FormElement>

        </FormElements>
       
        <button type='submit'> Add new movie </button>

      </Form>
    </Main>
  )
}

export default Create