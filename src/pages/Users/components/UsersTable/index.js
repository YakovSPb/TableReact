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


export default function UsersTable({data, header, removeUser, editeUser, withBirth}) {

    const [editId, setEditId] = useState('')
    const [lastName, setLastName] = useState('')
    const [firstName, setFirstName] = useState('')
    const [patronymic, setPatronymic] = useState('')


    const newData = withBirth ? data.filter(u=> u.idMeet === 'Yj12345') : data

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
                    {newData.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell component="th" scope="row">
                                {row.id}
                            </TableCell>
                            <TableCell>{editId === row.id ?
                                <TextField name={row.lastName} value={lastName} onChange={(e) => {
                                    setLastName(e.target.value)
                                }}/> : row.lastName}</TableCell>
                            <TableCell>{editId === row.id ?
                                <TextField name={row.firstName} value={firstName} onChange={(e) => {
                                    setFirstName(e.target.value)
                                }}/> : row.firstName}</TableCell>
                            <TableCell>{editId === row.id ?
                                <TextField name={row.patronymic} value={patronymic} onChange={(e) => {
                                    setPatronymic(e.target.value)
                                }}/> : row.patronymic}</TableCell>
                            <TableCell>
                                {
                                    editId === row.id
                                        ?
                                    <CheckIcon onClick={() => {
                                    editeUser(row.id, lastName, firstName, patronymic)
                                    setEditId('')
                                    setLastName('')
                                    setFirstName('')
                                    setPatronymic('')
                                }}/>
                                    :
                                    <EditIcon onClick={() => setEditId(row.id)} />
                                }
                            </TableCell>
                            <TableCell><DeleteIcon onClick={() => removeUser(row.id)}/></TableCell>
                        </TableRow>

                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}