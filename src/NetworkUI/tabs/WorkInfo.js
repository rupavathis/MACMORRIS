import React from 'react';
import { useEffect, useState, useMemo } from "react";
// import async from 'react-select/dist/declarations/src/async';
import '../Network.scss';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import { API_URL } from '../../constants';
import Button from 'react-bootstrap/Button';

function WorkInfo({ info, setClose, close }) {
    console.log("info", { info, setClose })
    const [workInfo, setWorkInfo] = useState({})

    useEffect(() => {
       fetchWorks();
    }, [])

   const fetchWorks = async () => {
        console.log("hello", info);
        if (info !== null) {
            console.log("hi", info);
            const workRes = await fetch(`${API_URL}/works/${info}`);
            const workResJson = await workRes.json();
            console.log(workResJson);
            setWorkInfo(workResJson);
        }
    }

    function createData(name, value) {
        return { name, value }
    }

    const rows = useMemo(() => workInfo.display_title != null ? [
        createData('Language', workInfo.languages.map(n => n.name).join(', ')),
        createData('Classification', workInfo.work_classification?.reduce((deletedData, name) => deletedData.concat(`${name.name}`), '')),
    ].filter((e) => e.value !== null) : []
    , [workInfo])
        
   

    return (
        <div>
            {Object.keys(workInfo).length > 0 && (
                <Card style={{ width: '300px' }}>
                    <Card.Body>
                        <Card.Title>
                            <Link
                                className='link'
                                to={`/works/${workInfo.id}`}
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                {workInfo.display_title}
                            </Link>
                        </Card.Title>
                        <Card.Text>
                            {console.log(rows)}
                            {/* {infoData.length !=0 && <InfoData bioInfo={infoData} />} */}
                            <Table hover size='sm'>
                                <tbody>
                                {rows.map((row, i) => (
                                    <tr key={i} style={{ justifyContent: 'space-between', display: 'flex' }}>
                                        <td>{row.name}</td>
                                        <td>{row.value}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </Table>
                        </Card.Text>
                        
                        <Button variant='outline-primary' onClick={() => setClose(false)}>
                            Close
                        </Button>
                    </Card.Body>
                </Card>
            )}
        </div>
    );

}

export default WorkInfo;
