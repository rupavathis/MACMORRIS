import React from 'react';
import { useEffect, useState } from "react";
import '../Network.scss';
import Form from 'react-bootstrap/Form';

function Settings({ setSelectedColor, setSelectedSize, selectedColor, setSelectedLabelSize, show3DText, setShow3DText }) {

    const setColor = (e, v) => {
        console.log({ v }, e.target.value)
        let updatedValue = {}
        if (v === "node1") updatedValue = { "node1": e.target.value };
        if (v === "node2") updatedValue = { "node2": e.target.value };
        if (v === "node3") updatedValue = { "node3": e.target.value };
        setSelectedColor(c => ({ ...c, ...updatedValue }))
    }

    const setSize = (e, v) => {
        console.log({ v }, e.target.value)
        let updatedValue = []
        if (v === "node1") updatedValue = { "node1": e.target.value };
        if (v === "node2") updatedValue = { "node2": e.target.value };
        if (v === "node3") updatedValue = { "node3": e.target.value };
        setSelectedSize(c => ({ ...c, ...updatedValue }))
    }

    const setLabelSize = (e, v) => {
        console.log({ v }, e.target.value)
        let updatedValue = []
        if (v === "node1") updatedValue = { "node1": e.target.value };
        if (v === "node2") updatedValue = { "node2": e.target.value };
        if (v === "node3") updatedValue = { "node3": e.target.value };
        setSelectedLabelSize(c => ({ ...c, ...updatedValue }))
    }

    return (
        <div className='tab-wrapper-network'>
            <div style={{ "border-bottom": "1px solid  #cabebe", padding: "10px"}}>
                Set node colors
            </div>
            {[{
                "name": "node1",
                "label": "Selected nodes"
            },
            {
                "name": "node2",
                "label": "Neighboring nodes"
            },
            {
                "name": "node3",
                "label": "2nd Degree nodes"
            }
            ].map((c) => {
                return <div style={{ display: "flex", padding: '2px'}}>
                    <input type="color" id="node1" name={c.name} value={selectedColor[`${c.name}`]}
                        onChange={(event) => setColor(event, `${c.name}`)} />
                    <label>{c.label}</label>
                </div>
            }
            )}

            {/* <div>
                2D settings
            </div>
            Set node size
            {[{
                "name": "node1",
                "label": "Node 1"
            },
            {
                "name": "node2",
                "label": "Node 2"
            },
            {
                "name": "node3",
                "label": "Node 3"
            },
            ].map((c) =>
                <div className='node-size'>
                    <Form.Label>{c.label}</Form.Label>
                    <Form.Range className='size-range' onChange={(event) => setSize(event, `${c.name}`)} />
                </div>
            )} */}

            {/* Set Label size
            {[{
                "name": "node1",
                "label": "Node 1"
            },
            {
                "name": "node2",
                "label": "Node 2"
            },
            {
                "name": "node3",
                "label": "Node 3"
            },
            ].map((c) =>
                <div className='node-size'>
                    <Form.Label>{c.label}</Form.Label>
                    <Form.Range className='size-range' onChange={(event) => setLabelSize(event, `${c.name}`)} />
                </div>
            )} */}

            <div>
                <div className='threeD-settings'>
                    3D Settings
                </div>
                <Form>
                    <Form.Check
                        style={{"display": "flex", "align-items": "center"}}
                        type="switch"
                        id="3D-text-switch"
                        label="Display Labels with Nodes"
                        onClick={() => setShow3DText(!show3DText)}
                    />
                </Form>
            </div>
        </div>

    )
}

export default Settings;
