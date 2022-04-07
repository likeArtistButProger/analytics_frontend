import type { NetworkSetupConfig } from '../types';

export const networkSetupConfigs: {
    eth: NetworkSetupConfig,
    bsc: NetworkSetupConfig,
    polygon: NetworkSetupConfig,
    optimism: NetworkSetupConfig
} = {
    eth: {
        chainId: "0x1",
        chainName: "Ethereum Mainnet",
        nativeCurrency: {
            name: "Ether",
            symbol: "ETH",
            decimals: 18,
            scanAddress: '-'
        },
        // TODO(Nikita): Change it to our node's rpcUrl
        rpcUrls: ["http://10.2.0.19:8545"],
        blockExplorerUrls: ["https://etherscan.io/"]
    },
    bsc: {
        chainId: `0x38`,
        chainName: 'Binance Smart Chain Mainnet',
        nativeCurrency: {
          name: 'Binance Smart Chain Native Token',
          symbol: 'bnb',
          decimals: 18,
          scanAddress: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c'
        },
        rpcUrls: ["https://bsc-dataseed.binance.org/"],
        blockExplorerUrls: [`https://bscscan.com/`]
    },
    polygon: {
        chainId: `0x89`,
        chainName: 'Polygon Mainnet',
        nativeCurrency: {
          name: 'Matic',
          symbol: 'MATIC',
          decimals: 18,
          scanAddress: '-'
        },
        rpcUrls: ["https://rpc-mainnet.maticvigil.com/"],
        blockExplorerUrls: [`https://polygonscan.com/`]
    },
    optimism: {
        chainId: `0xA`,
        chainName: 'Optimistic Mainnet',
        nativeCurrency: {
          name: 'Ethereum',
          symbol: 'ETH',
          decimals: 18,
          scanAddress: '0x4200000000000000000000000000000000000006'
        },
        rpcUrls: ["https://mainnet.optimism.io/"],
        blockExplorerUrls: [`https://optimistic.etherscan.io/`]
    },
}
