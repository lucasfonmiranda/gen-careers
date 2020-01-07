import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Muli:400,700&display=swap');

  * {
    box-sizing: border-box;
    font-family: 'Muli', sans-serif;
    margin: 0;
    outline: 0;
    padding: 0;
  }

  html, body, #root {
    background-color: #eee;
    height: 100%;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  table {
    background-color: #fff;
    border-collapse: collapse;
    border-radius: 1rem;
    box-shadow: 0px 5px 10px rgba(100,100,100,0.1);
    color: #555;
    margin-bottom: 2rem;
    padding: 0;
    width: 100%;
    table-layout: fixed;

    thead {
      box-shadow: 0px 5px 10px rgba(100,100,100,0.1);
    }

    caption {
      color: #fa4251;
      font-size: 1.5em;
      font-weight: bold;
      margin: 0.5em 0 0.75em;
    }

    tr {
      border-bottom: 1px solid #ddd;

      &:last-child {
        border-bottom: none;
      }
    }

    th,
    td {
      overflow-x: auto;
      padding: .75rem 2rem;
      text-align: left;
    }

    th {
      color: #fa4251;
      font-size: 1.25em;
    }
  }


  @media screen and (max-width: 600px) {
    table {
      border: 0;

      caption {
        font-size: 1.3em;
      }

      thead {
        border: none;
        clip: rect(0 0 0 0);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        width: 1px;
      }

      tr {
        border-bottom: 10px solid #ddd;
        display: block;
      }

      td {
        border-bottom: 1px solid #ddd;
        display: block;
        font-size: 0.8em;
        text-align: right;
      }

      td::before {
        content: attr(data-label);
        color: #fa4251;
        float: left;
        font-weight: bold;
        text-transform: uppercase;
      }

      td:last-child {
        border-bottom: 0;
      }
    }
  }
`;
