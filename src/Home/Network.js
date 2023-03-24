import React, { useRef } from 'react';
import { ForceGraph3D } from 'react-force-graph';

function Home() {
    const { useEffect, useRef } = React;

    const data = {
        "nodes": [
            {
                "id": "James fitz Maurice Fitzgerald",
                "people_id": 1,
                "batch": "node1",
                "color": "#F30B12",
                "size": 200,
                "fontSize": 10
            },
            {
                "id": "Máire Óg inghean Mheic Chárthaigh",
                "people_id": 6,
                "batch": "node1Targets",
                "color": "#e2aa56",
                "size": 80,
                "fontSize": 10
            },
            {
                "id": "Henry VIII",
                "people_id": 59,
                "batch": "node1Targets",
                "color": "#e2aa56",
                "size": 80,
                "fontSize": 10
            },
            {
                "id": "James Butler",
                "people_id": 28,
                "batch": "node1Targets",
                "color": "#e2aa56",
                "size": 80,
                "fontSize": 10
            },
            {
                "id": "Leonard Grey",
                "people_id": 4,
                "batch": "node1Targets",
                "color": "#e2aa56",
                "size": 80,
                "fontSize": 10
            },
            {
                "id": "James FitzJohn Fitzgerald",
                "people_id": 102,
                "batch": "node1Targets",
                "color": "#e2aa56",
                "size": 80,
                "fontSize": 10
            },
            {
                "id": "Gearóid Mac Gearailt",
                "people_id": 381,
                "batch": "nodes2",
                "color": "#F30B12",
                "size": 60,
                "fontSize": 10
            },
            {
                "id": "Brian (mac Cathaoir) Ó Conchubhair Failghe",
                "people_id": 117,
                "batch": "nodes2",
                "color": "#F30B12",
                "size": 60,
                "fontSize": 10
            },
            {
                "id": "Conn Bacach Ó Néill",
                "people_id": 112,
                "batch": "nodes2",
                "color": "#F30B12",
                "size": 60,
                "fontSize": 10
            },
            {
                "id": "Maghnus (mac Aodha Dhuibh) Ó Domhnaill",
                "people_id": 152,
                "batch": "nodes2",
                "color": "#F30B12",
                "size": 60,
                "fontSize": 10
            },
            {
                "id": "John Alen",
                "people_id": 123,
                "batch": "nodes2",
                "color": "#F30B12",
                "size": 60,
                "fontSize": 10
            },
            {
                "id": "Gerald Aylmer",
                "people_id": 116,
                "batch": "nodes2",
                "color": "#F30B12",
                "size": 60,
                "fontSize": 10
            },
            {
                "id": "George Paulet",
                "people_id": 61,
                "batch": "nodes2",
                "color": "#F30B12",
                "size": 60,
                "fontSize": 10
            },
            {
                "id": "Anthony St Leger",
                "people_id": 113,
                "batch": "nodes2",
                "color": "#F30B12",
                "size": 60,
                "fontSize": 10
            },
            {
                "id": "Thomas Cromwell",
                "people_id": 62,
                "batch": "nodes2",
                "color": "#F30B12",
                "size": 60,
                "fontSize": 10
            },
            {
                "id": "Thomas Howard",
                "people_id": 51,
                "batch": "nodes2",
                "color": "#F30B12",
                "size": 60,
                "fontSize": 10
            },
            {
                "id": "Elizabeth Grey",
                "people_id": 2973,
                "batch": "nodes2",
                "color": "#F30B12",
                "size": 60,
                "fontSize": 10
            },
            {
                "id": "Donnchadh Ó Briain",
                "people_id": 83,
                "batch": "nodes2",
                "color": "#F30B12",
                "size": 60,
                "fontSize": 10
            },
            {
                "id": "Séamas (mac Muiris) Mac Gearailt",
                "people_id": 300,
                "batch": "nodes2",
                "color": "#F30B12",
                "size": 60,
                "fontSize": 10
            },
            {
                "id": "James Eustace",
                "people_id": 379,
                "batch": "nodes2",
                "color": "#F30B12",
                "size": 60,
                "fontSize": 10
            },
            {
                "id": "Margaret Butler",
                "people_id": 5,
                "batch": "nodes2",
                "color": "#F30B12",
                "size": 60,
                "fontSize": 10
            },
            {
                "id": "Thomas Butler",
                "people_id": 683,
                "batch": "nodes2",
                "color": "#F30B12",
                "size": 60,
                "fontSize": 10
            },
            {
                "id": "Joan Butler",
                "people_id": 30,
                "batch": "nodes2",
                "color": "#F30B12",
                "size": 60,
                "fontSize": 10
            },
            {
                "id": "John Butler",
                "people_id": 897,
                "batch": "nodes2",
                "color": "#F30B12",
                "size": 60,
                "fontSize": 10
            },
            {
                "id": "Robert Cowley",
                "people_id": 29,
                "batch": "nodes2",
                "color": "#F30B12",
                "size": 60,
                "fontSize": 10
            },
            {
                "id": "Walter Cowley",
                "people_id": 46,
                "batch": "nodes2",
                "color": "#F30B12",
                "size": 60,
                "fontSize": 10
            },
            {
                "id": "William Brabazon",
                "people_id": 47,
                "batch": "nodes2",
                "color": "#F30B12",
                "size": 60,
                "fontSize": 10
            },
            {
                "id": "Giolla Pádraig Ó Mórdha",
                "people_id": 75,
                "batch": "nodes2",
                "color": "#F30B12",
                "size": 60,
                "fontSize": 10
            },
            {
                "id": "Katherine Butler",
                "people_id": 105,
                "batch": "nodes2",
                "color": "#F30B12",
                "size": 60,
                "fontSize": 10
            },
            {
                "id": "Mór inghean Uí Chearbhaill",
                "people_id": 103,
                "batch": "nodes2",
                "color": "#F30B12",
                "size": 60,
                "fontSize": 10
            },
            {
                "id": "Gearóid (mac Séamais) Mac Gearailt",
                "people_id": 359,
                "batch": "nodes2",
                "color": "#F30B12",
                "size": 60,
                "fontSize": 10
            },
            {
                "id": "Seaán (mac Séamais) Mac Gearailt",
                "people_id": 347,
                "batch": "nodes2",
                "color": "#F30B12",
                "size": 60,
                "fontSize": 10
            },
            {
                "id": "Maurice FitzJohn",
                "people_id": 60,
                "batch": "nodes2",
                "color": "#F30B12",
                "size": 60,
                "fontSize": 10
            },
            {
                "id": "Edward VI",
                "people_id": 81,
                "batch": "nodes2",
                "color": "#F30B12",
                "size": 60,
                "fontSize": 10
            },
            {
                "id": "Edward Bellingham",
                "people_id": 40,
                "batch": "nodes2",
                "color": "#F30B12",
                "size": 60,
                "fontSize": 10
            },
            {
                "id": "Muircheartach Ó Briain",
                "people_id": 43,
                "batch": "nodes2",
                "color": "#F30B12",
                "size": 60,
                "fontSize": 10
            },
            {
                "id": "James Croft",
                "people_id": 410,
                "batch": "nodes2",
                "color": "#F30B12",
                "size": 60,
                "fontSize": 10
            },
            {
                "id": "Thomas Radcliffe",
                "people_id": 369,
                "batch": "nodes2",
                "color": "#F30B12",
                "size": 60,
                "fontSize": 10
            },
            {
                "id": "Eibhilín inghean Mheic Charthaigh",
                "people_id": 94,
                "batch": "nodes2",
                "color": "#F30B12",
                "size": 60,
                "fontSize": 10
            },
            {
                "id": "Maurice Roche",
                "people_id": 505,
                "batch": "nodes2",
                "color": "#F30B12",
                "size": 60,
                "fontSize": 10
            },
            {
                "id": "Siobhán inghean de Róiste",
                "people_id": 627,
                "batch": "nodes2",
                "color": "#F30B12",
                "size": 60,
                "fontSize": 10
            },
            {
                "id": "Tomás (mac Séamais) Mac Gearailt",
                "people_id": 628,
                "batch": "nodes2",
                "color": "#F30B12",
                "size": 60,
                "fontSize": 10
            },
            {
                "id": "Catherine Fitzgerald",
                "people_id": 1552,
                "batch": "nodes2",
                "color": "#F30B12",
                "size": 60,
                "fontSize": 10
            }
        ],
        "links": [
            {
                "source": "James fitz Maurice Fitzgerald",
                "target": "Máire Óg inghean Mheic Chárthaigh"
            },
            {
                "source": "James fitz Maurice Fitzgerald",
                "target": "Henry VIII"
            },
            {
                "source": "James fitz Maurice Fitzgerald",
                "target": "James Butler"
            },
            {
                "source": "James fitz Maurice Fitzgerald",
                "target": "Leonard Grey"
            },
            {
                "source": "James fitz Maurice Fitzgerald",
                "target": "James FitzJohn Fitzgerald"
            },
            {
                "source": "Leonard Grey",
                "target": "Gearóid Mac Gearailt"
            },
            {
                "source": "Leonard Grey",
                "target": "Brian (mac Cathaoir) Ó Conchubhair Failghe"
            },
            {
                "source": "Leonard Grey",
                "target": "Conn Bacach Ó Néill"
            },
            {
                "source": "Leonard Grey",
                "target": "Maghnus (mac Aodha Dhuibh) Ó Domhnaill"
            },
            {
                "source": "Leonard Grey",
                "target": "John Alen"
            },
            {
                "source": "Leonard Grey",
                "target": "Gerald Aylmer"
            },
            {
                "source": "Leonard Grey",
                "target": "George Paulet"
            },
            {
                "source": "Leonard Grey",
                "target": "Anthony St Leger"
            },
            {
                "source": "Leonard Grey",
                "target": "Thomas Cromwell"
            },
            {
                "source": "Leonard Grey",
                "target": "Thomas Howard"
            },
            {
                "source": "Leonard Grey",
                "target": "Elizabeth Grey"
            },
            {
                "source": "Leonard Grey",
                "target": "Donnchadh Ó Briain"
            },
            {
                "source": "Leonard Grey",
                "target": "Séamas (mac Muiris) Mac Gearailt"
            },
            {
                "source": "Leonard Grey",
                "target": "James Eustace"
            },
            {
                "source": "James Butler",
                "target": "Margaret Butler"
            },
            {
                "source": "James Butler",
                "target": "Henry VIII"
            },
            {
                "source": "James Butler",
                "target": "Brian (mac Cathaoir) Ó Conchubhair Failghe"
            },
            {
                "source": "James Butler",
                "target": "Leonard Grey"
            },
            {
                "source": "James Butler",
                "target": "Anthony St Leger"
            },
            {
                "source": "James Butler",
                "target": "Thomas Butler"
            },
            {
                "source": "James Butler",
                "target": "Joan Butler"
            },
            {
                "source": "James Butler",
                "target": "John Butler"
            },
            {
                "source": "James Butler",
                "target": "Robert Cowley"
            },
            {
                "source": "James Butler",
                "target": "Walter Cowley"
            },
            {
                "source": "James Butler",
                "target": "William Brabazon"
            },
            {
                "source": "James Butler",
                "target": "Giolla Pádraig Ó Mórdha"
            },
            {
                "source": "James Butler",
                "target": "Katherine Butler"
            },
            {
                "source": "James FitzJohn Fitzgerald",
                "target": "James fitz Maurice Fitzgerald"
            },
            {
                "source": "James FitzJohn Fitzgerald",
                "target": "Mór inghean Uí Chearbhaill"
            },
            {
                "source": "James FitzJohn Fitzgerald",
                "target": "Gearóid (mac Séamais) Mac Gearailt"
            },
            {
                "source": "James FitzJohn Fitzgerald",
                "target": "Seaán (mac Séamais) Mac Gearailt"
            },
            {
                "source": "James FitzJohn Fitzgerald",
                "target": "James Butler"
            },
            {
                "source": "James FitzJohn Fitzgerald",
                "target": "Joan Butler"
            },
            {
                "source": "James FitzJohn Fitzgerald",
                "target": "Leonard Grey"
            },
            {
                "source": "James FitzJohn Fitzgerald",
                "target": "Gearóid Mac Gearailt"
            },
            {
                "source": "James FitzJohn Fitzgerald",
                "target": "Maurice FitzJohn"
            },
            {
                "source": "James FitzJohn Fitzgerald",
                "target": "Anthony St Leger"
            },
            {
                "source": "James FitzJohn Fitzgerald",
                "target": "Henry VIII"
            },
            {
                "source": "James FitzJohn Fitzgerald",
                "target": "Edward VI"
            },
            {
                "source": "James FitzJohn Fitzgerald",
                "target": "Edward Bellingham"
            },
            {
                "source": "James FitzJohn Fitzgerald",
                "target": "Muircheartach Ó Briain"
            },
            {
                "source": "James FitzJohn Fitzgerald",
                "target": "Donnchadh Ó Briain"
            },
            {
                "source": "James FitzJohn Fitzgerald",
                "target": "James Croft"
            },
            {
                "source": "James FitzJohn Fitzgerald",
                "target": "Thomas Radcliffe"
            },
            {
                "source": "James FitzJohn Fitzgerald",
                "target": "Thomas Butler"
            },
            {
                "source": "James FitzJohn Fitzgerald",
                "target": "Eibhilín inghean Mheic Charthaigh"
            },
            {
                "source": "James FitzJohn Fitzgerald",
                "target": "Katherine Butler"
            },
            {
                "source": "James FitzJohn Fitzgerald",
                "target": "Maurice Roche"
            },
            {
                "source": "James FitzJohn Fitzgerald",
                "target": "Siobhán inghean de Róiste"
            },
            {
                "source": "James FitzJohn Fitzgerald",
                "target": "Tomás (mac Séamais) Mac Gearailt"
            },
            {
                "source": "James FitzJohn Fitzgerald",
                "target": "Catherine Fitzgerald"
            }
        ]
    }

    const distance = 200;

    const fgRef = useRef();

    useEffect(() => {
        let animId;
        console.log("network-dh12: inside network useeffect")
        if (fgRef?.current != null) {
            console.log("network-dh12: fgref null?", fgRef == null);
            console.log("network-dh12: fgref current null?", fgRef.current == null);

            fgRef.current.cameraPosition({ z: distance });
            // fgRef.current.zoomToFit(200)

            // camera orbit
            let angle = 0;
            animId = setInterval(() => {
                fgRef.current.cameraPosition({
                    x: distance * Math.sin(angle),
                    z: distance * Math.cos(angle)
                });
                angle += Math.PI / 3000;
            }, 10);
        }

        return () => {
            // ondestroy
            if (animId != null)
                animId = clearInterval(animId);
        };
    }, [fgRef]);

    const GROUPS = 5;

    return (
        <ForceGraph3D
            ref={fgRef}
            graphData={data}
            enableNavigationControls={false}
            showNavInfo={false}
            width={700}
            height={500}
            backgroundColor="white"
            nodeAutoColorBy={d => d.val % GROUPS}
            linkColor={((data) => data.linkColor = "black")}
            onNodeDragEnd={node => {
                node.fx = node.x;
                node.fy = node.y;
                node.fz = node.z;
            }}
        // warmupTicks={50}
        // cooldownTicks={1}
        // onEngineStop={() => fgRef.current.zoomToFit(400)}
        />
    );
}

export default Home;
