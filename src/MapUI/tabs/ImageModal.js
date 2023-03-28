import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import * as React from 'react';
import imageacc from './imageacc.json'

function MyVerticallyCenteredModal(props) {
    console.log({ props })
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Image Accreditations
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/* <h4>Title</h4> */}
                <p>{props.place}</p>
            </Modal.Body>
            {/* <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer> */}
        </Modal>
    );
}

export default function ImageModal({ setModalShow, modalShow, placeID }) {
    const [imageAcc, setImageAcc] = React.useState("")


    const places = imageacc.filter(obj => obj.hasOwnProperty(placeID)).map(obj => obj[placeID]);
    // setImageAcc(places[0])

    return (
        <>           
           {places.length != 0 && <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                place={places[0]}
            />}
        </>
    );
}

