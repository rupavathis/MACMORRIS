import './core.scss';
import { useEffect, useRef, useState, useCallback, useMemo } from "react";
import { ForceGraph2D } from 'react-force-graph';
import SpriteText from 'three-spritetext';
import PanelRight from '../../panels/PanelRight';
import InfoLink from '../../tabs/InfoLink'
import { Settings } from '@material-ui/icons';

const Graph2DForce = ({ data1, show3DText, setFgRef }) => {
    console.log("3d", { data1 }, show3DText)
    const fgRef = useRef();
    const ref = useRef();
    const [config, setConfig] = useState(null);
    const [linkStyle, setLinkStyle] = useState({});
    const [highlightNodes, setHighlightNodes] = useState(new Set());
    const [highlightLinks, setHighlightLinks] = useState(new Set());
    const [hoverNode, setHoverNode] = useState(null);
    const [showInfo, setShowInfo] = useState(false);
    const [info, setInfo] = useState(0);
    const [showLinkInfo, setShowLinkInfo] = useState(false);
    const [linkInfo, setLinkInfo] = useState(0);


    const NODE_R = 8;

    const data = useMemo(() => {

        const gData = data1

        // cross-link node objects
        gData.links.forEach((link, i) => {
            const a = gData.nodes.find(e => e === link.source);
            const b = gData.nodes.find(e => e === link.target);
            (a == null || b == null) && console.log({ a, b, i });
            !a.neighbors && (a.neighbors = []);
            !b.neighbors && (b.neighbors = []);
            a.neighbors.push(b);
            b.neighbors.push(a);

            !a.links && (a.links = []);
            !b.links && (b.links = []);
            a.links.push(link);
            b.links.push(link);
        });

        return gData;
    }, [data1]);


    useEffect(() => {
        setFgRef?.(fgRef);
    }, [fgRef])
    useEffect(() => {
        if (Object.keys(data1).length > 0) {
            fgRef.current.d3Force('link').distance((link) => 100);
            fgRef.current.d3Force('charge').strength(() => -400);
        };

    }, [data1, show3DText])



    function nodePaint(node, ctx) {

        const { x, y, id } = node

        if (node.batch === "work1" || node.batch === "work2") {
            ctx.font = '10px Sans-Serif blue'; ctx.textAlign = 'left'; ctx.textBaseline = 'middle';

            ctx.fillText(id, x + 8, y + 1);
            ctx.fillStyle = node.color;
            ctx.beginPath(); ctx.moveTo(x, y - 5); ctx.lineTo(x - 5, y + 5); ctx.lineTo(x + 5, y + 5); ctx.fill();
        }

        else {
            ctx.font = '10px Sans-Serif'; ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
            ctx.fillStyle = "black";
            ctx.fillText(id, x + 8, y + 1);
        }
        // console.log({node}
    }


    const updateHighlight = () => {
        setHighlightNodes(highlightNodes);
        setHighlightLinks(highlightLinks);
    };


    const paintRing = useCallback((node, ctx) => {
        // add ring just for highlighted nodes

        const { x, y, id } = node

        if (node.batch === "work1" || node.batch === "work2") {
            console.log("im in")
            ctx.beginPath(); 
            ctx.moveTo(x, y - 5); ctx.lineTo(x - 5, y + 5); ctx.lineTo(x + 5, y + 5); ctx.fill();
            ctx.font = '10px Sans-Serif'; ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
            ctx.fillStyle = node.color;
            ctx.fillText(id, x + 8, y + 1);
            ctx.fillStyle = node === hoverNode ? '#ffff00' : 'orange';
        }

        else {
            ctx.beginPath();
            ctx.arc(x, y, NODE_R * 1, 0, 2 * Math.PI, false);
            ctx.fillStyle = node === hoverNode ? '#ffff00' : 'orange';
            ctx.fill();
            ctx.font = '10px Sans-Serif'; ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
            ctx.fillStyle = "black"
            ctx.fillText(id, x + 8, y + 1);
        }
    }, [hoverNode]);

    const handleLinkHover = link => {
        highlightNodes.clear();
        highlightLinks.clear();

        if (link) {
            highlightLinks.add(link);
            highlightNodes.add(link.source);
            highlightNodes.add(link.target);
            // console.log({ highlightLinks })
        }

        updateHighlight();
    };

    const handleNodeHover = node => {
        highlightNodes.clear();
        highlightLinks.clear();
        if (node) {
            highlightNodes.add(node);
            // console.log({ node })
            node.neighbors.forEach(neighbor => highlightNodes.add(neighbor));
            node.links.forEach(link => highlightLinks.add(link));
        }

        setHoverNode(node || null);
        updateHighlight();
        console.log('fgref', fgRef);
    };
    const myComponentRef = useRef(null);


    const handleNodeClick = useCallback(node => {
        setShowInfo(true)
        setShowLinkInfo(false)
        setInfo(node.people_id)
    }, []);

    const handleLinkClick = useCallback(link => {
        setShowLinkInfo(true)
        setShowInfo(false)
        console.log('Link ID 324', link);

        setLinkInfo(link.id)
    }, []);


    // console.log("Graph 2D corce", { data })
    return (
        <div
            ref={myComponentRef}
        // style={{
        //     transform: `scale(${zoom})`,
        //     transformOrigin: 'top left',
        // }}
        >
            <div ref={ref} style={{ height: '100%' }}>
                <ForceGraph2D
                    // width={250}
                    // height={250}
                    // nodeVal={(data => data.nodes.map(d => d.size))}
                    // graphData={data}
                    graphData={data}
                    ref={fgRef}
                    // nodeLabel="id"
                    // linkLabel="id"
                    nodeAutoColorBy="group"
                    // linkColor={(() => 'rgb(211,211,211)')}
                    linkResolution={10}
                    linkOpacity={1}

                    // nodeCanvasObjectMode={() => 'after'}
                    cooldownTicks={100}
                    // onEngineStop={() => fgRef.current.zoomToFit(400)}
                    autoPauseRedraw={false}
                    linkWidth={link => highlightLinks.has(link) ? 5 : 1}
                    linkDirectionalParticles={4}
                    linkDirectionalParticleWidth={link => highlightLinks.has(link) ? 4 : 0}
                    nodeCanvasObjectMode={node => {
                        if (node.batch === "work1") {
                            return 'replace'
                        }
                        return highlightNodes.has(node) ? 'before' : 'after'

                    }
                    }

                    nodeCanvasObject={(node, ctx) => {
                        highlightNodes.has(node) ? paintRing(node, ctx) : nodePaint(node, ctx)
                    }}
                    onNodeHover={handleNodeHover}
                    onLinkHover={handleLinkHover}
                    // onNodeClick={() => console.log("clicked me 123456")}
                    onNodeClick={handleNodeClick} //write logic of 'info about nodes'
                    onLinkClick={handleLinkClick} //write logic of 'relationship bw nodes'

                />
            </div>
            {showInfo && <PanelRight info={info} type="node" />}
            {showLinkInfo && <PanelRight info={linkInfo} type="link" />}

        </div>
    );
};

export default Graph2DForce
