import { useEffect, useRef, useState } from "react";
import { Graph } from "react-d3-graph";
import './core.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Graph3D from "./Graph3D";
import Filter from "../../tabs/Filter";
import Graph2DForce from "./Graph2DForce";


const uniqueNodes = (nodes) => {
    const uniqueIds = [];
    return nodes.filter(element => {
        const isDuplicate = uniqueIds.includes(element.uid);

        if (!isDuplicate) {
            uniqueIds.push(element.uid);
            return true;
        }

        return false;
    });
}

const People = ({ networkData, settings, tab, setTab, secondDegree, threeD, show3DText, displayNames, zoom, setFgRef, searchID }) => {
    console.log({ networkData, tab, displayNames, searchID })

    const [nodes, setNodes] = useState([]);
    const [links, setLinks] = useState([]);
    const [noResults, setNoResults] = useState(false);


    const displayNamesHm = displayNames.reduce((obj, item) => Object.assign(obj, { [item.id]: item }), {})


    useEffect(() => {
        fetchNodes(networkData[0], networkData[1]);
        // fetchLinks(networkData[0], networkData[1]);
    }, [networkData, secondDegree, settings[0], settings[1], settings[2]]);

    const fetchNodes = (networkData2, networkData3) => {
        console.log({ networkData2, networkData3, settings });

        // const firstDegreeProps = { color: "#3f48cc", val: 1 };
        // const secondDegreeProps = { color: "#8cb316", val: 1 };
        // const searchedNodeProps = { color: "#ee0000", val: 1 };

        const firstDegreeProps = { color: settings[0].node2, val: settings[1].node1, batch: 'node1Targets'  };
        const secondDegreeProps = { color: settings[0].node3, val: settings[1].node2 , batch: 'node2'};
        const searchedNodeProps = { color: settings[0].node1, val: settings[1].node13, batch: 'node1' };

        const source1 = networkData2.map((c) => ({ id: displayNamesHm[c.source_id_id].display_name, uid: c.source_id_id, ...firstDegreeProps, type: 'people' }));
        const target1 = networkData2.map((c) => ({ id: displayNamesHm[c.target_id_id].display_name, uid: c.target_id_id, ...firstDegreeProps, type: 'people' }));
        const nodes1 = [...source1, ...target1]
        console.log({ source1, target1 })

        let nodes = [...nodes1]
        if (secondDegree) {
            const target2 = networkData3.map((c) => ({ id: displayNamesHm[c.target_id_id].display_name, uid: c.target_id_id, ...secondDegreeProps, type: 'people' }))
            const source2 = networkData3.map((c) => ({ id: displayNamesHm[c.source_id_id].display_name, uid: c.source_id_id, ...secondDegreeProps, type: 'people' }))
            const nodes2 = [...source2, ...target2]
            console.log({ source2, target2 })
            nodes = [...nodes, ...nodes2]
        }

        const unode = uniqueNodes(nodes)

        console.log({ searchID, "ul": unode.length })

        // set searched node props
        if(unode.length != 0){
            if (searchID != null) {
                const searchedNode = unode.find(n => n.uid === parseInt(searchID))
                if(searchedNode != null)  Object.entries(searchedNodeProps).forEach(([k,v]) => searchedNode[k] = v)
            } else {
                const searchedNodes = unode.filter(n => source1.includes(n));
                searchedNodes.forEach(n => {
                    Object.entries(searchedNodeProps).forEach(([k,v]) => n[k] = v)
                });
            }
        }
       
        console.log({ unode })
        setNodes(unode);
        
        const links1 = networkData2.map(c => {
            return {
                source: nodes.find( e => e.uid === c.source_id_id),
                target: nodes.find(e => e.uid === c.target_id_id),
                id: c.id
            }
        });
        let links = [...links1];
        if (secondDegree) {
            const links2 = networkData3.map(c => {
                return {
                    source: nodes.find(e => e.uid === c.source_id_id),
                    target: nodes.find(e => e.uid === c.target_id_id),
                    id: c.id
                }
            });
            links = [...links1, ...links2]
        }
        
        setLinks(links)
        if (nodes.length === 0 && links.length === 0) {
            console.log('no results set true')
            setNoResults(true)
        }
        else setNoResults(false)
    }


    const data = { nodes: nodes, links: links }
    console.log("data 453728", data)

    // const data3D = {...data}
    // setTab(() => "")
    // setTab((tab) => tab === "show-filter" ? "hide-filter" : "")
    const cloneData = (d) => JSON.parse(JSON.stringify(d));


    console.log("people.js", { data })
    return (
        <>
            {!threeD && !noResults && <Graph2DForce data1={data} zoom={zoom} setFgRef={setFgRef} />}
            {threeD && !noResults && <Graph3D data={data} show3DText={show3DText} zoom={zoom} setFgRef={setFgRef} />}
            {tab === "show-filter" && <Filter nodes={nodes} setNodes={setNodes} settings={settings} />}
            {noResults && <div className="no-results"> No results to display</div>}

        </>
    );
};

export default People;
