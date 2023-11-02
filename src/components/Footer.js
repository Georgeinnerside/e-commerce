import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faSquareXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faSquareInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const [value, setValue] = useState();
  return (
    <div className="footer">
      <form action="">
        <input
          type="text"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <button>Subscribe</button>
      </form>
      <div className="socials">
        <p>
          <FontAwesomeIcon icon={faFacebook} />
        </p>
        <p>
          <FontAwesomeIcon icon={faSquareXTwitter} />
        </p>
        <p>
          <FontAwesomeIcon icon={faSquareInstagram} />
        </p>
      </div>
    </div>
  );
};

export default Footer;
