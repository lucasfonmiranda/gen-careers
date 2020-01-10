import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px 0;

  a {
    text-decoration: none;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.5;
    }

    span {
      color: #fff;
      font-size: 24px;
    }
  }
`;
