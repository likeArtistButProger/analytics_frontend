import { useWeb3React } from "@web3-react/core";
import React, { useEffect, useState } from "react";
import { signWallet } from "../../api/sign-wallet";
import { Injected } from "../../constants/connectors";

const FormEvent = () => {
  const { activate, account, chainId } = useWeb3React();
  const [email, setEmail] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();

    activate(Injected);
  };

  useEffect(() => {
    if(!!account && !!chainId) {
      signWallet(chainId, account, email);
    }
  }, [account, chainId]);

  return (
    <form>
      <input value={email} onChange={({ target: { value } }) => setEmail(value)} type="text" placeholder="ihidago@ujufidnan.gov" />
      <button onClick={handleSubmit}>Try free demo</button>
    </form>
  );
};

export default FormEvent;
