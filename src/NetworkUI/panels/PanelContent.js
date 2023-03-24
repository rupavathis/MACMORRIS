import React from 'react';
import { useEffect, useState } from "react";
import '../Network.scss';
import People from '../core/network/People';
import Work from '../core/network/Work.js';
import Form from 'react-bootstrap/Form';
import Spinner from 'react-bootstrap/Spinner';


function PanelContent({ networkData, settings, tab, setTab, workNetworkData, selectContent, show3DText,
    displayNames, loading }) {
    console.log({ networkData, workNetworkData, selectContent })
    const [secondDegree, setSecondDegree] = useState(false);
    const [threeD, setThreeD] = useState(false);
    const [fgRef, setFgRef] = useState(null);
    console.log("Work data length", workNetworkData, workNetworkData.length)


    // const [zoom, setZoom] = useState(1);

    // const handleZoomIn = () => {
    //     setZoom(zoom + 0.5);
    //     console.log("handle zoom in", zoom)

    // };

    // const handleZoomOut = () => {
    //     setZoom(Math.max(zoom - 0.1, 0.1));
    //     console.log("handle zoom out", zoom)

    // };

    const handleZoom = (e) => {
        // setZoom(e.target.value);
        // console.log(e);
        const zoomValue = e.target.value;
        const zoomTime = 500; //ms
        fgRef?.current?.zoom(zoomValue, zoomTime);
    }
    return (
        <div className='panel-content'>
            {
                loading &&
                <Spinner animation="grow" role="status" variant="primary"
                    style={{
                        top: "calc(50% - 16px)", left: "calc(50% - 16px)",
                        position: "absolute",

                    }}>
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            }
            {
                networkData.length != 0 && selectContent === 0 &&
                <People networkData={networkData} settings={settings} tab={tab} setTab={setTab} secondDegree={secondDegree}
                    threeD={threeD} show3DText={show3DText} displayNames={displayNames} setFgRef={setFgRef} />
            }
            {
                workNetworkData.length != 0 && selectContent === 1 &&
                <Work workNetworkData={workNetworkData} settings={settings} secondDegree={secondDegree} threeD={threeD}
                    tab={tab} show3DText={show3DText} displayNames={displayNames} />
            }
            {
                (workNetworkData.length != 0 || networkData.length != 0) &&
                <>
                    <Form className="switches">
                        <Form.Check
                            style={{
                                alignItems: "baseline",
                                display: "flex"
                            }}
                            type="switch"
                            id="custom-switch"
                            label="Show the 2nd degree"
                            onClick={() => setSecondDegree(!secondDegree)}
                        />
                        <Form.Check
                            style={{
                                alignItems: "baseline",
                                display: "flex"
                            }}
                            type="switch"
                            id="3D-switch"
                            label="Show the network in 3D"
                            onClick={() => setThreeD(!threeD)}
                        />
                    </Form>
                    <div style={{ position: 'absolute', bottom: 10, right: 15, margin: 10, display: 'flex' }}> 
                    <div style={{ margin: 3, fontSize: 18}}>-</div>
                        <input type="range" min={0.1} max={10} step={0.1} defaultValue={1} onChange={handleZoom} />
                    <div style={{ margin: 3, fontSize: 18}}>+</div>
                    </div>

                </>
            }

        </div >
    )
}

export default PanelContent;

