import React from 'react'
import { Title, Button, ListMain, MoviesList } from './List.style'
import Movie from './Movie'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function List() {

  const [datas, setDatas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("http://localhost:3000/movies")
      setDatas(data);
    };
    fetchData();
  }, [])


  return (
    <ListMain>
      <Title>This is your list of movies</Title>
      <MoviesList>
        {datas.map((post, key) => {
          return <Movie score={post.score} title={post.title} diretor={post.diretor} year={post.year} coments={post.coments} id={post.id} />
        })}
      </MoviesList>

      <Button> <Link className='link' to="/create">Create</Link></Button>
    </ListMain>

  )
}

export default List