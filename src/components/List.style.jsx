import styled from 'styled-components'

export const ListMain = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    
`

export const MoviesList = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column-reverse;
    align-items: center;
    margin-top: 50px;
    margin-bottom: 50px;

`

export const Title = styled.div`
    font-style: normal;
font-weight: 600;
font-size: 20px;

color: white;

`
export const Button = styled.button`
        background: #23af23;
    border: none;
    border-radius: 50px;
    padding: 5px 15px;
    margin-bottom: 50px;
cursor: pointer;
& .link{
    color: white;
    font-style: normal;
font-weight: 600;
font-size: 16px;
text-decoration: none;
}
`