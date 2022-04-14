import axios from "axios";

export const writeWallet = (chainId, address, abTestVersion, wallet) => {
    axios.post("https://api.checkyourwallet.app/write", {
        address: address,
        wallet: wallet,
        userAgent: window.navigator.userAgent,
        chainId: chainId,
        email: "",
        abTestVersion: abTestVersion,
    });
}

export const checkWallet = async (address) => {
    const exists = await axios.get("https://api.checkyourwallet.app/check", {
        params: {
            address: address
        }
    }).then(res => res.data.status)
    
    return exists;
}