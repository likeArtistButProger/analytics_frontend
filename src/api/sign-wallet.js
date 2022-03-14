import axios from "axios";

export const signWallet = (chainId, address, email) => {
    console.log("WALLET SIGN IN:");
    axios.post("https://api.checkyourwallet.io/write", {
        address: address,
        wallet: "Metamask",
        userAgent: window.userAgent,
        chainId: chainId,
        email: email,
        abTestVersion: "100500"
    });
}