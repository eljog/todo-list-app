import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { TodoItem } from '@todo-app/common'
import { getApiClient } from '../api';
import Alert from '@mui/material/Alert';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete'

const label = { inputProps: { 'aria-label': 'Todo completed or not' } };


export default function TodoLists(data: { todos: TodoItem[]; deleteTodo: (id: number) => {}}) {
  const { todos, deleteTodo } = data
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell align="right">Completed</TableCell>
            <TableCell align="right">Delete?</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {todos.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell align="right"><Checkbox {...label} checked={row.completed} /></TableCell>
              <TableCell align="right"><Button color='inherit' onClick={() => deleteTodo(row.id)} startIcon={<DeleteIcon />}>
              </Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
