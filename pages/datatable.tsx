import React, {useEffect, useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import jsonReader from './api/jsonHandler';

export type Table = {
  name: string,
  design: number,
  technology: number,
  safety: number,
  price: number,
}

export type Props = {
  picked: string
}

function createData(
  id: string,
  name: string,
  design: number,
  technology: number,
  safety: number,
  price: number,
) {
  return { id, name, design, technology, safety, price };
}

export default function DataTable(props:Props) {
  const {picked} = props
  const [rows, setRows] = useState<Array<Table>>([]);

  useEffect(() => {
    const data = jsonReader()[0]['company'];
    const companies = Object.keys(data);
    const rows = companies.map((d) => createData(
        data[d],
        data[d].name,
        data[d].reputation[0],
        data[d].reputation[1],
        data[d].reputation[2],
        data[d].reputation[3],
      )
    )
    setRows(rows);
  }, [])

  return (
    <TableContainer component={Paper} sx={{margin:"3ch", paddingRight:"3px"}}>
      <Table sx={{ minWidth: 600 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="center">デザイン</TableCell>
            <TableCell align="center">安全性</TableCell>
            <TableCell align="center">テクノロジー</TableCell>
            <TableCell align="center">価格</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.design}</TableCell>
              <TableCell align="center">{row.safety}</TableCell>
              <TableCell align="center">{row.technology}</TableCell>
              <TableCell align="center">{row.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}