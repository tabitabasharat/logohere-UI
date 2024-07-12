import React from "react";
import Header from "../header/Header";
import { Row, Container, Col, Card, Button } from "react-bootstrap/esm";
import catimg from "../../assets/catmain.svg";
import "./LanidingPae.css";
import cats from "../../assets/cats.svg";
import wallet from "../../assets/image 110.png";
import dollarimg from "../../assets/image 113.png";
import monkey from "../../assets/Ellipse 129.png";
import monky from "../../assets/Ellipse 137.png";
import girl from "../../assets/Ellipse 138.png";
import dog from "../../assets/Ellipse 136.png";
import skull from "../../assets/Ellipse 135.png";
import skull1 from "../../assets/Ellipse 133.png";
import skull2 from "../../assets/Ellipse 130.png";
import skull3 from "../../assets/Ellipse 134.png";


const images = [{ src: monky }, { src: girl }, { src: dog }, { src: skull },{ src: skull1 },{ src: skull2 },{ src: skull3 }];

const shuffleImages = (images) => {
  const shuffledImages = [];
  for (let i = 0; i < 3; i++) {
    const rowImages = [...images];
    for (let j = 0; j < 2; j++) {
      const randomIndex = Math.floor(Math.random() * rowImages.length);
      shuffledImages.push(rowImages.splice(randomIndex, 1)[0]);
    }
  }
  return shuffledImages;
};

