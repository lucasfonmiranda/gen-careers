import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import Header from '../../components/Header';

import api from '../../services/api';

const useStyles = makeStyles({
  table: {
   width: '100%',
   margin: '0 auto'
  },
  formControl: {
    minWidth: 150,
  },
  tableContainer: {
    width: '50%',
    margin: '0 auto'
  }
});

export default function ListTrasactions() {
const defaultUrl = 'transactions';
const [transaction, setTransactions] = useState([])
const [paymentService, setPaymentService] = useState('');
const [paymentServices, setPaymentServices ] = useState([])

  const  loadTransactions = async (url) => {
    const response = await api.get(url);
    setTransactions(response.data);
  }

  useEffect(() => {
    if (paymentService !== '') {

      loadTransactions(`transactions?paymentServiceId=${paymentService}`)
    } else {
      loadTransactions(defaultUrl)
    }
  },[paymentService]);

  useEffect(() => {
    async function loadPaymentService(){
      const response = await api.get('payment_services');
      setPaymentServices(response.data);

    }
    loadPaymentService()
  }, []);

  const classes = useStyles();

  const handleChange = event => {
    setPaymentService(event.target.value);

  };

  return (
    <>
      <Header />

      <TableContainer className={classes.tableContainer}>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Payment Service</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select-outline"
            value={paymentService}
            onChange={handleChange}
          >
            {paymentServices.map(item => (
              <MenuItem key={item._id} value={item._id}>{item.name}</MenuItem>
          ))}

          </Select>
        </FormControl>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Client</TableCell>
              <TableCell>Product</TableCell>
              <TableCell>Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transaction.map(trans => (
              <TableRow key={trans.name}>
                <TableCell component="th" scope="row">
                  {trans._id}
                </TableCell>
                <TableCell>{trans.client.name}</TableCell>
                <TableCell>{trans.name}</TableCell>
                <TableCell>{trans.amount}</TableCell>
              </TableRow>
          ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
