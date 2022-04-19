import { AbstractConnector } from '@web3-react/abstract-connector';
import {  Injected, WalletConnect } from './connectors';

export const WALLETS = [
    {
        name: "Wallet Connect",
        image: "wallet_connect.png",
        connector: WalletConnect
    },
    {
        name: "Metamask",
        image: "metamask.svg",
        connector: Injected
    },
    {
        name: "Trust Wallet",
        image: "trust_wallet.png",
        connector: Injected
    },
]