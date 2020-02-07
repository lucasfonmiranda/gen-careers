import React, { useState, useEffect } from 'react';
import api from '~services/api';
import { TransactionsList, Selectors, Container } from './styles';

// import Option from '@material-ui/core/Option';
import { Select } from 'antd';
const { Option } = Select;

// import Select from '@material-ui/core/Select';

export default function Transactions() {
  const [transactions, setTransaction] = useState([]);
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [nameList, setNameList] = useState([]);
  const [typeList, setTypeList] = useState([]);

  useEffect(() => {
    async function loadTransactions() {
      let filter = name ? `name_client=${name}` : '';
      filter += type ? `&type=${type}` : '';
      const response = await api.get(`transactions?${filter}`);

      const data = response.data;

      data.forEach(item => {
        if (!nameList.includes(item.name_client)) {
          nameList.push(item.name_client);

          setNameList(nameList);
        }

        if (!typeList.includes(item.type)) {
          typeList.push(item.type);

          setTypeList(typeList);
        }
      });

      setTransaction(data);
    }
    loadTransactions();
    // eslint-disable-next-line
  }, [name, type]);
  const filterSelects = (input, option) =>
    option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;

  return (
    <>
      <Container>
        <Selectors>
          <h3>Search by Client name</h3>
          <Select
            showSearch
            labelId="Client_Name"
            id="Client_name"
            value={name}
            onChange={e => setName(e)}
            placeholder="Search"
            filterOption={filterSelects}
          >
            <Option value={''}>None</Option>
            {nameList.map(name_client => (
              <Option key={name_client} value={name_client}>
                {name_client}
              </Option>
            ))}
          </Select>

          <h3>Search by Transaction type</h3>
          <Select
            showSearch
            labelId="Client_Name"
            id="Client_name"
            value={type}
            onChange={e => setType(e)}
            filterOption={filterSelects}
          >
            <Option value={''}>None</Option>
            {typeList.map(type => (
              <Option key={type} value={type}>
                {type}
              </Option>
            ))}
          </Select>
        </Selectors>

        <TransactionsList>
          {transactions.map(transaction => (
            <li key={transaction._id}>
              <p>Origin Client id: {transaction.origin_client_id}</p>
              <p>Origin Client name: {transaction.name_client}</p>
              <p>Type: {transaction.type}</p>
              <p>Destination Client id: {transaction.destionation_client_id}</p>
              <p>Value {transaction.value}</p>
            </li>
          ))}
        </TransactionsList>
      </Container>
    </>
  );
}
