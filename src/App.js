import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Routes from "./router/Routes";
import ScrollToTop from "./components/ScrollToTop";
import { Web3ReactProvider } from "@web3-react/core";
import AOS from "aos";
import {I18nextProvider} from 'react-i18next';
import i18n from "./i18n";
import AuthorizeModalProvider from "./AuthorizeModal/AuthorizeModalProvider";
import { useAutoConnect } from "./hooks";

import "aos/dist/aos.css";
import { ethers } from "ethers";

const getLibrary = (connector) => {
  const library = new ethers.providers.Web3Provider(connector);
  library.pollingInterval = 15000;

  return library;
}

const App = () => {

  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <AuthorizeModalProvider>
        <I18nextProvider i18n={i18n}>
          <Helmet>
            <title>Check Your Wallet | Manage your approvals</title>
            <meta property="og:site_name" content="deski" />
            <meta
              property="og:url"
              content="https://themeforest.net/user/ib-themes"
            />
            <meta property="og:type" content="website" />
            <meta
              property="og:title"
              content="Check Your Wallet | Manage your approvals"
            />
            <meta
              name="keywords"
              content="Crypto, Cybersecurity, Security, Wallet Security"
            />
            <meta
              name="description"
              content="Free and Secure. Check your wallet approvals and what projects you gave access to. Disable dangerous approvals in 1 click!"
            />
            <meta name="description" content="Portfolio & Agency React Template" />
          </Helmet>
          {/* End Seo Helmt */}

          <ScrollToTop />
          <Routes />
        </I18nextProvider>
      </AuthorizeModalProvider>
    </Web3ReactProvider>
  );
};

export default App;
