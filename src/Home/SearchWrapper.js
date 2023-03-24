import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './Search';
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

function SearchWrapper() {

    const sRef = useRef();
    const [position, setPosition] = useState(null);


    // useEffect(() => {
    //     const handleScroll = () => {
    //         if (sRef.current) { 
    //             console.log("getboudning", sRef.current.getBoundingClientRect().top)
    //             setPosition(sRef.current.getBoundingClientRect().top);
    //         }
    //     };
    //     handleScroll();       
    // }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (sRef.current) {
                setPosition((sRef.current.getBoundingClientRect().top - window.innerHeight)/2);
            }
        };
        handleScroll();
        window.addEventListener('scroll', handleScroll);
        // return () => {
        //     console.log("get return boudning", sRef.current.getBoundingClientRect().top)
        //     window.removeEventListener('scroll', handleScroll);
        // };
    }, []);


    return (
        <div className="image hover-effect img-container" onClick={(() => <Link to='map' target="_blank" rel="noopener noreferrer"></Link>)}>
            <Search className="equalheight" />
            {/* <img src='/images/banner/tower.png' style={{ position: "absolute", top: `${position}px`}} /> */}
            <div style={{ maxHeight: '300px' }} ref={sRef}>
                <img src='/images/banner/scroll-search.png' style={{
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: `0 ${position}px`
                }} />
            </div>
        </div>
    );
}

export default SearchWrapper;
