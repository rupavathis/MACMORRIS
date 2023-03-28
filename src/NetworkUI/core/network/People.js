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


    // const findBatch = () => {
    //     c.source_id_id === searchID ? "node1" : "node1Targets"}
    // }

    const fetchNodes = (networkData2, networkData3) => {

        // const networkData2Filtered = networkData2.filter(n => n.target_id_id != null && n.source_id_id != null)
        // const networkData3Filtered = networkData3.filter(n => n.target_id_id != null && n.source_id_id != null)

        const source1 = networkData2.map((c) => {
            let batchNodes = ""
            if (searchID != 0) {
                console.log("Am in in searchID?", searchID)
                batchNodes = c.source_id_id === searchID ? "node1" : "node1Targets"
            }
            else batchNodes = "node1"
            return {
                id: displayNamesHm[c.source_id_id].display_name, people_id: c.source_id_id,
                // batch: batchNodes
            }
        })

        const target1 = networkData2.map((c) => {
            return {
                id: displayNamesHm[c.target_id_id].display_name, people_id: c.target_id_id,
                // batch: "node1Targets"
            }
        })
        const nodes1 = [...source1, ...target1]
        console.log({ source1, target1 })
        console.log({ networkData3, displayNamesHm })

        let nodes = [...nodes1]
        // let nodes = []
        if (secondDegree) {
            const target2 = networkData3.map((c) => { return { id: displayNamesHm[c.target_id_id].display_name, people_id: c.target_id_id, batch: "nodes2" } })
            const source2 = networkData3.map((c) => { return { id: displayNamesHm[c.source_id_id].display_name, people_id: c.source_id_id, batch: "nodes2" } })
            const nodes2 = [...source2, ...target2]
            console.log({ source2, target2 })
            nodes = [...nodes, ...nodes2]
        }
        // const nodes = [...nodes1, ...nodes2]
        const unode = uniqueNodes(nodes)
        console.log({ unode })


        const uniqueNode = unode.map((a) => {
            console.log({ a })

            if (searchID === null) {
                console.log("im in search id if 2321")
                if (networkData2.some(e => e.source_id_id === a.people_id)) {
                    return { ...a, batch: "node1" }
                }
                else {
                    return { ...a, batch: "node1Targets" }
                }
            }
            else {

                console.log(searchID, a, "2323", networkData2)

                if (networkData2.some(e => e.target_id_id === searchID)) {
                    console.log(searchID, "2322")
                    return { ...a, batch: "node1" }
                }
                else {
                    console.log(searchID, a, "2323")
                    return { ...a, batch: "node1Targets" }
                }
            }
        })

        console.log(uniqueNode, "uniq node")

        uniqueNode.forEach((u) => {
            if (u.batch === "node1") {
                console.log("im in if node1");
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

        console.log({ uniqueNode, unode })

        setNodes(uniqueNode)

        // }
        // const fetchLinks = (networkData2, networkData3) => {

        // const links1 = networkData2.map((c) => { return { source: displayNamesHm[c.source_id_id], target: displayNamesHm[c.target_id_id]} })
        // const links2 = networkData3.map((c) => { return { source: displayNamesHm[c.source_id_id], target: displayNamesHm[c.target_id_id]} })
        const links1 = networkData2.map(c => {
            return {
                source: uniqueNode.find(e => e.people_id === c.source_id_id),
                target: uniqueNode.find(e => e.people_id === c.target_id_id),
                id: c.id
            }
        });
        let links = [...links1];
        if (secondDegree) {
            const links2 = networkData3.map(c => {
                return {
                    source: uniqueNode.find(e => e.people_id === c.source_id_id),
                    target: uniqueNode.find(e => e.people_id === c.target_id_id),
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
    console.log("data 453728", data)

    // const data3D = {...data}
    // setTab(() => "")
    // setTab((tab) => tab === "show-filter" ? "hide-filter" : "")
    const cloneData = (d) => JSON.parse(JSON.stringify(d));


    console.log("people.js", { data })
    return (
        <>
            {!threeD && !noResults && <Graph2DForce data1={data} zoom={zoom} setFgRef={setFgRef} />}
            {threeD && !noResults && <Graph3D data={data} show3DText={show3DText} />}
            {tab === "show-filter" && <Filter nodes={data.nodes} setNodes={setNodes} settings={settings} />}
            {noResults && <div className="no-results"> No results to display</div>}

        </>
    );
};

export default People;
