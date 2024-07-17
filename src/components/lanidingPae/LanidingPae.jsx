import React, { useState } from "react";
import Header from "../header/Header";
import { Row, Container, Col, Card, Button } from "react-bootstrap/esm";
import catimg from "../../assets/catmain.svg";
import "./LanidingPae.css";
import cats from "../../assets/cats.svg";
import wallet from "../../assets/image 110.png";
import dollarimg from "../../assets/image 113.png";
import monkey from "../../assets/monkey.svg";
import monky from "../../assets/Ellipse 137.png";
import girl from "../../assets/Ellipse 138.png";
import dog from "../../assets/Ellipse 136.png";
import skull from "../../assets/Ellipse 135.png";
import skull1 from "../../assets/Ellipse 133.png";
import skull2 from "../../assets/Ellipse 130.png";
import skull3 from "../../assets/Ellipse 134.png";
import roadmap from "../../assets/roadmap.svg";
import cat1 from "../../assets/Ellipse 129.png";
import cat2 from "../../assets/Ellipse 130.png";
import cat3 from "../../assets/Ellipse 131.png";
import cat4 from "../../assets/Ellipse 132.png";
import cat5 from "../../assets/Frame 1261152802.png";
import cat6 from "../../assets/Frame 1261152802 (1).png";
import str from "../../assets/wide.png";
import str1 from "../../assets/wide.png";
import str2 from "../../assets/wide.png";

const catimges = [
  { src: cat1 },
  { src: cat2 },
  { src: cat3 },
  { src: cat4 },
  { src: cat5 },
  { src: cat6 },
];

const images = [
  { src: monky },
  { src: girl },
  { src: dog },
  { src: skull },
  { src: skull1 },
  { src: skull2 },
  { src: skull3 },
];
//  const countnum =[1];
const shuffleImages = (images) => {
  const shuffledImages = [];
  for (let i = 0; i < 4; i++) {
    const rowImages = [...images];
    for (let j = 0; j < 4; j++) {
      const randomIndex = Math.floor(Math.random() * rowImages.length);
      shuffledImages.push(rowImages.splice(randomIndex, 1)[0]);
    }
  }
  return shuffledImages;
};

