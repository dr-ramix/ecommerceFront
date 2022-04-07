import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { mobile } from '../responsive'


const Container = styled.div`
    flex:1;
    margin: 3px;
    height: 70vh;
    position: relative;
    transition: all 0.5s ease;

&:hover{
    transform: scale(1.01);
}
`

const Image = styled.img`
 width: 100%;
 height: 100%;
 object-fit: cover;
 ${mobile({ height:"20vh"})}
    }
`

const Info = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top:0;
    left:0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Title = styled.h1`
    color: white;
    margin-bottom:20px;
`

const Button = styled.button`
    border: none;
    padding: 20px;
    background-color: white;
    color: gray;
    cursor: pointer;
    font-weight: 700;
    border-radius: 10px;
    opacity: 0.66;
    transition: all 0.4s ease;

    &:hover {
        opacity: 0.8;
        font-size:14px;
        font-weight: 750;
    }
`


const CategoryItem = ({item}) => {
  return (
    <Container>
        <Link to={`/products/${item.cat}`}>
        <Image src={item.img} />
            <Info>
                <Title>{item.title}</Title>
                <Button>SHOP NOW</Button>
            </Info>
        </Link>
    </Container>
  )
}

export default CategoryItem