import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import WebLink from '@mui/material/Link';
import { Link } from "react-router-dom";


function Works() {

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


    useEffect(() => {
        (async () => {
            console.log("hello");
            if (workID !== -1) {
                console.log("hi");
                const workRes = await fetch(`/works/${workID}`);
                const workResJson = await workRes.json();
                console.log(workResJson);
                setWorks(workResJson);

            }

        })();
    }, [workID])


    function createData(name, value, id) {
        console.log(name, id)
        return { name, value, id }
    }

    const rows = [
        createData('Brief Title', works.display_title),
        createData('Author', works.author_id?.display_name, works.author_id_id),
        createData('Language', works.languages.map(n => n.name).join(', ')),
        createData('Work Classification', works.work_classification?.reduce((deletedData, name) => deletedData.concat(`${name.name}`), '')),
        createData('Title', works.title),
        // createData('Patron', works.patron_id.map(n => n.display_name).join(', ')),
        // // createData('Patron', works.patron_id?.reduce((deletedData, name) => deletedData.concat(`${name.display_name}`), ''), 
        // //      works.patron_id?.reduce((deletedData, id) => deletedData.concat(`${id.id}`), '')),
        // createData('Printer', works.printer_id?.reduce((deletedData, name) => deletedData.concat(`${name.display_name}`), ''), 
        //     works.printer_id?.reduce((deletedData, id) => deletedData.concat(`${id.id}`), '')),
        // createData('Publisher', works.publisher_id?.reduce((deletedData, name) => deletedData.concat(`${name.display_name}`), ''),
        //     works.publisher_id?.reduce((deletedData, id) => deletedData.concat(`${id.id}`), '')),
        // createData('Bookseller', works.bookseller_id?.reduce((deletedData, name) => deletedData.concat(`${name.display_name}`), ''), 
        //     works.bookseller_id?.reduce((deletedData, id) => deletedData.concat(`${id.id}`), '')),
        createData('Date', works.work_date),
        createData('Place', works.places.map(n => n.name).join(', ')),
        createData('Read the text', works.link_uri)
    ].filter((e) => e.values !== null)

    return (
        <div>
            <Container>
                <h2>Details of Work</h2>
                <TableContainer component={Paper}>
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
                                        {(row.name === "Patron" || row.name === "Printer" || row.name === "Publisher" || row.name === "Bookseller" 
                                        || row.name === "Author") && <TableCell align="right">
                                            <Link to={`/profile/${row.id}`}>{works.patron_id.map(n => n.display_name).join(', ')}</Link>
                                        </TableCell>
                                        }
                                        {(row.name !== "Read the text" && row.name !== "Patron" && row.name !== "Printer" && row.name !== "Publisher" && row.name !== "Bookseller" 
                                        && row.name !== "Author") 
                                         && <TableCell align="right">
                                            {row.value}
                                        </TableCell>
                                        }

                                    </TableRow>
                                )
                            })}

                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </div>
    );
}

export default Works;