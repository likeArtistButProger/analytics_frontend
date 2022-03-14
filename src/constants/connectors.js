import { InjectedConnector } from "@web3-react/injected-connector";

const Injected = new InjectedConnector({
    supportedNetworks: [1, 10, 56, 42161]
});

export { Injected };