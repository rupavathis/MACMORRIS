import Form from 'react-bootstrap/Form';
import './core.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useRef, useState } from "react";
import Graph3D from './Graph3D';
import Filter from '../../tabs/WorkFilter';
import GraphForce2D from './Graph2DForce';

const uniqueNodes = (nodes) => {
    const uniqueIds = [];
    return nodes.filter(element => {
        const isDuplicate = uniqueIds.includes(element.id);

        if (!isDuplicate) {
            uniqueIds.push(element.id);
            return true;
        }

        return false;
    });
}


const Work = ({ workNetworkData, settings, secondDegree, threeD, tab, show3DText, displayNames }) => {

    console.log('works 54321')


    const obj = displayNames.reduce((obj, item) => Object.assign(obj, { [item.id]: item.display_name }), {})

    const [nodes, setNodes] = useState([]);
    const [links, setLinks] = useState([]);

    useEffect(() => {
        console.log('useEffect works 54321')
        fetchNodes();
    }, [workNetworkData, secondDegree, settings[0], settings[1], settings[2]]);

    // useEffect(() => {
    //     console.log('useEffect works 54321')
    // }, []);

    const firstDegree = workNetworkData[0]
    const networkData1 = [...firstDegree]
    const networkData2 = workNetworkData[1]
    console.log({ networkData1 })

    const fetchNodes = () => {

        console.log("Fetch nodes 654321")

        const source1 = networkData1.map((c) => {
            return { id: c.display_title === null ? "" : c.display_title, work_id: c.id, batch: "work1" }
        })
        const assoc_author = networkData1.map((c) => {
            const a = c.author_id_id === null ? "" : obj[`${c.author_id_id}`];
            return { id: a, work_id: c.id, batch: "people1", people_id: c.author_id_id }
        })

        const assoc_people = networkData1.map((c) => [c.patron_id_ids, c.patron_id_ids, c.publisher_id_ids, c.bookseller_id_ids]
            .map(d =>
                d.map(e => {
                    const v = e === null ? "" : obj[`${e}`];
                    return { id: v, people_id: e, batch: "people1" }
                }))
        ).flat(2)

        const nodes1 = [...source1, ...assoc_author, ...assoc_people]

        console.log({ nodes1 })

        let nodes = []


        if (secondDegree) {

            const source2 = networkData2.map((c) => {
                return {
                    id: c.display_title === null ? "" : c.display_title, work_id: c.id, batch: "work2"
                }
            })
            nodes = [...nodes1, ...source2]
        }
        else {
            nodes = [...nodes1]
            console.log('else', { nodes })
        }

        console.log('after else', { nodes })

        const uniqueNode = uniqueNodes(nodes)

        uniqueNode.forEach((u) => {
            if (u.batch === "work1") {
                u.color = settings[0].node1;
                u.val = settings[1].node1 === '0' ? 1 : settings[1].node1 * 2;
            }
            if (u.batch === "people1") {
                u.color = settings[0].node2;
                u.val = settings[1].node2 === '0' ? 1 : settings[1].node2 * 2;
            }
            if (u.batch === "work1") {
                u.color = settings[0].node3;
                u.val = settings[1].node3 === '0' ? 1 : settings[1].node3 * 2;
            }
        })
        setNodes(uniqueNode)

        const author_works = networkData1.map((c) => {
            console.log('links author', c.author_id_id, nodes)
            const a = c.author_id_id === null ? "" : obj[`${c.author_id_id}`];
            return {
                source: nodes.find(e => e.work_id === c.id),
                target: nodes.find(e => e.people_id === c.author_id_id)
            }
        })

        const w2p = networkData1.map(w => {
            // input: array of people ids, output array of src tgt objects
            const ids2p = (ids) => ids.map(id => ({
                source: nodes.find(e => e.work_id === w.id),
                target: nodes.find(e => e.people_id === id)
            }));
            return [w.patron_id_ids, w.printer_id_ids, w.publisher_id_ids, w.bookseller_id_ids].map(ids => ids2p(ids));
        }).flat(2);



        const link1 = [...author_works, ...w2p]
        setLinks(link1)


        if (secondDegree) {
            const getAllIds = (p) => [].concat(
                p.bookseller_id_ids,
                p.patron_id_ids,
                p.printer_id_ids,
                p.publisher_id_ids,
            );
            console.log({ networkData1, networkData2 });
            const link2 = networkData1.map(n1 =>
                getAllIds(n1).map(id =>
                    networkData2.filter(e => e.patron_id_ids.includes(id)).map(e => ({
                        source: n1,
                        target: e
                    }))
                ).flat()
            ).flat()
            console.log({ link2 });
            // const link2 = networkData1[0].patron_id_ids.reduce((acc, s) => {
            //     return networkData2.filter(e => e.patron_id_ids.includes(s)).map(e => {
            //         return {
            //             source: networkData1[0],
            //             target: e,
            //         }
            //     })
            // }, [])

            // const links = [...link1, ...link2]
            // setLinks(links)
        }
        // else {
        //     const link1 = [...author_works, ...w2p]
        //     setLinks(link1)
        // }

        // const link1 = [...author_works, ...w2p]
        // setLinks(link1)
    }

    console.log({ nodes, links })

    const data = { nodes: nodes, links: links }
    console.log({ data })
    // const data3D = JSON.parse(JSON.stringify(data));

    return (
        <>
            {!threeD && data.nodes.length != 0 && <GraphForce2D data1={data} />}
            {threeD && data.nodes.length != 0 && <Graph3D data={data} show3DText={show3DText} />}

            {tab === "show-filter" && <Filter nodes={data.nodes} setNodes={setNodes} settings={settings} />}

        </>
    );
};

export default Work;
