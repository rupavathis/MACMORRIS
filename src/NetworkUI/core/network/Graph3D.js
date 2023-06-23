import './core.scss';
import { useEffect, useRef, useState, useCallback, useMemo } from "react";
import { ForceGraph3D } from 'react-force-graph';
import SpriteText from 'three-spritetext';
import * as THREE from 'three';

const Graph3D = ({ data, show3DText, setFgRef }) => {

    const NODE_R = 8;

    const [highlightNodes, setHighlightNodes] = useState(new Set());
    const [highlightLinks, setHighlightLinks] = useState(new Set());
    const [hoverNode, setHoverNode] = useState(null);
    const [hoverLink, setHoverLink] = useState(null);
    const [len, setLen] = useState(null)

    const myComponentRef = useRef(null);


    // console.log("3d", { data }, show3DText)
    const fgRef = useRef();
    const ref = useRef();

    useEffect(() => {
        setFgRef?.(fgRef);
    }, [fgRef])
    useEffect(() => {
        if (Object.keys(data).length > 0) {
            // fgRef.current.d3Force('link').distance((link) => 200)
            fgRef.current.d3Force('charge').strength(-300);
        };
    }, [data, show3DText, highlightLinks])


    const newData = useMemo(() => {

        const gData = data
        setLen(gData.length)
        // console.log("3d gData before change", { gData })

        // cross-link node objects
        gData.links.forEach(link => {
            const a = gData.nodes.find(e => e === link.source);
            const b = gData.nodes.find(e => e === link.target);
            !a.neighbors && (a.neighbors = []);
            !b.neighbors && (b.neighbors = []);
            a.neighbors.push(b);
            b.neighbors.push(a);

            !a.links && (a.links = []);
            !b.links && (b.links = []);
            a.links.push(link);
            b.links.push(link);
        });

        // console.log("3d gData after change", { gData })


        return gData;
    }, [data]);


    useEffect(() => {
        if (Object.keys(data).length > 0) {
            fgRef.current.d3Force('link').distance((link) => 100);
            fgRef.current.d3Force('charge').strength(() => -400);
        };

        // }, [data, show3DText])
    }, [data])


    const handleNodeHover = node => {
        if (data.nodes.length > 500) return;

        // don't update if no state change
        if ((!node && !highlightNodes.size) || (node && hoverNode === node)) return;

        highlightNodes.clear();
        highlightLinks.clear();
        if (node) {
            highlightNodes.add(node);
            node.neighbors.forEach(neighbor => highlightNodes.add(neighbor));
            node.links.forEach(link => highlightLinks.add(link));
            //   console.log("handle node", node.id)
        }


        setHoverNode(node || null);
        updateHighlight();
    };

    const handleLinkHover = link => {
        if (data.nodes.length > 500) return;

        // don't update if no state change
        if ((!link && !highlightLinks.size) || (link && hoverLink === link)) return;

        highlightNodes.clear();
        highlightLinks.clear();

        if (link) {
            setHighlightLinks(highlightLinks.add(link));
            // console.log("handle links", link.source, link.target)
            highlightNodes.add(link.source);
            highlightNodes.add(link.target);
        }

        setHoverLink(link || null)
        updateHighlight();
    };
    const updateHighlight = () => {
        // console.log({ highlightLinks, highlightNodes })

        setHighlightNodes(highlightNodes);
        setHighlightLinks(highlightLinks);

        // force update only for debug
        // fgRef.current.refresh();
    };
    const paintRing = useCallback((node, ctx) => {
        // add ring just for highlighted nodes

        // console.log({ hoverNode })

        const { x, y, id } = node

        if (node.batch === "work1" || node.batch === "work2") {
            console.log("im in")
            ctx.beginPath();
            ctx.moveTo(x, y - 5); ctx.lineTo(x - 5, y + 5); ctx.lineTo(x + 5, y + 5); ctx.fill();
            ctx.font = '10px Sans-Serif'; ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
            ctx.fillStyle = "black"
            ctx.fillText(id, x + 8, y + 1);
            ctx.fillStyle = node === hoverNode ? '#ffff00' : 'orange';
        }

        else {
            ctx.beginPath();
            ctx.arc(node.x, node.y, NODE_R * 1.4, 0, 2 * Math.PI, false);
            ctx.fillStyle = node === hoverNode ? '#ffff00' : 'orange';
            ctx.fill();
            ctx.font = '10px Sans-Serif'; ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
            ctx.fillStyle = "black"
            ctx.fillText(id, x + 8, y + 1);
        }
    }, [hoverNode]);


    return (
        <div ref={myComponentRef}>
            <div ref={ref} style={{ height: '100%' }}>

                {!show3DText && <ForceGraph3D
                    backgroundColor="white"
                    ref={fgRef}
                    graphData={newData}
                    // nodeRelSize={4}
                    autoPauseRedraw={false}
                    linkColor={((data) => data.linkColor = "black")}
                    nodeLabel="id"
                    // nodeColor={node => highlightNodes.has(node) ? node === hoverNode ? 'rgb(255,0,0,1)' : 'rgba(255,160,0,0.8)' : 'rgba(0,255,255,0.6)'}
                    nodeColor={node => highlightNodes.has(node) ? node === hoverNode ? '#e2aa56' : '#a22828' : node.color}
                    // linkLabel="id"
                    nodeAutoColorBy="group"
                    linkWidth={link => highlightLinks.has(link) ? 2 : 1}
                    linkDirectionalParticles={4}
                    linkDirectionalParticleWidth={link => highlightLinks.has(link) ? 2 : 0}
                    nodeCanvasObjectMode={node => highlightNodes.has(node) ? 'before' : undefined}
                    // onLinkHover={() => len < 500 && handleLinkHover}
                    // onNodeHover={() => len < 500 &&  handleNodeHover}
                    onLinkHover={handleLinkHover}
                    onNodeHover={handleNodeHover}
                    nodeCanvasObject={paintRing}

                />}
                {show3DText && <ForceGraph3D
                    ref={fgRef}
                    graphData={newData}
                    nodeAutoColorBy="group"
                    backgroundColor="white"
                    linkColor={((data) => data.linkColor = "black")}
                    nodeColor={node => highlightNodes.has(node) ? node === hoverNode ? '#e2aa56' : '#a22828' : node.color}
                    nodeThreeObjectExtend={show3DText}
                    nodeThreeObject={node => {
                        if (node.batch === "work1" || node.batch === "work2") {
                            // Create a new ConeGeometry object with random radius and height
                            const coneGeometry = new THREE.ConeGeometry(Math.random() * 10, Math.random() * 20);

                            // Create a material for the cone
                            const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });

                            // Create a mesh using the geometry and material
                            const coneMesh = new THREE.Mesh(coneGeometry, material);

                            // Add the mesh to the scene
                            // scene.add(coneMesh);

                            // new THREE.MeshLambertMaterial({
                            //     color: Math.round(Math.random() * Math.pow(2, 24)),
                            //     transparent: true,
                            //     opacity: 0.75
                            //   })
                            return coneMesh
                        }

                        else {
                            const sprite = new SpriteText(node.id);
                            sprite.color = "black";
                            sprite.textHeight = 6;
                            const s = sprite.position.y
                            sprite.position.y = -8
                            return sprite;
                        }
                    }
                    }
                    enableNodeDrag={true}
                    onNodeDragEnd={node => {
                        node.fx = node.x;
                        node.fy = node.y;
                        node.fz = node.z;
                    }}
                    linkWidth={link => highlightLinks.has(link) ? 2 : 1}
                    linkDirectionalParticles={4}
                    linkDirectionalParticleWidth={link => highlightLinks.has(link) ? 2 : 0}
                    // nodeCanvasObjectMode={node => highlightNodes.has(node) ? 'before' : 'replace'}
                    nodeCanvasObjectMode={node => 'replace'}


                    // nodeCanvasObjectMode={node => {
                    //     console.log("replace mode" )

                    //     if (node.batch === "work1" || "work2") {
                    //         console.log("replace")
                    //         return 'replace'
                    //     }
                    //     return highlightNodes.has(node) ? 'before' : 'after'

                    // }
                    // }
                    // onLinkHover={() => len < 500 && handleLinkHover}
                    // onNodeHover={() => len < 500 &&  handleNodeHover}
                    onLinkHover={handleLinkHover}
                    onNodeHover={handleNodeHover}
                    nodeCanvasObject={paintRing}
                />}
            </div>
        </div>
    );
};

export default Graph3D
