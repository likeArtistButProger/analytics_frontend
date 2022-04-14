import { useWeb3React } from "@web3-react/core";
import React, { useEffect, useState } from "react";
// import { signWallet } from "../../api/sign-wallet";
import { useAuthorizeModal } from "../../AuthorizeModal";

const FormEvent = () => {
  const { activate, account, chainId } = useWeb3React();
  const [email, setEmail] = useState("");

  const { showModal } = useAuthorizeModal();

  // useEffect(() => {
  //   if(!!account && !!chainId) {
  //     signWallet(chainId, account, email);
  //   }
  // }, [account, chainId]);

  return (
    <button className="banner-eleven-form-btn" onClick={showModal}>Join Waitlist</button>
  );
};

export default FormEvent;
