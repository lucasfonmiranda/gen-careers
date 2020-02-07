import styled from 'styled-components';

export const ClientList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;
  padding: 30px;
  align-items: center;

  li {
    display: flex;
    margin: 4px;
    justify-content: space-around;
    flex-direction: column;
    background: #fff;
    border-radius: 4px;
    padding: 20px;
    p {
      font-family: Roboto;
      width: 100%;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }
  }
`;
