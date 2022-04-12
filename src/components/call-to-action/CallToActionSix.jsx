import React from "react";
import { useAuthorizeModal } from "../../hooks";

const CallToActionSix = () => {
  const { showModal } = useAuthorizeModal();

  return (
    <div className="title-style-twelve">
    <h2>
      <span
        >Check Your Wallet<img src="images/shape/line-shape-13.svg" alt="sahpe"
      /></span>
    </h2>
    <p className="pt-45 pb-50 text-dark">
      Check your wallet's dangerous approvals <br />for free and securely and
      protect it in 1 click!<br />
    </p>
    <button onClick={showModal} className="theme-btn-nine">Join waitlist</button>
  </div>
  );
};

export default CallToActionSix;
