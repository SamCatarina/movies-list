import React from 'react'
import {
    MovieMain, ButtonContent, Coments, DeleteButton
    , Directed, EditButton, MovieInfo, MovieTitle, Score, TextContent, Year
} from './Movie.style'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import {FaEdit, FaEraser} from 'react-icons/fa'


function Movie(props) {

    const navigate = useNavigate()

    function Delete(id){
        axios.delete(`http://localhost:3000/movies/${id}`);
        navigate(0)
    }


    return (
        <MovieMain>
            <TextContent>
                <MovieInfo>

                    <MovieTitle>
                        <Score>
                            {props.score}
                        </Score>
                        <p>{props.title} </p>
                    </MovieTitle>
                    <Directed>
                        {props.diretor}
                    </Directed>
                    <Year>
                        {props.year}
                    </Year>
                </MovieInfo>
                <Coments>
                    {props.coments}
                </Coments>
            </TextContent>
            <ButtonContent>

                
                <Link to={`/update/${props.id}`}><EditButton><FaEdit/></EditButton></Link>
                
                <DeleteButton onClick={() => Delete(props.id)}>
                    <FaEraser/>
                </DeleteButton>

            </ButtonContent>
        </MovieMain>
    )
}

export default Movie