import styled from 'styled-components'

export const Main = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 660px;
    height: 500px;

`

export const Title = styled.div`
font-style: normal;
font-weight: 600;
font-size: 20px;

color: white;
    

`
export const Form = styled.form`
color:white;
height: 85%;
display: flex;
flex-direction: column;
width: 100%;
align-items: center;
font-style: normal;
font-weight: 300;
font-size: 18px;

& button{
    background: #23af23;
    border: none;
    border-radius: 50px;
    color: white;
    padding: 5px 15px;
    font-style: normal;
font-weight: 600;
font-size: 16px;
cursor: pointer;
}

    

`

export const FormElements = styled.div`
background-color: rgba(255, 255, 255, 0.08);
    height: 60%;
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: space-around;
    & .textarea {
    display:flex;
    align-items:start;
    & textarea{
        background: none;
    border: 1px solid white;
    font-style: normal;
font-weight: 400;
font-size: 16px;
color: white;
font-family: 'Roboto', Arial, sans-serif;

    }
    
}

margin-bottom: 20px;
border: 1px solid white;
border-radius: 50px;
padding-top: 50px;
padding-bottom: 50px;

`

export const FormElement = styled.div`


& input{
    background:none;
    border: none;
    border-bottom: 1px solid white;
    font-style: normal;
font-weight: 400;
font-size: 16px;
color: white;
}
& input:focus{
    background: none;
}

& label{
    margin-right: 10px;
}

`