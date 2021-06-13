import React, {useState} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckIcon from '@material-ui/icons/Check';
import {TextField} from "@material-ui/core";


export default function MeetsTable({data, header, removeMeet, editeMeet}) {

    const [editId, setEditId] = useState('')
    const [nameMeet, setNameMeet] = useState('')


    return (
        <TableContainer component={Paper}>
            <Table size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        {
                            header.map((x, i) => {
                                return <TableCell key={i}>{x.name}</TableCell>
                            })
                        }
                        <TableCell/>
                        <TableCell/>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell component="th" scope="row">
                                {row.id}
                            </TableCell>
                            <TableCell>{editId === row.id ?
                                <TextField name={row.lastName} value={nameMeet} onChange={(e) => {
                                    setNameMeet(e.target.value)
                                }}/> : row.nameMeet}</TableCell>
                            <TableCell>
                                {
                                    editId === row.id
                                        ?
                                        <CheckIcon onClick={() => {
                                            editeMeet(row.id, nameMeet)
                                            setEditId('')
                                            setNameMeet('')
                                        }}/>
                                        :
                                        <EditIcon onClick={() => setEditId(row.id)} />
                                }
                            </TableCell>
                            <TableCell><DeleteIcon onClick={() => removeMeet(row.id)}/></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}