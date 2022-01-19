import React from "react";
import { useState } from "react";
import "../vieuwStyle/work.css";
import { FaTimes } from "react-icons/fa";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import { ReactComponent as Wave } from "../img/wave1.svg";
import stancorstjens from "../img/stancorstjens.png";
import springfield from "../img/springfield.png";
import portfolio from "../img/portfolio.png";
import wojoCard from "../img/wojoCard.png";
import axi from "../img/axi.png"

const Work = () => {
  const [dev, setDev] = useState(true);
  const [des, setDes] = useState(true);
  const [vjava, setVjava] = useState(true);
  const [react, setReact] = useState(true);

  return (
    <div id="workPage">
    <div id="workHeader">
      <h1 className="white">My Work</h1>
      <div id="workFilter">
        <h2 className="white">Filters:</h2>
        <div id="workFilterOptions">
          <p
            className={dev ? "filterOption showWork" : "filterOption"}
            onClick={() => {
              setDev(!dev);
            }}
          >
            Development {dev ? <FaTimes fill="#fff" className="arrow" /> : null}
          </p>
          <p
            className={des ? "filterOption showWork" : "filterOption"}
            onClick={() => {
              setDes(!des);
            }}
          >
            Design {des ? <FaTimes fill="#fff" className="arrow" /> : null}
          </p>
          <p
            className={vjava ? "filterOption showWork" : "filterOption"}
            onClick={() => {
              setVjava(!vjava);
            }}
          >
            Vanilla JavaScript{" "}
            {vjava ? <FaTimes fill="#fff" className="arrow" /> : null}
          </p>
          <p
            className={react ? "filterOption showWork" : "filterOption"}
            onClick={() => {
              setReact(!react);
            }}
          >
            React {react ? <FaTimes fill="#fff" className="arrow" /> : null}
          </p>
          </div>
        </div>
      </div>
      <Wave id="wave3" />
      <div id="workPageWrapper">
        <div
          className={
            (dev === false) & (des === false) & (vjava === false)
              ? "hideItems"
              : "workItem"
          }
        >

        <figure className="snip1206">
        <img src={stancorstjens} alt="sample74"/>
        <figcaption>
          <h2>Stan Corstjens tegels en tegelwerken</h2>
          <p>Design and development<br />HTML, CSS, vanilla JavaScript <br />
          <a href="#" className="white">Learn More &gt;</a>
          </p>
        </figcaption>
      </figure>

        </div>

        <div
          className={
            (dev === false) & (des === false) & (vjava === false)
              ? "hideItems"
              : "workItem"
          }
        >

        <figure className="snip1206">
        <img src={springfield} alt="sample74"/>
        <figcaption>
          <h2>Springfield '75</h2>
          <p>Design and development<br />HTML, CSS, vanilla JavaScript <br />
          <a href="#" className="white">Learn More &gt;</a>
          </p>
        </figcaption>
      </figure>
        </div>

        <div className={des === false ? "hideItems" : "workItem"}>
        <figure className="snip1206">
        <img src={wojoCard} alt="sample74"/>
        <figcaption>
          <h2>Wojo - thank you card</h2>
          <p>Design<br />Adobe Illustrator <br />
          <a href="#" className="white">Learn More &gt;</a>
          </p>
        </figcaption>
      </figure>

        </div>

        <div
          className={
            (dev === false) & (des === false) & (react === false)
              ? "hideItems"
              : "workItem"
          }
        >
        <figure className="snip1206">
        <img src={portfolio} alt="sample74"/>
        <figcaption>
          <h2>Portfolio Daan Kleinen</h2>
          <p>Design and development<br /> Html,Css,React<br />
          <a href="#" className="white">Learn More &gt;</a>
          </p>
        </figcaption>
      </figure>
        </div>

        <div
          className={
            (dev === false) & (des === false) & (react === false)
              ? "hideItems"
              : "workItem"
          }
        >
        <figure className="snip1206">
        <img src={axi} alt="sample74"/>
        <figcaption>
          <h2>AXI - school Project</h2>
          <p>Design and development<br /> Html,Css,React<br />
          <a href="#" className="white">Learn More &gt;</a>
          </p>
        </figcaption>
      </figure>
        </div>

        <div
          className={
            (dev === true) |
            (des === true) |
            (react === true) |
            (vjava === true)
              ? "hideItems"
              : "workItem"
          }
        >
          <h2 id="NoWorkItems">
            All filters are off!<br />
            Select one from above
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Work;