function LanidingPae() {
  const shuffledImages = shuffleImages(images);
  return (
    <div className="main-bg-black-n-white-img">
      <Header />
      {/* maindiv */}
      {/* <Container fluid className="bg-img-container">
        <Row className="distance">
          <Col>
            {" "}
            <div className="text-font">
              <h3>
                We Have High
                <br /> Quality <span> NFT</span> <br /> Collections
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur. Rhoncus massa
                suspendisse turpis sed viverra tempus tortor. Habitant accumsan
                sagittis in facilisi placerat ac. Laoreet scelerisque viverra
                viverra ornare fermentum faucibus sit purus volutpat. Egestas
                lectus ornare convallis ornare nullam enim neque.
              </p>
            </div>
            <div className="butons-stlying">
              <button className="get-btn"> Get Whitelist</button>
              <button className="contact-btn"> Contact Us</button>
            </div>
            <div className="card-img-bg">
                <div className="card-likes-text-stlying"> <h3>240k+</h3> <p>Total Sale</p></div>
                <div className="card-likes-text-stlying"> <h3>100k+</h3> <p>Auctions</p></div>
                <div className="card-likes-text-stlying"> <h3>240k+</h3> <p>Artists</p></div>
            </div>
          </Col>
          <Col>
            <img src={catimg} />
          </Col>
        </Row>
      </Container>  */}
      {/* Aboutus */}
      {/* <Container fluid className="bg-black">
        <h3 className="about-us">About us</h3>
        <div className="aboutUs-bg-color">
          <Row className="abotus-row">
            <Col>
              <img src={cats} className="cats-img" />
            </Col>
            <Col>
              <p>
                Lorem ipsum dolor sit amet consectetur. Pharetra faucibus donec
                ultrices eros elit metus morbi aliquam quis. Suspendisse massa
                ullamcorper tortor morbi nisi leo. Ultrices leo vel tincidunt
                nunc eget elit. Gravida et duis ipsum pellentesque libero.
                Tellus rhoncus metus et eget mattis fringilla nec id. Amet
                ultrices quam ridiculus tellus. Leo adipiscing tincidunt amet
                nisi semper adipiscing quam in est. Tempor sed dui nunc diam
                adipiscing at.
              </p>
              <p>
                Tellus rhoncus metus et eget mattis fringilla nec id. Amet
                ultrices quam ridiculus tellus. Leo adipiscing tincidunt amet
                nisi semper adipiscing quam in est. Tempor sed dui nunc diam
                adipiscing at.
              </p>
              <button className="Connect-Wallet-btn">Connect Wallet</button>
            </Col>
          </Row>
        </div>
      </Container> */}
      {/* how its work */}
      {/* <Container fluid className="bg-black Row-RHS">
        <h3 className="how-it-works">how it works</h3>
        <Row className="d-flex align-items-center justify-content-center">
          <Col lg={6} className="col-RHS">
            <img src={wallet}    className="imges-nfts"/>
          </Col>
          <Col lg={6} className="col-RHS">
            <h3>Setup and Connect your Wallet.</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Donec vitae pellentesque
              nunc ut sit a volutpat elementum.Nunc elit nisi pellentesque 
              porta elementum. Id mattis neque diam nulla. Amet et a felis
              pellentesque sed odio.
            </p>
          </Col>
        </Row>
        <Row className="">
          <Col lg={6} className="col-RHS">
            <h3>Setup and Connect your Wallet.</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Donec vitae pellentesque
              nunc ut sit a volutpat elementum.Nunc elit nisi pellentesque 
              porta elementum. Id mattis neque diam nulla. Amet et a felis
              pellentesque sed odio.
            </p>
          </Col>
          <Col lg={6}  className="col-RHS">
            <img src={monkey}   className="imges-nfts"  />
          </Col>
        </Row>
        <Row className="">
          <Col lg={6} className="col-RHS">
            <img src={dollarimg}  className="imges-nfts"/>
          </Col >
          <Col lg={6} className="col-RHS">
            <h3>Setup and Connect your Wallet.</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Donec vitae pellentesque
              nunc ut sit a volutpat elementum.Nunc elit nisi pellentesque 
              porta elementum. Id mattis neque diam nulla. Amet et a felis
              pellentesque sed odio.
            </p>
          </Col>
        </Row>
      </Container> */}
      {/* top creater */}
       <div className="top-creater">
        <div className="checkout2">
        <h3>Top Collections</h3>
        <p >The largest and unique Super rare NFT marketplace <br/>
        For crypto-collectibles</p>
        </div>
        <div>
          {" "}
          {Array.from({ length: 3 }).map((_, rowIndex) => (
            <Row key={rowIndex} className="nfts-boxes-divs-stlye1">
              {shuffledImages
                .slice(rowIndex * 3, rowIndex * 3 + 3)
                .map((img, colIndex) => (
                  <Col key={colIndex} className="p-0 crd-derction ">
                    <Card className="image-card1">
                      <Card.Img
                        variant="top"
                        src={img.src}
                        alt={img.name}
                        className="cats-imges"
                      />
                      <div>
                        <Card.Title className="title-names mb-0">
                          Name NFT
                        </Card.Title>
                        <div className="card-info">
                          <Card.Text className="d-flex ether-img mb-0">
                            <p className="mb-0">
                              {" "}
                              <span>Total Sales:</span>
                              34.53 ETH
                            </p>
                          </Card.Text>
                        </div>
                      </div>
                    </Card>
                  </Col>
                ))}
            </Row>
          ))}
        </div>
      </div>
      {/* <div className="top-creater">
        <div className="checkout">
        <h3>Top creators</h3>
        <p >Checkout Top Rated Creators on the NFT Marketplace</p>
        </div>
        <div>
          {" "}
          {Array.from({ length: 4 }).map((_, rowIndex) => (
            <Row key={rowIndex} className="nfts-boxes-divs-stlye">
              {shuffledImages
                .slice(rowIndex * 4, rowIndex * 4 + 4)
                .map((img, colIndex) => (
                  <Col key={colIndex} className="p-0 crd-derction ">
                    <Card className="image-card">
                      <Card.Img
                        variant="top"
                        src={img.src}
                        alt={img.name}
                        className="cats-imges"
                      />
                      <div>
                        <Card.Title className="title-names mb-0">
                          Name NFT
                        </Card.Title>
                        <div className="card-info">
                          <Card.Text className="d-flex ether-img mb-0">
                            <p className="mb-0">
                              {" "}
                              <span>Total Sales:</span>
                              34.53 ETH
                            </p>
                          </Card.Text>
                        </div>
                      </div>
                    </Card>
                  </Col>
                ))}
            </Row>
          ))}
        </div>
      </div> */}
      {/* join now */}
      {/* <div className="bg-footer">
        <h3 className="join-text">Join Our Community</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur. Donec vitae pellentesque nunc
          ut sit a volutpat elementum. Nunc <br/> elit nisi pellentesque porta
          elementum. Id mattis neque diam nulla. Amet et a felis pellentesque
          sed odio.
        </p>
        <div className="input-stlying">
          <input type="text" className="email-input" placeholder="Your Email"/>
          <button className="join-btn">Join Now</button>
        </div>
        <p className="nft-marketing ">Ⓒ NFT Market. Use this template freely.</p>
      </div> */}
    </div>
  );
}

export default LanidingPae;
