import React from "react";

import Styles from "./Header.module.css";
import MainNavBar from "./MainNavBar";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Header = (props) => {
  const handleSwap = () => {
    window.zeroExInstant.render(
      {
        orderSource: "https://api.0x.org/sra/",
        affiliateInfo: {
          feeRecipient: "0xbb99ec9496007cfc2d965ce65543c4f8398163be",
          feePercentage: 0.02,
        },
      },
      "body"
    );
  };
  return (
    <header className={Styles.mainHeader}>
      <MainNavBar
        styles={Styles}
        shouldManipulate={true}
        isAdmin={props.isAdmin}
      />

      <div className='container'>
        <div className={Styles.headerContent}>
          <h1>AltsSwap</h1>

          <p>
            the most convenient way to swap your crypto, while supporting your
            group too!
          </p>

          <button onClick={handleSwap}>Instant Swap</button>
        </div>
      </div>
    </header>
  );
};
const mapStateToProps = (state) => {
  const { isAdmin } = state.auth;
  return {
    isAdmin,
  };
};
export default connect(mapStateToProps)(Header);
