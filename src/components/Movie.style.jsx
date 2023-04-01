import styled from "styled-components";

export const MovieMain = styled.div`
    width:600px;
    height: 140px;
    background-color: rgba(255, 255, 255, 0.08);
    display: flex;
    margin-bottom: 20px;
    border-radius: 50px;
    border: 1px solid white;
    color: white;

`
export const TextContent = styled.div`
width: 90%;
height: 100%;
display:flex;
flex-direction: column;
    
`
export const MovieInfo = styled.div`
width:100%;
height:40%;
display: flex;
justify-content: space-around;
align-items: center;
    
`
export const Score = styled.div`

`
export const MovieTitle = styled.div`
    width:40%;
    display: flex;
    height: 100%;
    justify-content: space-between;
    align-items: center;
    font-style: normal;
font-weight: 600;
font-size: 16px;
`
export const Directed = styled.div`
    

`

export const Year = styled.div`
    

`
export const Coments = styled.div`
    margin-left: 60px;

`
export const ButtonContent = styled.div`
    width: 10%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items:start;

`
export const EditButton = styled.button`
width: 30px;
height: 30px;
background: none;
border:none;
font-size: 20px;
color: #0044ff;
    

`
export const DeleteButton = styled.button`
width: 30px;
height: 30px;
background: none;
border:none;
font-size:20px;
color: #e61616;
`