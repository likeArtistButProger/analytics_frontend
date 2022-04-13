import React, { useCallback, useContext, useEffect, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { WALLETS, connectorKey } from '../constants';
import Modal from "react-modal";

import "./styles.scss";

const AuthorizeModalContext = React.createContext({
    showModal: () => {},
    hideModal: () => {},
})

const AuthorizeModalProvider = ({children}) => {
    const { account, activate, active, error, setError } = useWeb3React();
    const [show, setShow] = useState(false);

    const showModal = useCallback(() => {
        setShow(true);
    }, [setShow])

    const hideModal = useCallback(() => {
        setShow(false);
        setError(null);
    }, [setShow]);

    const connectWallet = async (wallet) => {
        await activate(wallet.connector)
        localStorage.setItem(connectorKey, wallet.name);

        // hideModal();
    };

    useEffect(() => {
        if(!!error) {
            localStorage.removeItem(connectorKey);
        }
    }, [error])

    return (
        <AuthorizeModalContext.Provider
            value={{
                showModal,
                hideModal
            }}
        >
            {children}
            <Modal
                isOpen={show}
                onRequestClose={hideModal}
                contentLabel="My dialog"
                className="custom-modal  modal-contact-popup-one"
                overlayClassName="custom-overlay"
                closeTimeoutMS={500}
            >
                <div className="box_inner ">
                <main className="main-body box_inner modal-content clearfix">
                    <button className="close" onClick={hideModal}>
                        <img src="images/icon/close.svg" alt="close" />
                    </button>

                    <div className="left-side">
                        <div className="d-flex flex-column justify-content-between h-100">
                            <img
                            src="images/assets/main_screen.png"
                            alt=""
                            className="illustration mt-auto"
                            />
                        </div>
                    </div>
                    <div className="right-side">
                        {   !active && !error &&
                            <div className="wallets">
                                <div className="terms">
                                    <h3>Join waitlist</h3>
                                    <h4>Connect your favorite wallet to join waitlist and be the first to know about the launch of the project.</h4>
                                </div>
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
                            </div>
                        }
                        {
                            active &&
                            <div className="success-msg">
                                <h3>Congratulations!</h3>
                                <br />
                                <h4>Your wallet {`${account.substring(0, 6)}...${account.substring(account.length-4)}`} have been added to the waiting list!</h4>
                                <br />
                                <h5>
                                    You'll be the first to know about the launch of the project and you'll be pleasantly rewarded for your wait! <br/>
                                    In the meantime, you can join our group to keep up with the announcements.
                                    <br/>
                                    <a style={{ color: "blue" }} href="https://t.me/checkyourwallet" target="_blank" referrerPolicy="no-referrer">https://t.me/checkyourwallet</a>
                                    
                                </h5>
                            </div>
                        }
                        {
                            !!error &&
                            <div className="error-msg">
                                <h3>You can't join waitlist :( </h3>
                                <br />
                                <h4>Please install browser plugin or wallet app and refresh this page.</h4> 
                                <br />
                                <h5>For example, we recommend <a style={{ color: "blue" }} href="https://metamask.io/" target="_blank" referrerPolicy="no-referrer">Metamask</a></h5>
                                <br />
                                If you can't install browser plugin or wallet - you can join us <a style={{ color: "blue" }} href="https://t.me/checkyourwallet" target="_blank" referrerPolicy="no-referrer">https://t.me/checkyourwallet</a>
                            </div>
                        }
                    </div>
                </main>
                </div>
            </Modal>
        </AuthorizeModalContext.Provider>
    )
}

const useAuthorizeModal = () => {
    const helpers = useContext(AuthorizeModalContext);

    return helpers;
}

export { useAuthorizeModal };
export default AuthorizeModalProvider;