import React from 'react';
import { useEffect, useState, useMemo } from "react";
// import async from 'react-select/dist/declarations/src/async';
import '../Network.scss';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import { API_URL } from '../../constants';
import Button from 'react-bootstrap/Button';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';

function Person({ person }) {
    return <Link className='link' to={`/profile/${person.macmorris_id}`}>
        {person.name}
    </Link>
}

function Work({ work }) {
    return <Link className='link' to={`/works/${work.id}`}>
        {work.display_title}
    </Link>
}

function Resource({ resource }) {
    if (resource.type === "work")
        return <Work work={resource} />
    if (resource.type === "person")
        return <Person person={resource} />
}

function WorkInfoLink({ setClose, info }) {
    const [workInfo, setWorkInfo] = useState({})
    const [source, setSource] = useState([])
    const [target, setTarget] = useState([])

    useEffect(() => {
        fetchData();
    }, [info])

    const fetchPeople = async (id, setFn) => {
        const peopleRes = await fetch(`${API_URL}/people/${id}`);
        const peopleJson = await peopleRes.json();
        console.log("person fetched", peopleJson)
        setFn({ ...peopleJson, type: 'person' })
    }
    const fetchWork = async (id, setFn) => {
        const workRes = await fetch(`${API_URL}/works/${id}`);
        const workResJson = await workRes.json();
        console.log("work fetched", workResJson)
        setFn({ ...workResJson, type: 'work' })
    }

    const fetchData = async () => {
        // [info.source, info.target].forEach(o => {
        //     if (o.type === 'people') fetchPeople(o.uid);
        //     if (o.type === 'work') fetchWork(o.uid);
        // });

        if (info.source.type === 'people') fetchPeople(info.source.uid, setSource);
        if (info.source.type === 'work') fetchWork(info.source.uid, setSource);
        if (info.target.type === 'people') fetchPeople(info.target.uid, setTarget);
        if (info.target.type === 'work') fetchWork(info.target.uid, setTarget);

        // if (source.type === "people") {
        //     const peopleRes = await fetch(`${API_URL}/people/${source.id}`);
        //     const peopleJson = await peopleRes.json();
        //     console.log("am i okay", peopleJson)
        //     setPeople(peopleJson)
        // }
        // if (target.type === "people") {
        //     const peopleRes = await fetch(`${API_URL}/people/${target.id}`);
        //     const peopleJson = await peopleRes.json();
        //     console.log("am i okay", peopleJson)
        //     setPeople(peopleJson)
        // }
        // if (source.type === "work") {
        //     const workRes = await fetch(`${API_URL}/works/${source.id}`);
        //     const workResJson = await workRes.json();
        //     console.log("am i okay", workResJson)
        //     setWorks(workResJson)
        // }
        // if (target.type === "work") {
        //     const workRes = await fetch(`${API_URL}/works/${target.id}`);
        //     const workResJson = await workRes.json();
        //     console.log("am i okay", workResJson)
        //     setWorks(workResJson)
        // }
    }

    function createData(name, value) {
        return { name, value }
    }

    return (
        <>
            <div>
                <Card style={{ maxWidth: '500px' }}>
                    <Card.Body>
                        <Card.Text>
                            <Table hover size="sm">
                                <tr style={{ justifyContent: 'space-between', display: 'flex' }}>
                                    <td>
                                        <Resource resource={source} />
                                    </td>
                                    {/* <td align='center'>Author/ Patron/ Printer/ Publisher of</td> */}
                                    <td align='center'> related to </td>
                                    <td>
                                        <Resource resource={target} />
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
                            </Table>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}


export default WorkInfoLink;
