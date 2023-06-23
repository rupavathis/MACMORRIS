import React, { useEffect, useMemo, useState } from "react";
import Container from "@mui/material/Container";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import WebLink from '@mui/material/Link';
import { Link } from "react-router-dom";
import { API_URL } from '../constants';


function Works() {
    console.log("hi", 5679045);


    const [workID, setWorkId] = useState(-1);
    const [works, setWorks] = useState({});


    useEffect(() => {
        console.log("In works page")

        if (document.URL.includes('/works')) {
            const url = document.URL;
            const id = url.substring(url.lastIndexOf('/') + 1);
            console.log(id, id);
            setWorkId(id);
        }
    }, [])

    const fetchWorks = async () => {
        console.log("hello", workID);
        if (workID !== -1) {
            console.log("hi");
            const workRes = await fetch(`${API_URL}/works/${workID}`);
            const workResJson = await workRes.json();
            console.log(workResJson);
            setWorks(workResJson);
        }
    }

    useEffect(() => {
        fetchWorks();
    }, [workID])



    function createData(name, value, id) {
        console.log(name, { value }, id)
        return { name, value, id }
    }

    const rows = useMemo(() => works.display_title != null ? [
        createData('Brief Title', works.display_title),
        createData('Author', works.author_id?.display_name, works.author_id?.macmorris_id),
        createData('Patron', works.patron_id.length > 0 ? works.patron_id : null),
        createData('Publisher', works.publisher_id.length > 0 ? works.publisher_id : null),
        createData('Printer', works.printer_id.length > 0 ? works.printer_id : null),
        createData('Bookseller', works.bookseller_id.length > 0 ? works.bookseller_id : null),
        createData('Language', works.languages.map(n => n.name).join('| ')),
        createData('Work Classification', works.work_classification?.map(w => w.name).join(' | ')),
        createData('Title', works.title),
        createData('Date', works.work_date),
        createData('Place', works.places.map(n => n.name).join(', ')),
        createData('Read the text', works.link_uri)
    ].filter(e => e.value != null) : [], [works])

    return (
        <div>
            <div className="top-panel">
                <Link to='/' href="index.html">
                    <img style={{
                        objectFit: 'contain', 'width': '200px', height: '80px', margin: '10px',
                        opacity: '0.8'
                    }} alt="" src="/images/logos/macmorris.png" />
                </Link>
            </div>
            <Container>
                <div style={{ marginTop: '30px' }}></div>
                <h2>Details of Work</h2>
                {works.length != 0 && <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="Details of works table">
                        <TableBody>
                            {rows.map((row) => {
                                return (
                                    <TableRow
                                        key={row.name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            <b>{row.name}</b>
                                        </TableCell>
                                        {row.name === "Read the text" && <TableCell align="right">
                                            <WebLink href={row.value}>{row.value}</WebLink>
                                        </TableCell>
                                        }
                                        {row.name === "Author" && <TableCell align="right">
                                            <Link to={`/profile/${row.id}`}>{row.value}</Link>

                                        </TableCell>
                                        }
                                        {/* {(row.name === "Patron" || row.name === "Printer" || row.name === "Publisher" || row.name === "Bookseller"
                                            || row.name === "Author") && <TableCell align="right">
                                                <Link to={`/profile/${row.macmorris_id}`}>{works.author_id.display_name.join(', ')}</Link>

                                            </TableCell>
                                        } */}
                                        {(row.name !== "Read the text" && row.name !== "Patron" && row.name !== "Printer" && row.name !== "Publisher" && row.name !== "Bookseller"
                                            && row.name !== "Author")
                                            && <TableCell align="right">
                                                {row.value}
                                            </TableCell>
                                        }

                                        {row.name === "Patron" && <TableCell align="right">
                                            {row.value?.map((p, index) =>
                                                <>
                                                    <Link to={`/profile/${p.macmorris_id}`}>{p.display_name}</Link>
                                                    {index < row.value.length - 1 && " | "}

                                                </>
                                            )}
                                        </TableCell>
                                        }
                                        {row.name === "Printer" && <TableCell align="right">
                                            {row.value?.map((p, index) =>
                                                <>
                                                    <Link to={`/profile/${p.macmorris_id}`}>{p.display_name}</Link>
                                                    {index < row.value.length - 1 && " | "}

                                                </>
                                            )}
                                        </TableCell>
                                        }
                                        {row.name === "Publisher" && <TableCell align="right">
                                            {row.value?.map((p, index) =>
                                                <>
                                                    <Link to={`/profile/${p.macmorris_id}`}>{p.display_name}</Link>
                                                    {index < row.value.length - 1 && " | "}

                                                </>
                                            )}
                                        </TableCell>
                                        }
                                        {row.name === "Bookseller" && <TableCell align="right">
                                            {row.value?.map((p, index) =>
                                                <>
                                                    <Link to={`/profile/${p.macmorris_id}`}>{p.display_name}</Link>
                                                    {index < row.value.length - 1 && " | "}

                                                </>
                                            )}
                                        </TableCell>
                                        }

                                    </TableRow>
                                )
                            })}

                        </TableBody>
                    </Table>
                </TableContainer>}
            </Container>
        </div>
    );
}

export default Works;
