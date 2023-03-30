import React from 'react';
import { useEffect, useState, useMemo } from "react";
// import async from 'react-select/dist/declarations/src/async';
import '../Network.scss';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import InfoData from '../../Profile/ContentBar/Biography';
import { Link } from 'react-router-dom';
import { API_URL } from '../../constants';
import Button from 'react-bootstrap/Button';

function Info({ info, setClose, close }) {
    console.log("info", { info, setClose })
    const [infoData, setInfoData] = useState({})

    const fetchInfo = async () => {
        if (info != null) {
            let url = `${API_URL}/people/${info}`;
            console.log('infor', url)
            const res = await fetch(url);
            const infoJson = await res.json();
            console.log("useeffect", infoJson);
            setInfoData(infoJson)
        }
    }

    useEffect(() => {
        fetchInfo();
    }, [info])


    function createData(name, values) {
        if (name == "Date of death") {
            if (infoData.death_date_type?.name === null || infoData.death_date_type?.name === undefined) {
                if (infoData.date_of_death === undefined || infoData.date_of_death === null) return 0;
                else {
                    values = infoData.date_of_death;
                    return { name, values };
                }
            }
        }
        if (name == "Date of birth") {
            if (infoData.birth_date_type?.name === null || infoData.birth_date_type?.name === undefined) {
                if (infoData.date_of_birth === undefined || infoData.date_of_birth === null) return 0;
                else {
                    values = infoData.date_of_birth;
                    return { name, values };
                }
            }
        }
        if (name == "Date of flourishing") {
            if (infoData.flourishing_date_type?.name === null || infoData.flourishing_date_type?.name === undefined) {
                if (infoData.flourishing_date === undefined || infoData.flourishing_date === null) return 0;
                else {
                    values = infoData.flourishing_date;
                    return { name, values };
                }
            }
        }

        return { name, values };
    }


    const rows = useMemo(() => infoData.id != null ? [
        createData('First Name', infoData.first_name),
        createData('Last Name', infoData.last_name),
        createData('Aristocratic title', infoData.aristocratic_title),
        createData('Pseudonym', infoData.pseudonym),
        createData('Other names', infoData.other_names),
        createData('Name in religion', infoData.name_in_religion),
        createData('Gender', infoData.gender?.name),
        createData('Husband name ', infoData.husbands_name),
        createData('Maiden name ', infoData.maiden_name),
        createData('Religious Title ', infoData.religious_title),
        createData('Date of birth', infoData.birth_date_type?.name + ' ' + infoData.date_of_birth),
        createData('Date of death', infoData.death_date_type?.name + ' ' + infoData.date_of_death),
        createData('Date of flourishing', infoData.flourishing_date_type?.name + ' ' + infoData.flourishing_date),
        createData('Religious Order', infoData.religious_order_id),
        createData('Self described identity ', infoData.self_described_identity),
        createData('Nationality', infoData.nationality),
    ].filter((e) => e.values !== null) : []
        , [infoData])


    console.log("info json", { infoData })

    return (
        <div>
            {Object.keys(infoData).length > 0 && (
                <Card style={{ width: '300px' }}>
                    <Card.Body>
                        <Card.Title>
                            <Link
                                className='link'
                                to={`/profile/${infoData.macmorris_id}`}
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                {infoData.display_name}
                            </Link>
                        </Card.Title>
                        <Card.Subtitle className='mb-2 text-muted'>
                            {(Array.from(new Set(infoData.attribs?.map((a) => a.name))).join(' | '))}
                        </Card.Subtitle>
                        <hr />
                        <Card.Text>
                            {/* {infoData.length !=0 && <InfoData bioInfo={infoData} />} */}
                            <Table hover size='sm'>
                                {rows.map((row) => (
                                    <tr style={{ justifyContent: 'space-between', display: 'flex' }}>
                                        <td>{row.name}</td>
                                        <td>{row.values}</td>
                                    </tr>
                                ))}
                            </Table>
                            <Link
                                className='link'
                                to={`/Network?id=${infoData.id}`}
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                Learn about {infoData.display_name}'s network
                            </Link>
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

export default Info;
