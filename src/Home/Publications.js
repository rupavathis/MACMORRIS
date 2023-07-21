import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenNib } from '@fortawesome/free-solid-svg-icons';
import './home.scss';
import { useState } from 'react';
import data from './Publications.json';
import { pointer } from 'caniuse-lite/data/features';

function Publications({ changeIrish }) {

    const [loadMore, setLoadMore] = useState(false)
    return (
        <section className="padding  bg-sec-dark" id="our-publications">
            <div className="container" >
                <div className="row">
                    <div className="col-md-8 offset-md-2 col-sm-12 text-center">
                        <div className="heading-title wow fadeInUp" data-wow-delay="300ms">
                            {!changeIrish ? <span style={{ fontSize: '2rem', paddingBottom: '30px' }}>Our publications</span> :
                                <span style={{ fontSize: '2rem', paddingBottom: '30px' }}>
                                    Foilsiúcháin
                                </span>}
                            {/* {!changeIrish ? <h2 className="darkcolor bottom20">Publications and Presentations</h2> :
                                <h2 className="darkcolor bottom20">Foilsiúcháin agus Comhdhálacha</h2>} */}
                        </div>
                    </div>

                    <VerticalTimeline lineColor='#e2aa568c'>
                        {data.slice(0, 3).map((e) => {
                            if (e.id % 2 != 0) {
                                return (
                                    <VerticalTimelineElement
                                        key={e.id}
                                        className="vertical-timeline-element--work"
                                        contentStyle={{ background: '#e2aa568c' }}
                                        contentArrowStyle={{ borderRight: '7px solid #e2aa568c' }}
                                        iconStyle={{ background: '#ffffff', color: '#fff', boxShadow: 'none' }}
                                        icon={<FontAwesomeIcon icon={faPenNib} style={{ color: '#a22828' }} />}
                                    >
                                        <p>{e.text}</p>
                                    </VerticalTimelineElement>
                                );
                            } else {
                                return (
                                    <VerticalTimelineElement
                                        key={e.id}
                                        className="vertical-timeline-element--work"
                                        contentStyle={{ background: '#a2282847' }}
                                        contentArrowStyle={{ borderRight: '7px solid #a2282847' }}
                                        iconStyle={{ background: '#ffffff', color: '#a22828', boxShadow: 'none' }}
                                        icon={<FontAwesomeIcon icon={faPenNib} style={{ color: '#a22828' }} />}
                                    >
                                        <p>{e.text}</p>
                                    </VerticalTimelineElement>
                                );
                            }
                        })}

                        {loadMore && data.slice(3).map((e) => {
                            if (e.id % 2 != 0) {
                                return (
                                    <VerticalTimelineElement
                                        key={e.id}
                                        className="vertical-timeline-element--work"
                                        contentStyle={{ background: '#e2aa568c' }}
                                        contentArrowStyle={{ borderRight: '7px solid #e2aa568c' }}
                                        iconStyle={{ background: '#ffffff', color: '#fff', boxShadow: 'none' }}
                                        icon={<FontAwesomeIcon icon={faPenNib} style={{ color: '#a22828' }} />}
                                    >
                                        <p>{e.text}
                                            <a href={e.link} target="_blank">{e.link}</a>
                                            {e.other}
                                        </p>
                                    </VerticalTimelineElement>
                                );
                            } else {
                                return (
                                    <VerticalTimelineElement
                                        key={e.id}
                                        className="vertical-timeline-element--work"
                                        contentStyle={{ background: '#a2282847' }}
                                        contentArrowStyle={{ borderRight: '7px solid #a2282847' }}
                                        iconStyle={{ background: '#ffffff', color: '#a22828', boxShadow: 'none' }}
                                        icon={<FontAwesomeIcon icon={faPenNib} style={{ color: '#a22828' }} />}
                                    >
                                        <p>{e.text}
                                            <a href={e.link} target="_blank">{e.link}</a>
                                            {e.other}
                                        </p>
                                    </VerticalTimelineElement>
                                );
                            }
                        })}

                    </VerticalTimeline>
                </div >
                {!loadMore && <div className="button btnsecondary pagescroll" style={{ "margin": "10px", "cursor": "pointer" }} onClick={() => setLoadMore(!loadMore)}>
                    {!changeIrish ? <>
                        See More
                    </> :
                        <> Tuilleadh</>
                    }
                </div>}
                {loadMore && <div className="button btnsecondary pagescroll" style={{ "margin": "10px", "cursor": "pointer" }} onClick={() => setLoadMore(!loadMore)}>
                    {!changeIrish ? <>
                        See Less
                    </> :
                        <> Níos lú</>
                    }</div>}


            </div >
        </section>
    );
}

export default Publications;
