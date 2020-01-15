import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: #666;
  padding: 0 30px;
`;
export const Content = styled.div`
  height: 64px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    color: #FFF;
    font-family: Arial, Helvetica, sans-serif;

  }

  aside {
    display: flex;
    align-items: center;
  }
`;
export const Options = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;

  div {
    text-align: right;
    margin-right: 12px;

    a {
      padding: 20px;
      display: block;
      font-size: 16px;
      color: #FFF;
      &:hover {
        color: ${darken(0.3, '#FFF')};
      }
    }
  }
`;
