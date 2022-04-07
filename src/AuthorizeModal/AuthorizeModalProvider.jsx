import React, { useCallback, useContext, useState } from "react";
import AuthorizeModal from "./AuthorizeModal";

const AuthorizeModalContext = React.createContext({
    showModal: () => {},
    hideModal: () => {},
})

const AuthorizeModalProvider = ({children}) => {
    const [show, setShow] = useState(false);

    const showModal = useCallback(() => {
        setShow(true);
    }, [setShow])

    const hideModal = useCallback(() => {
        setShow(false);
    }, [setShow]);

    return (
        <AuthorizeModalContext.Provider
            value={{
                showModal,
                hideModal
            }}
        >
            {
                show && <AuthorizeModal />
            }
            {children}
        </AuthorizeModalContext.Provider>
    )
}

const useAuthorizeModal = () => {
    const helpers = useContext(AuthorizeModalContext);

    return helpers;
}

export { useAuthorizeModal };
export default AuthorizeModalProvider;