function LanidingPae() {
  const shuffledImages = shuffleImages(images);
  const [activeButton, setActiveButton] = useState(0);
  const handleClick = (index) => {
    setActiveButton(index);
  };
  //   const catshuffled = catshuffled(catimges);
  return (
    <div className="main-bg-black-n-white-img">
      <Header />
      {/* maindiv */}
      <img src={str} className="str" />
      <Container fluid className="bg-img-container">
        <Row className="distance">
          <Col className="main-div-LHS">
            {" "}
            <div className="text-font">
              <h3 className="mb-0">
                We Have High
                <br /> Quality <span> NFT</span> <br /> Collections
              </h3>
              <p className="mb-0">
                Lorem ipsum dolor sit amet consectetur. Rhoncus massa
                suspendisse turpis sed viverra tempus tortor. Habitant accumsan
                sagittis in facilisi placerat ac. Laoreet scelerisque viverra
                viverra ornare fermentum faucibus sit purus volutpat. Egestas
                lectus ornare convallis ornare nullam enim neque.
              </p>
            </div>
            <div className="butons-stlying">
              <button className="get-btn "> Get Whitelist</button>
              <button className="contact-btn"> Contact Us</button>
            </div>
            <div className="card-img-bg">
              <div className="card-likes-text-stlying">
                {" "}
                <h3 className="mb-0">240k+</h3> <p className="mb-0">Total Sale</p>
              </div>
              <div className="card-likes-text-stlying">
                {" "}
                <h3 className="mb-0">100k+</h3> <p className="mb-0">Auctions</p>
              </div>
              <div className="card-likes-text-stlying">
                {" "}
                <h3 className="mb-0">240k+</h3> <p className="mb-0">Artists</p>
              </div>
            </div>
          </Col>
          <Col className="maincat">
            <img src={catimg} />
          </Col>
        </Row>
      </Container>
      {/* Aboutus */}
      <Container fluid className="bg-black">
        <h3 className="about-us">About us</h3>
        <div className="aboutUs-bg-color">
          <Row className="abotus-row">
            <Col md={12} lg={6}>
              <img src={cats} className="cats-img" />
            </Col>
            <Col md={12} lg={6} className="right-col-p">
              <p className="mb-0">
                Lorem ipsum dolor sit amet consectetur. Pharetra faucibus donec
                ultrices eros elit metus morbi aliquam quis. Suspendisse massa
                ullamcorper tortor morbi nisi leo. Ultrices leo vel tincidunt
                nunc eget elit. Gravida et duis ipsum pellentesque libero.
                Tellus rhoncus metus et eget mattis fringilla nec id. Amet
                ultrices quam ridiculus tellus. Leo adipiscing tincidunt amet
                nisi semper adipiscing quam in est. Tempor sed dui nunc diam
                adipiscing at.
              </p>
              <p className="bout-text-2 mb-0">
                Tellus rhoncus metus et eget mattis fringilla nec id. Amet
                ultrices quam ridiculus tellus. Leo adipiscing tincidunt amet
                nisi semper adipiscing quam in est. Tempor sed dui nunc diam
                adipiscing at.
              </p>
              <button className="Connect-Wallet-btn">Connect Wallet</button>
            </Col>
          </Row>
        </div>
      </Container>
      {/* top collection */}
      <div className="checkout2 top-collection">
        <h3 className="mb-0">Top Collections</h3>
        <p className="mb-0">
          The largest and unique Super rare NFT marketplace <br />
          For crypto-collectibles
        </p>
      </div>
      <div className="cardbg">
        {" "}
        {Array.from({ length: Math.ceil(catimges.length / 3) }).map(
          (_, rowIndex) => (
            <Row key={rowIndex} className="nfts-boxes-divs-stlye1">
              {catimges
                .slice(rowIndex * 3, rowIndex * 3 + 3)
                .map((img, colIndex) => (
                  <Col key={colIndex} className="p-0 crd-derction1">
                    <Card
                      className={` image-card1 ${
                        activeButton === 0 ? "active" : ""
                      }`}
                      onClick={() => handleClick(0)}
                    >
                      <Card.Title className="title-name mb-0">
                        <p>Created by</p>
                        <h3 className="titlename">
                          {" "}
                          <div
                            className="bg-white rounded-pill"
                            style={{ width: "27px", height: "27px" }}
                          ></div>{" "}
                          James Watson
                        </h3>
                      </Card.Title>
                      <div className="card-info-igm">
                        <Card.Img
                          variant="top"
                          src={img.src}
                          alt={img.name}
                          className="cats-images"
                        />
                      </div>
                      <Card.Text className=" font-stlye-text mb-0">
                        <h3>Nfts Collections</h3>
                        <p className="mb-0">
                          Created by
                          <span> James Watson</span>
                        </p>
                      </Card.Text>
                    </Card>
                  </Col>
                ))}
            </Row>
          )
        )}
        <button className="expolre-btn">
          Explore More
        </button>
      </div>
      {/* topcreater */}
      <div className="top-creater">
        <div className="checkout">
          <h3>Top creators</h3>
          <p>Checkout Top Rated Creators on the NFT Marketplace</p>
        </div>{" "}
        {Array.from({ length: Math.ceil((images.length = 4)) }).map(
          (_, rowIndex) => (
            <Row key={rowIndex} className="nfts-boxes-divs-stlye">
              {images
                .slice(rowIndex * 4, rowIndex * 4 + 4)
                .map((img, colIndex) => (
                  <Col key={colIndex} className="p-0 crd-derction">
                    <Card className="image-card">
                      <div>
                        <Card.Title className="title-names mb-0">
                          <p className="mb-0">{colIndex + 1}</p>{" "}
                        </Card.Title>
                        <div className="d-flex justify-content-center">
                          <Card.Img
                            variant="top"
                            src={img.src}
                            alt={img.name}
                            className="cats-imges"
                          />
                        </div>
                        <div className="card-info">
                          <Card.Text className="d-flex flex-column ether-img mb-0">
                            <h3>Name NFT</h3>
                            <p className="mb-0">
                              <span>Total Sales:</span> 34.53 ETH
                            </p>
                          </Card.Text>
                        </div>
                      </div>
                    </Card>
                  </Col>
                ))}
            </Row>
          )
        )}
      </div>
      {/* roadmap */}
      <div>
        <h3 className="roadmap mb-0">Road Map</h3>
        <div className="d-flex justify-content-center roadmap-img">
          <img src={roadmap} width={"80%"} />
        </div>
      </div>
      {/* how its work */}
      <img src={str1} className="str1" />
      <img src={str2} className="str2" />
      <Container fluid className="bg-black Row-RHS">
        <h3 className="how-it-works">how it works</h3>
        <Row className="d-flex align-items-center str12 justify-content-center">
          <Col lg={6} className="col-RHS1">
            <img src={wallet} className="imges-nfts" />
          </Col>
          <Col lg={6} className="col-RHS1 ">
            <h3>
              Setup and Connec <br /> your Wallet.
            </h3>
            <p className="mb-0">
              Lorem ipsum dolor sit amet consectetur. Donec vitae pellentesque
              <br />
              nunc ut sit a volutpat elementum.Nunc elit nisi pellentesque porta
              <br />
              elementum. Id mattis neque diam nulla. Amet et a felis
              pellentesque <br />
              sed odio.
            </p>
          </Col>
        </Row>
        <Row className="">
          <Col lg={6} className="col-RHS2 str22">
            <h3>
            Create your Own <br /> Digital NFT
            </h3>
            <p className="mb-0">
              Lorem ipsum dolor sit amet consectetur. Donec vitae pellentesque
              <br />
              nunc ut sit a volutpat elementum.Nunc elit nisi pellentesque porta
              <br />
              elementum. Id mattis neque diam nulla. Amet et a felis
              pellentesque
              <br /> sed odio.
            </p>
          </Col>
          <Col lg={6} className="col-RHS2">
            <img src={monkey} className="imges-nfts" />
          </Col>
        </Row>
        <Row className="">
          <Col lg={6} className="col-RHS">
            <img src={dollarimg} className="imges-nfts" />
          </Col>
          <Col lg={6} className="col-RHS">
            <h3>
              Setup and Connect <br />
              your Wallet.
            </h3>
            <p className="mb-0">
              Lorem ipsum dolor sit amet consectetur. Donec vitae pellentesque
              <br />
              nunc ut sit a volutpat elementum.Nunc elit nisi pellentesque porta
              <br />
              elementum. Id mattis neque diam nulla. Amet et a felis
              pellentesque <br />
              sed odio.
            </p>
          </Col>
        </Row>
      </Container>
      {/* join now */}
      <div className="bg-footer">
        <h3 className="join-text mb-0">Join Our Community</h3>
        <p className="lorem mb-0">
          Lorem ipsum dolor sit amet consectetur. Donec vitae pellentesque nunc
          ut sit a volutpat elementum. Nunc <br /> elit nisi pellentesque porta
          elementum. Id mattis neque diam nulla. Amet et a felis pellentesque
          sed odio.
        </p>
        <div className="input-stlying">
          <input type="text" className="email-input" placeholder="Your Email" />
          <button className="join-btn">Join Now</button>
        </div>
        <p className="nftmarket mb-0">Ⓒ NFT Market. Use this template freely.</p>
      </div>
    </div>
  );
}

export default LanidingPae;
