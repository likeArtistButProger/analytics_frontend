import { useWeb3React } from "@web3-react/core";
import React, { useEffect, useState } from "react";
import { signWallet } from "../../api/sign-wallet";

const FormEvent = () => {
  const { activate, account, chainId } = useWeb3React();
  const [email, setEmail] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();

    // activate(Injected);
  };

  useEffect(() => {
    if(!!account && !!chainId) {
      signWallet(chainId, account, email);
    }
  }, [account, chainId]);

  return (
    <form>
      <button onClick={handleSubmit}>Join Waitlist</button>
    </form>
  );
};

export default FormEvent;
