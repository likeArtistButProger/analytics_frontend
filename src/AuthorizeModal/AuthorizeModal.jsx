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
                                ГОТОВО УРА
                            </div>
                        </div>
                    }
                    {
                        active &&
                        <div className="wallets" style={{ textAlign: "center" }}>
                            УРА ТЫ ПОБЕДИЛ
                        </div>
                    }
                    {
                        error?.name === "NoEthereumProviderError" &&
                        <div className="error-msg" style={{ textAlign: "center" }}>
                            Please insrall browser <br />
                            plugin or wallet app and refresh this page. <br />
                            For example we recommend {" "}
                            <a style={{ color: "blue" }} href="https://metamask.io/" target="_blank" referrerPolicy="no-referrer">Metamask</a>
                        </div>
                    }
                </div>
            </div>
        </div>,
        document.body
    )
}

export default AuthorizeModal;