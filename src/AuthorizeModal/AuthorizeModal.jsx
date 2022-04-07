import React, { useRef } from "react";
import { createPortal } from 'react-dom';
import { WALLETS, connectorKey } from '../constants';
import { useAuthorizeModal } from "./AuthorizeModalProvider";
import { useWeb3React } from "@web3-react/core";

import "./styles.scss";
import { useClickOutside } from "../hooks";

const AuthorizeModal = () => {
    const Modal = useRef(null);

    const { activate } = useWeb3React();
    const { hideModal } = useAuthorizeModal();

    const connectWallet = (wallet) => {
        activate(wallet.connector);
        localStorage.setItem(connectorKey, wallet.name);
        hideModal();
    };

    useClickOutside(Modal, () => {
        hideModal();
    });

    return createPortal(
        <div>
            <div className="overlay"></div>
            <div id="connect-modal-wrapper" className="modal-wrapper">
                <div className="modal-conn" ref={Modal}>
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
            </div>
        </div>,
        document.body
    )
}

export default AuthorizeModal;