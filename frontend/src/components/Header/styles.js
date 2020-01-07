import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fff;
  box-shadow: 0px 3px 10px rgba(125, 125, 125, 0.1);
  padding: 0 2rem;
`;

export const Content = styled.div`
  height: 64px;
  margin: 0 auto;
  max-width: 900px;
  display: flex;
  justify-content: center;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    a {
      color: #fa4251;
      cursor: pointer;
      font-weight: bold;
      margin: 0.25rem;
      padding: 0.25rem;
    }
  }
`;
