import React, { useEffect, useRef } from "react";
import { createPortal } from 'react-dom';
import { WALLETS, connectorKey } from '../constants';
import { useAuthorizeModal } from "./AuthorizeModalProvider";
import { useWeb3React } from "@web3-react/core";

import "./styles.scss";
import { useClickOutside } from "../hooks";

const AuthorizeModal = () => {
    const Modal = useRef(null);

    const { activate, active, error } = useWeb3React();
    const { hideModal } = useAuthorizeModal();

    const connectWallet = (wallet) => {
        activate(wallet.connector);
        localStorage.setItem(connectorKey, wallet.name);
        // hideModal();
    };

    useClickOutside(Modal, () => {
        hideModal();
    });

    useEffect(() => {
        console.log({error});
    }, [error])

    return createPortal(
        <div>
            <div className="overlay"></div>
            <div id="connect-modal-wrapper" className="modal-wrapper">
                <div ref={Modal}>
                    {   !active && !error &&
                        <div className="wallets">
                            <div className="modal-conn">
                                {
                                    WALLETS.map((wallet) =>
                                        <div key={wallet.name} className="wallet">
                                            <div onClick={() => {connectWallet(wallet)}} className="wallet-content">
                                                <img className="wallet-image" src={`/svg/wallets/${wallet.image}`} alt="wallet" />
                                                <span className="wallet-name">{wallet.name}</span>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                            <div className="terms">
                                <h4>Join waitlist</h4>
                                <h5>Connect your favorite wallet to join waitlist and be the first to know about the launch of the project.</h5>
                            </div>
                        </div>
                    }
                    {
                        active &&
                        <div className="success-msg" style={{ textAlign: "center" }}>
                            <h3>Congratulations! </h3>
                            {/* <br /> */}
                            <h4>You have been added to the waiting list!</h4>
                            {/* <br /> */}
                            <h5>You'll  be the first to know about the launch of the project and you'll be pleasantly rewarded for your wait! <br />
                            In the meantime, you can join our group to keep up with the announcements.</h5>
                        </div>
                    }
                    {
                        error &&
                        <div className="error-msg" style={{ textAlign: "center" }}>
                            <h3>You can't join waitlist :( </h3>
                            {/* <br /> */}
                            <h4>Please install browser plugin or wallet app and refresh this page.</h4> 
                            {/* <br /> */}
                            <h5>For example, we recommend <a style={{ color: "blue" }} href="https://metamask.io/" target="_blank" referrerPolicy="no-referrer">Metamask</a></h5>
                            {/* <br /> */}
                            If you can't install browser plugin or wallet - you can join us <a style={{ color: "blue" }} href="https://t.me/checkyourwallet" target="_blank" referrerPolicy="no-referrer">https://t.me/checkyourwallet</a>
                        </div>
                    }
                </div>
            </div>
        </div>,
        document.body
    )
}

export default AuthorizeModal;