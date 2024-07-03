import { Button, Col, Container, Row } from "react-bootstrap";
import avatar from "../data/avatar.png";

const MySettings = () => {
  return (
    <>
      <div className="bg-white">
        <Container className="container maxWidth my-5">
          <h1>Account</h1>
          <hr />
          <Row className="row-cols-2 flex-column flex-md-row">
            <Col sm="12" md="4">
              <h2 className="text-black-50">MEMBERSHIP & BILLING</h2>

              <Button type="button" className="btn bg-secondary-subtle rounded-0 px-4 py-2" data-bs-toggle="modal" data-bs-target="#cancel">
                CANCEL MEMBERSHIP
              </Button>
            </Col>
            <Col className="col-12 col-md-8">
              <Row sm="12" md="2">
                <Col className="col">
                  <p className="fw-bold">student.@strive.scool</p>
                  <p className="text-black-50">Password:********</p>
                  <p className="text-black-50">Phone: 123 456 789</p>
                </Col>

                <Col className="d-flex flex-column align-items-end">
                  <p className="text-primary">Change account email</p>
                  <p className="text-primary">Change Password</p>
                  <p className="text-primary">Change Phone Number</p>
                </Col>
              </Row>
              <hr />
              <Row className="row-cols-2">
                <Col>
                  <p className="fst-italic fw-bold">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-paypal" viewBox="0 0 16 16">
                      <path d="M14.06 3.713c.12-1.071-.093-1.832-.702-2.526C12.628.356 11.312 0 9.626 0H4.734a.7.7 0 0 0-.691.59L2.005 13.509a.42.42 0 0 0 .415.486h2.756l-.202 1.28a.628.628 0 0 0 .62.726H8.14c.429 0 .793-.31.862-.731l.025-.13.48-3.043.03-.164.001-.007a.35.35 0 0 1 .348-.297h.38c1.266 0 2.425-.256 3.345-.91q.57-.403.993-1.005a4.94 4.94 0 0 0 .88-2.195c.242-1.246.13-2.356-.57-3.154a2.7 2.7 0 0 0-.76-.59l-.094-.061ZM6.543 8.82a.7.7 0 0 1 .321-.079H8.3c2.82 0 5.027-1.144 5.672-4.456l.003-.016q.326.186.548.438c.546.623.679 1.535.45 2.71-.272 1.397-.866 2.307-1.663 2.874-.802.57-1.842.815-3.043.815h-.38a.87.87 0 0 0-.863.734l-.03.164-.48 3.043-.024.13-.001.004a.35.35 0 0 1-.348.296H5.595a.106.106 0 0 1-.105-.123l.208-1.32z" />
                    </svg>
                    PayPal @ <span className="fst-normal">admin@strive.scool</span>
                  </p>
                </Col>
                <Col className="d-flex flex-column align-items-end">
                  <p className="text-primary">Update payment info</p>
                  <p className="text-primary">Billing details</p>
                </Col>
              </Row>
              <hr />
              <Row>
                <Col className="d-flex flex-column align-items-end">
                  <p className="text-primary">Redeem gift card or promo code</p>
                  <p className="text-primary">Where to buy gift cards</p>
                </Col>
              </Row>
            </Col>
          </Row>
          <hr />
          <Row className="row-cols-2 flex-column flex-md-row">
            <Col sm="12" md="4">
              <h2 className="text-black-50">PLAN DETAILS</h2>
            </Col>
            <Col sm="12" md="8">
              <Row className="row-cols-2">
                <Col>
                  <p className="fw-bold">
                    Premium <span className="border border-black px-2">ULTRAHD</span>
                  </p>
                </Col>
                <Col className="d-flex justify-content-end">
                  <p className="text-primary">Change Plan</p>
                </Col>
              </Row>
            </Col>
          </Row>
          <hr />
          <Row className="row-cols-2 flex-column flex-md-row">
            <Col sm="4">
              <h2 className="text-black-50">SETTINGS</h2>
            </Col>
            <Col col="12" md="8" className="d-flex flex-column align-items-md-start align-items-end">
              <p className="text-primary">Parental controls</p>
              <p className="text-primary">Test participation</p>
              <p className="text-primary">Manage download devices</p>
              <p className="text-primary">Activate a device</p>
              <p className="text-primary">Recent device streaming activity</p>
              <p className="text-primary">Sign out of all devices</p>
            </Col>
          </Row>
          <hr />
          <Row className="row-cols-2 flex-column flex-md-row">
            <Col sm="12" md="4">
              <h2 className="text-black-50">MY PROFILE</h2>
            </Col>
            <Col sm="12" md="8">
              <Row xs="2">
                <Col>
                  <p className="fw-bold">
                    <img src={avatar} alt="Avatar" width="30px" /> Strive Student
                  </p>
                </Col>
                <Col className="d-flex flex-column align-items-end">
                  <p className="text-primary">Manage Profile</p>
                  <p className="text-primary">Add profile email</p>
                </Col>
              </Row>
              <Row>
                <Col sm="12" md="6" className="d-flex d-md-block flex-column align-items-end">
                  <p className="text-primary">Language</p>
                  <p className="text-primary">Playback settings</p>
                  <p className="text-primary">Subtitle apparence</p>
                </Col>
                <Col className="d-flex d-md-block flex-column align-items-end">
                  <p className="text-primary">Viewing activity</p>
                  <p className="text-primary">Rating</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>

      {/* <div className="modal fade" id="cancel" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                CANCEL MEMBERSHIP
              </h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">Are you sure? This action are irreversible!</div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Close
              </button>
              <button type="button" className="btn btn-danger">
                Delete account
              </button>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};
export default MySettings;
