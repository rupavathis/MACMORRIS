import React from 'react';
import { useEffect, useState } from "react";
// import async from 'react-select/dist/declarations/src/async';
import '../Network.scss';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import InfoData from '../../Profile/ContentBar/Biography';
import { Link } from 'react-router-dom'
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { API_URL } from '../../constants';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';


function Info({ info, setClose, close }) {
    console.log("info", { info })
    const [infoData, setInfoData] = useState([])

    useEffect(() => {
        async function fetchInfo() {
            if (info != null) {
                const connectionsRes = await fetch(`${API_URL}/info/connections/${info}`);
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
                <Card style={{ maxWidth: '500px' }}>
                    <Card.Body>
                        <Card.Text>
                            <InfoData infoData={infoData} />
                            <Table hover size="sm" style={{ margin: 0 }}>
                                {rows.map((row) => (
                                    <>
                                        <tr style={{ justifyContent: 'space-between', display: 'flex' }}>
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
                                            <td>
                                                <IconButton
                                                    sx={{ "&:hover": { color: "red" } }}
                                                    size="small"
                                                    aria-label="close"
                                                    color="inherit"
                                                    onClick={() => setClose(false)}
                                                >
                                                    <CloseIcon fontSize="small" />
                                                </IconButton>
                                            </td>
                                        </tr>

                                    </>
                                ))}
                            </Table>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}


export default Info;
