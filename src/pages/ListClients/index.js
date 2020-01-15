import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';

import Header from '../../components/Header';

import api from '../../services/api';

const useStyles = makeStyles({
  table: {
   width: '100%',
   margin: '0 auto'
  },
  tableContainer: {
    width: '50%',
    margin: '0 auto'
  },
  formControl: {
    minWidth: 100,
    marginTop: '10px'
  }
});

export default function ListClients() {
const defaultUrl = 'clients';
const [clients, setClients] = useState([]);
const [name, setName ] = useState('');


const loadClients = async (url) => {
  const response = await api.get(url);
 setClients(response.data);
}

  useEffect(() => {
      if (name !== '') {
        loadClients(`clients?name=${name}`)
      } else {
        loadClients(defaultUrl)
      }
  },[name]);

  const handleChange = event => {
    setName(event.target.value);
  };

  const classes = useStyles();


  return (
    <>
      <Header />

      <TableContainer className={classes.tableContainer}>
        <FormControl className={classes.formControl}>
          <TextField id="standard-search" label="Search Name" type="search" onChange={handleChange} />
        </FormControl>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {clients.map(client => (
              <TableRow key={client._id}>
                <TableCell>
                  {client._id}
                </TableCell>
                <TableCell>{client.name}</TableCell>
                <TableCell>{client.email}</TableCell>
              </TableRow>
          ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
