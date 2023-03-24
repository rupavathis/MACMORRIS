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
        const isDuplicate = uniqueIds.includes(element.people_id);

        if (!isDuplicate) {
            uniqueIds.push(element.people_id);
            return true;
        }

        return false;
    });
}

const People = ({ networkData, settings, tab, setTab, secondDegree, threeD, show3DText, displayNames, zoom, setFgRef }) => {
    console.log({ networkData, tab, displayNames })

    const [nodes, setNodes] = useState([]);
    const [links, setLinks] = useState([]);
    const [noResults, setNoResults] = useState(false);


    const displayNamesHm = displayNames.reduce((obj, item) => Object.assign(obj, { [item.id]: item }), {})


    useEffect(() => {
        fetchNodes(networkData[0], networkData[1]);
        // fetchLinks(networkData[0], networkData[1]);
    }, [networkData, secondDegree, settings[0], settings[1], settings[2]]);

    const fetchNodes = (networkData2, networkData3) => {

        // const networkData2Filtered = networkData2.filter(n => n.target_id_id != null && n.source_id_id != null)
        // const networkData3Filtered = networkData3.filter(n => n.target_id_id != null && n.source_id_id != null)

        const source1 = networkData2.map((c) => { return { id: displayNamesHm[c.source_id_id].display_name, people_id: c.source_id_id, batch: "node1" } })
        const target1 = networkData2.map((c) => { return { id: displayNamesHm[c.target_id_id].display_name, people_id: c.target_id_id, batch: "node1Targets" } })
        const nodes1 = [...source1, ...target1]
        console.log({ source1, target1 })
        console.log({ networkData3, displayNamesHm })

        const target2 = networkData3.map((c) => { return { id: displayNamesHm[c.target_id_id].display_name, people_id: c.target_id_id, batch: "nodes2" } })
        const source2 = networkData3.map((c) => { return { id: displayNamesHm[c.source_id_id].display_name, people_id: c.source_id_id, batch: "nodes2" } })
        const nodes2 = [...source2, ...target2]
        console.log({ source2, target2 })
        let nodes = []
        if (secondDegree) nodes = [...nodes1, ...nodes2]
        else nodes = [...nodes1]
        // const nodes = [...nodes1, ...nodes2]
        const uniqueNode = uniqueNodes(nodes)

        uniqueNode.forEach((u) => {
            if (u.batch === "node1") {
                u.color = settings[0].node1;
                u.val = settings[1].node1 === '0' ? 1 : settings[1].node1 * 2;
            }
            if (u.batch === "node1Targets") {
                u.color = settings[0].node2;
                u.val = settings[1].node2 === '0' ? 1 : settings[1].node2 * 2;
            }
            if (u.batch === "nodes2") {
                u.color = settings[0].node3;
                u.val = settings[1].node3 === '0' ? 1 : settings[1].node3 * 2;
            }
        })
        setNodes(uniqueNode)

        // }
        // const fetchLinks = (networkData2, networkData3) => {

        // const links1 = networkData2.map((c) => { return { source: displayNamesHm[c.source_id_id], target: displayNamesHm[c.target_id_id]} })
        // const links2 = networkData3.map((c) => { return { source: displayNamesHm[c.source_id_id], target: displayNamesHm[c.target_id_id]} })
        const links1 = networkData2.map(c => {
            return {
                source: nodes.find(e => e.people_id === c.source_id_id),
                target: nodes.find(e => e.people_id === c.target_id_id),
                id: c.id
            }
        });
        let links = [...links1];
        if (secondDegree) {
            const links2 = networkData3.map(c => {
                return {
                    source: nodes.find(e => e.people_id === c.source_id_id),
                    target: nodes.find(e => e.people_id === c.target_id_id),
                    id: c.id
                }
            });
            links = [...links1, ...links2]
        }
        // const uniqueLinks = [...new Set(links.map(JSON.stringify))].map(JSON.parse);
        // setLinks(uniqueLinks)
        // console.log('links', links, 'nodes', nodes)
        setLinks(links)
        if (nodes.length === 0 && links.length === 0) {
            console.log('no results set true')
            setNoResults(true)
        }
        else setNoResults(false)
    }


    const data = { nodes: nodes, links: links }
    // const data3D = {...data}
    // setTab(() => "")
    // setTab((tab) => tab === "show-filter" ? "hide-filter" : "")
    const cloneData = (d) => JSON.parse(JSON.stringify(d));


    console.log("people.js", { data })
    return (
        <>
            {!threeD && !noResults &&  <Graph2DForce data1={data} zoom={zoom} setFgRef={setFgRef} />}
            {threeD && !noResults && <Graph3D data={data} show3DText={show3DText} />}
            {tab === "show-filter" && <Filter nodes={data.nodes} setNodes={setNodes} settings={settings} />}
            {noResults && <div className="no-results"> No results to display</div>}

        </>
    );
};

export default People;
