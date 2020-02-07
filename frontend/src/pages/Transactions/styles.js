import styled from 'styled-components';

export const TransactionsList = styled.div`
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
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      font-family: Roboto;
    }
  }
  h3 {
    margin: 0 20px;
  }
`;

export const Selectors = styled.div`
  display: flex;
  justify-content: auto;
  padding: 20px;
  margin: 20px;
  align-items: center;
  padding-right: 30px;

  .ant-select {
    width: 200px;
  }
`;

export const Container = styled.div`
  h3 {
    margin: 0 20px;
  }
`;
