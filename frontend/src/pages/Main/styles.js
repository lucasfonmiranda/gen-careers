import styled from 'styled-components';

export const Lista = styled.ul`
  list-style: none;
  li {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 60px;
    a {
    color: #fff;
    text-decoration: none;
    font-size: 16px;
    padding: 20px;
    margin: 10px;
    width: 100px;
    border: 1px solid black;
    border-radius: 5px;
    background-color: #000;
    color: #fff;
    }
    a:hover {
      opacity: 0.7;
    }
    p {
    padding: 25px;
    font-size: 26px;
    }
    img {
      border: 0px solid black;
      border-radius: 5px;
      margin-bottom: 10px;
    }
  }
`;
