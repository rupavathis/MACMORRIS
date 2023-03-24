import React from 'react';
import { useEffect, useState } from "react";
// import async from 'react-select/dist/declarations/src/async';
import '../Network.scss';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import infoData from '../../Profile/ContentBar/Biography';
import { Link } from 'react-router-dom'
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

function Info({ info }) {
    console.log("info", { info })
    const [infoData, setInfoData] = useState([])

    useEffect(() => {
        async function fetchInfo() {
            if (info != null) {
                const connectionsRes = await fetch(`/info/connections/${info}`);
                const connectionsResJson = await connectionsRes.json();
                setInfoData(connectionsResJson)
                console.log("info json connectionsResJson", { connectionsResJson })

            }
        }
        fetchInfo()
    }, [info]);



    function createData(value1, value2, value3, value4, value5, value6) {
        return { value1, value2, value3, value4, value5, value6 };
    }

    const rows = infoData.map((conn) => createData(conn.id, conn.source_id?.macmorris_id, conn.source_id?.name,
        conn.target_id?.macmorris_id, conn.target_id?.name, [...new Set(conn.relationship_types.map((r) => r.name))].join(' / ')));
    // const rows = rows_duplicates.filter((item, index) => rows_duplicates(item) === index);



    console.log("info json", { infoData })

    return (
        <>
            <div>
                {/* Name: {infoData.display_name}
            Date of birth: {infoData.date_of_birth}
            Date of death: {infoData.date_of_death}
            Date of flourishing: {infoData.flourishing_date}
            Gender: {infoData.gender?.name}
            Attributes: {infoData.attribs?.map(a => a.name)}  */}
                <Card style={{ minWidth: '300px' }}>
                    <Card.Body>
                        <Card.Text>
                            <infoData infoData={infoData} />
                            <Table hover size="sm">
                                {rows.map((row) => (
                                    <>
                                        <tr style={{ justifyContent: 'space-between', display: 'flex' }}>
                                            <td>{row.name}</td>
                                            <td>
                                                <Link className='link' to={`/profile/${row.value2}`}>
                                                    {row.value3}
                                                </Link>
                                            </td>
                                            <td align='center'>{row.value6}</td>
                                            <td><Link className='link' to={`/profile/${row.value4}`}>
                                                {row.value5}
                                            </Link>
                                            </td>
                                        </tr>
                                    </>
                                ))}
                            </Table>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            {/* <div style={{ border: '1px solid gray', borderRadius: 10}}>
            <Table sx={{ minWidth: 150 }} size="small" aria-label="simple table">
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.value1}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell align="left">
                                <Link className='link' to={`/profile/${row.value2}`}>
                                    {row.value3}
                                </Link></TableCell>
                            <TableCell align='center'>{row.value6}</TableCell>
                            <TableCell align="right">
                                <Link className='link' to={`/profile/${row.value4}`}>
                                    {row.value5}
                                </Link></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div> */}
        </>
    )
}


export default Info;
