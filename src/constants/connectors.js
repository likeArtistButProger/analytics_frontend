import { InjectedConnector } from '@web3-react/injected-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';

export const Injected = new InjectedConnector({
    supportedChainIds: [1, 3, 4, 5, 10, 42, 56, 97, 100, 128, 137, 250, 1337, 42161, 42220, 43114]
});

export const WalletConnect = new WalletConnectConnector({
    rpc: { 1: (process.env.REACT_APP_RPC_ETH_MAINNET), 56: (process.env.REACT_APP_RPC_BSC_MAINNET), 97: (process.env.REACT_APP_RPC_BSC_TESTNET) },
    qrcode: true,
    pollingInterval: 12000
})
