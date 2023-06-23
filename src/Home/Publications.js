import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenNib } from '@fortawesome/free-solid-svg-icons';
import './home.scss';
import { useState } from 'react';
import data from './Publications.json';
import { pointer } from 'caniuse-lite/data/features';

function Publications() {

    const [loadMore, setLoadMore] = useState(false)
    return (
        <div className="container" id="our-publications">
            <div className="row">
                <div className="col-md-8 offset-md-2 col-sm-12 text-center">
                    <div className="heading-title wow fadeInUp" data-wow-delay="300ms">
                        <span>Our publications and presentations</span>
                        <h2 className="darkcolor bottom20">Publications and Presentations</h2>
                    </div>
                </div>

                <VerticalTimeline lineColor='#e2aa568c'>
                    {data.slice(0, 3).map((e) => {
                        if (e.id % 2 != 0) {
                            return (
                                <VerticalTimelineElement
                                    key={e}
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
                                    key={e}
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
                                    key={e}
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
                                    key={e}
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


                 
                    {/* <VerticalTimelineElement
                        iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                        icon={<FontAwesomeIcon icon={faPenNib} style={{ color: "#a22828", }} />}
                        iconOnClick={() => setLoadMore(true)}
                    />

                    {loadMore && <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="November 2012"
                        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                        icon={<FontAwesomeIcon icon={faPenNib} style={{ color: "#a22828", }} />}

                    >
                        <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
                        <h4 className="vertical-timeline-element-subtitle">Certification</h4>
                        <p>
                            Creative Direction, User Experience, Visual Design
                        </p>
                    </VerticalTimelineElement>}
                    {loadMore && <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="2002 - 2006"
                        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                        icon={<FontAwesomeIcon icon={faPenNib} style={{ color: "#a22828", }} />}

                    >
                        <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
                        <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
                        <p>
                            Creative Direction, Visual Design
                        </p>
                    </VerticalTimelineElement>}*/}

                </VerticalTimeline> 
            </div >
           { !loadMore &&  <div className="button btnsecondary pagescroll" style={{ "margin": "10px", "cursor": "pointer"}} onClick={() => setLoadMore(!loadMore)}>See More</div>}
           { loadMore &&  <div className="button btnsecondary pagescroll" style={{ "margin": "10px", "cursor": "pointer"}} onClick={() => setLoadMore(!loadMore)}>See Less</div>}


        </div >
    );
}

export default Publications;
