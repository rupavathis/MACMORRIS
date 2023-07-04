import React, { useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import clsx from 'clsx'
import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGripLines } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import pointer from '../../images/map/pointer.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './filter.scss';

// const darkStyle = 'mapbox://styles/mapbox/dark-v11';
const darkStyle = 'mapbox://styles/mapbox/dark-v11';
const terrainStyle = 'mapbox://styles/rupavathi/clc169gkn000816p6bdrhgdbq';
const satelliteStyle = 'mapbox://styles/mapbox/satellite-v9';

function Filter({ siteTypes, sites, setFilteredSites, filteredSites, setMapStyle, setHistoricMap, setCountSites,
    setLayer, layer }) {
    const [selectPointer, setSelectPointer] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
    const [showSiteType, setShowSiteType] = useState(false);
    const [isMapStyleOn, setIsMapStyleOn] = useState(false);

    const [isHistoricMapOn, setIsHistoricMapOn] = useState(true);
    const [selectedSiteType, setSelectedSiteType] = useState([]);
    const [isIconLayer, setIsIconLayer] = useState(true);
    const [isExpandSection, setIsExpandSection] = useState(false);

    useEffect(() => {
        filterCountSites()
    }, [selectPointer])


    const expandSection = () => {
        console.log("expand section")
        setIsExpandSection(!isExpandSection)
    }

    const activePointers = (id) => {
        if (id === 8) {
            if (selectPointer.length != 8)
                return false;
            else return true
        }

        return selectPointer.includes(id)
    }


    return (
        <div className="filter-wrapper">
            <div className="filter-container">
                <div className='header'>
                    <div className='drag-handle'>
                        <FontAwesomeIcon icon={faGripLines} />
                    </div>
                    <div className="name no-flex">
                        Showing {filteredSites.length} texts
                    </div>
                </div>
                <div className='filter-body'>
                    <div className='section-legend'>
                        {switchSites()}
                    </div>
                    {/* <div className='section-info'>
                        
                    </div> */}

                    {/* {[
                        {
                            title: "Map Layers",
                            fun: changeMapLayers,
                            id: 2
                        },
                        {
                            title: "Historic Map",
                            fun: selectHistoricMap,
                            id: 1
                        },
                    ].map((item) => { */}


                    <div className='section-info'>
                        <div className='collapsible'>
                            <div className='collapse-icon-wrapper'>
                                <div className='collapse-header' onClick={() => expandSection(true)}>
                                    <div className='icon hoverable'>
                                        <FontAwesomeIcon icon={faChevronRight} className={clsx("turn-icon", { "active": isExpandSection })} />
                                    </div>
                                    <div className='title'>
                                        Map Layers
                                    </div>
                                    <div className='hline'>
                                    </div>
                                </div>
                                <div className='header-end-wrapper'>
                                    {isExpandSection && <>
                                        {changeMapLayers()}
                                        {selectHistoricMap()}
                                    </>
                                    }
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );



    function switchSites() {
        return (
            <div>
                {/* Showing {siteLength} sites */}
                {siteTypes.map((site) => {
                    return (
                        <div className={clsx("siteTypeClick", { "active": activePointers(site.id) })}
                            id={site.id}
                            onClick={(event) => {
                                setShowSiteType(true);
                                return filterSiteType(site)
                            }}>
                            <svg className={`pointer pointer-${site.id}`} width={20} height={20}>
                                <use href={`${pointer}#mappointer`} xlinkHref={`${pointer}#mappointer`} />
                            </svg>
                            {
                                selectPointer.length != 8 && site.id === 8 && 'Select All'
                            }
                            {
                                selectPointer.length == 8 && site.id === 8 && 'Select None'
                            }
                            {site.id !== 8 && `${site.name}`}

                        </div>)
                })}
            </div>
        )
    }



    function changeMapLayers() {
        return (
            <>

                {[{
                    label: "Icon Layer",
                    id: 1
                }
                ].map((m) => {
                    return (
                        <Form>
                            <Form.Check
                                type="switch"
                                id="map-layer"
                                label={m.label}
                                defaultChecked={isIconLayer}
                                onChange={() => changeLayerSwitchState(m)}
                            />
                        </Form>)
                })}

                {[
                    {
                        label: "Aggregation Layer",
                        id: 2
                    },
                    {
                        label: "Elevated Terrain Layer",
                        id: 3
                    }].map((m) => {
                        return (<Form.Check
                            type="switch"
                            id="map-layer"
                            label={m.label}
                            onChange={() => changeLayerSwitchState(m)}
                        />)
                    })}
            </>
        )
    }

    function changeLayerSwitchState(m) {
        let index = layer.indexOf(m.id)
        if (index === -1) {
            setLayer([...layer, m.id])
        }
        else {
            const newLayer = [...layer];
            newLayer.splice(index, 1);
            setLayer(newLayer);
        }
    }

    function selectHistoricMap() {
        return (
            <div>
                {["Historic Map"].map((m) => {
                    return (<Form.Check
                        type="switch"
                        id="historic-map"
                        label={m}
                        defaultChecked={isHistoricMapOn}
                        onChange={() => {
                            setIsHistoricMapOn(!isHistoricMapOn)
                            !isHistoricMapOn && setHistoricMap("munster")
                            isHistoricMapOn && setHistoricMap("")
                            console.log(isHistoricMapOn)
                        }}
                    />)
                })}
            </div>
        )
    }

    function showCount(site) {
        const count = sites.filter(s => s.site_type_id === site.id);
        return site.name + " - " + count.length;
    }

    // async function filterSites(site) {
    //     const x = filterSiteType(site)
    //     await filterCountSites()
    // }

    async function filterSiteType(site) {
        const id = parseInt(site.id);
        console.log('im in filtersite type', site.id)

        const pointer = selectPointer;
        let newPointer;

        if (!selectPointer.includes(id)) {

            console.log('start', { selectPointer })
            if (id === 8) {
                // setSelectPointer([1, 2, 3, 4, 5, 6, 7])
                newPointer = [1, 2, 3, 4, 5, 6, 7, 8]
            }

            else {
                console.log('id', { id })
                // setSelectPointer([...selectPointer, id])
                newPointer = [...pointer, id]
            }
        }
        else {
            if (id === 8 && selectPointer.length == 8) {
                // setSelectPointer([])
                console.log('hi []')
                newPointer = []

            }

            else if (id === 8 && selectPointer.length != 8) {
                newPointer = [1, 2, 3, 4, 5, 6, 7, 8]
            }
            else {
                // setSelectPointer(selectPointer.filter((s) => s !== id))
                newPointer = pointer.filter((s) => s !== id)
            }
        }

        setSelectPointer(newPointer)
    }

    async function filterCountSites() {

        console.log({ selectPointer })

        const sitesReq = selectPointer.map((sp) => {
            return sites.filter(s => s.site_type_id === sp)
        })

        console.log({ sitesReq })

        const flattenedSitesReq = await sitesReq.reduce((a, c) => a.concat(c), [])
        await setFilteredSites(flattenedSitesReq);
        const countSites = flattenedSitesReq.reduce((a, c) => {
            const count = a[c.place_id] ?? 0;
            return { ...a, [c.place_id]: count + 1 }
        }, {})
        await setCountSites(countSites)
    }

    function changeSites() {
        return siteTypes.map((siteType) => {
            return (
                <Form.Check
                    type="switch"
                    id={siteType.id}
                    label={siteType.name}
                    onChange={(event) => {
                        const id = parseInt(event.target.id);
                        const sitesReq = sites.filter(s => s.site_type_id === id);
                        console.log("target", id, sitesReq);
                        setFilteredSites(sitesReq);
                    }
                    }
                />
            )
        })
    }
}

export default Filter;
