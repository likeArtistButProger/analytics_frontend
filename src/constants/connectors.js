import { Connectors } from "web3-react";

const { InjectedConnector } = Connectors;

const Injected = new InjectedConnector({
    supportedNetworks: [1, 10, 56, 42161]
});

export { Injected };