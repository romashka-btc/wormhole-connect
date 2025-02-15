import { CONFIG } from 'sdklegacy';
import { ChainsConfig } from '../types';

const { chains } = CONFIG.TESTNET;

export const TESTNET_CHAINS: ChainsConfig = {
  Bsc: {
    ...chains.Bsc!,
    displayName: 'BSC',
    explorerUrl: 'https://testnet.bscscan.com/',
    explorerName: 'BscScan',
    gasToken: 'BNB',
    chainId: 97,
    icon: 'Bsc',
    maxBlockSearch: 2000,
    symbol: 'BSC',
  },
  Avalanche: {
    ...chains.Avalanche!,
    displayName: 'Fuji',
    explorerUrl: 'https://testnet.avascan.info/blockchain/c/',
    explorerName: 'Avascan',
    gasToken: 'AVAX',
    chainId: 43113,
    icon: 'Avalanche',
    maxBlockSearch: 2000,
    symbol: 'AVAX',
  },
  Fantom: {
    ...chains.Fantom!,
    displayName: 'Fantom',
    explorerUrl: 'https://testnet.ftmscan.com/',
    explorerName: 'FtmScan',
    gasToken: 'FTM',
    chainId: 4002,
    icon: 'Fantom',
    maxBlockSearch: 2000,
    symbol: 'FTM',
  },
  Celo: {
    ...chains.Celo!,
    displayName: 'Alfajores',
    explorerUrl: 'https://explorer.celo.org/alfajores/',
    explorerName: 'Celo Explorer',
    gasToken: 'CELO',
    chainId: 44787,
    icon: 'Celo',
    maxBlockSearch: 2000,
    symbol: 'CELO',
  },
  Moonbeam: {
    ...chains.Moonbeam!,
    displayName: 'Moonbase',
    explorerUrl: 'https://moonbase.moonscan.io/',
    explorerName: 'Moonscan',
    gasToken: 'GLMR',
    chainId: 1287,
    icon: 'Moonbeam',
    maxBlockSearch: 2000,
    symbol: 'GLMR',
  },
  Solana: {
    ...chains.Solana!,
    displayName: 'Solana',
    explorerUrl: 'https://explorer.solana.com/',
    explorerName: 'Solana Explorer',
    gasToken: 'SOL',
    chainId: 0,
    icon: 'Solana',
    maxBlockSearch: 2000,
    symbol: 'SOL',
  },
  Sui: {
    ...chains.Sui!,
    displayName: 'Sui',
    explorerUrl: 'https://suiscan.xyz/testnet/',
    explorerName: 'Suiscan',
    gasToken: 'SUI',
    chainId: 0,
    icon: 'Sui',
    maxBlockSearch: 0,
    symbol: 'SUI',
  },
  Aptos: {
    ...chains.Aptos!,
    displayName: 'Aptos',
    explorerUrl: 'https://explorer.aptoslabs.com/',
    explorerName: 'Aptos Explorer',
    gasToken: 'APT',
    chainId: 0,
    icon: 'Aptos',
    maxBlockSearch: 0,
    symbol: 'APT',
  },
  Klaytn: {
    ...chains.Klaytn!,
    displayName: 'Kaia',
    explorerUrl: 'https://kairos.kaiascope.com/',
    explorerName: 'Kaia Scope',
    gasToken: 'KLAY',
    chainId: 1001,
    icon: 'Klaytn',
    maxBlockSearch: 2000,
    symbol: 'KLAY',
  },
  // TODO: SDKV2 - re-enable cosmos chains once cosmos gateway route is implemented
  //Sei: {
  //  ...chains.Sei!,
  //  displayName: 'Sei',
  //  explorerUrl: 'https://testnet.sei.explorers.guru/',
  //  explorerName: 'Sei Explorer',
  //  gasToken: 'SEI',
  //  chainId: 0,
  //  icon: 'Sei',
  //  maxBlockSearch: 0,
  //},
  //Osmosis: {
  //  ...chains.Osmosis!,
  //  displayName: 'Osmosis',
  //  explorerUrl: 'https://testnet.mintscan.io/osmosis-testnet/',
  //  explorerName: 'MintScan',
  //  gasToken: 'OSMO',
  //  chainId: 'osmo-test-5',
  //  icon: 'Osmosis',
  //  maxBlockSearch: 0,
  //},
  //Wormchain: {
  //  ...chains.Wormchain!,
  //  displayName: 'Wormchain',
  //  explorerUrl: '',
  //  explorerName: '',
  //  gasToken: 'WORM',
  //  chainId: 'wormchain-testnet-0',
  //  icon: 'Osmosis',
  //  maxBlockSearch: 0,
  //},
  //Cosmoshub: {
  //  ...chains.Cosmoshub!,
  //  displayName: 'Cosmoshub',
  //  explorerUrl: 'https://testnet.mintscan.io/cosmoshub-testnet/',
  //  explorerName: 'MintScan',
  //  gasToken: 'ATOM',
  //  chainId: 'theta-testnet-001',
  //  icon: 'Cosmoshub',
  //  maxBlockSearch: 0,
  //},
  //Evmos: {
  //  ...chains.Evmos!,
  //  displayName: 'Evmos',
  //  explorerUrl: 'https://testnet.mintscan.io/evmos-testnet/',
  //  explorerName: 'MintScan',
  //  gasToken: 'EVMOS',
  //  chainId: 'evmos_9000-4',
  //  icon: 'Evmos',
  //  maxBlockSearch: 0,
  //},
  //Kujira: {
  //  ...chains.Kujira!,
  //  displayName: 'Kujira',
  //  explorerUrl: 'https://finder.kujira.app/harpoon-4/',
  //  explorerName: 'Kujira Finder',
  //  gasToken: 'KUJI',
  //  chainId: 'harpoon-4',
  //  icon: 'Kujira',
  //  maxBlockSearch: 0,
  //},
  Sepolia: {
    ...chains.Sepolia!,
    displayName: 'Sepolia',
    explorerUrl: 'https://sepolia.etherscan.io/',
    explorerName: 'Etherscan',
    gasToken: 'ETHsepolia',
    chainId: 11155111,
    icon: 'Ethereum',
    maxBlockSearch: 2000,
    symbol: 'ETH',
  },
  ArbitrumSepolia: {
    ...chains.ArbitrumSepolia!,
    displayName: 'Arbitrum Sepolia',
    explorerUrl: 'https://sepolia.arbiscan.io/',
    explorerName: 'Etherscan',
    gasToken: 'ETHarbitrum_sepolia',
    chainId: 421614,
    icon: 'Arbitrum',
    maxBlockSearch: 2000,
    symbol: 'ARB',
  },
  BaseSepolia: {
    ...chains.BaseSepolia!,
    displayName: 'Base Sepolia',
    explorerUrl: 'https://base-sepolia.blockscout.com/',
    explorerName: 'Etherscan',
    gasToken: 'ETHbase_sepolia',
    chainId: 84532,
    icon: 'Base',
    maxBlockSearch: 2000,
    symbol: 'BASE',
  },
  OptimismSepolia: {
    ...chains.OptimismSepolia!,
    displayName: 'Optimism Sepolia',
    explorerUrl: 'https://sepolia-optimistic.etherscan.io/',
    explorerName: 'Etherscan',
    gasToken: 'ETHoptimism_sepolia',
    chainId: 11155420,
    icon: 'Optimism',
    maxBlockSearch: 2000,
    symbol: 'OP',
  },
  //Injective: {
  //  ...chains.Injective!,
  //  displayName: 'Injective',
  //  explorerUrl: 'https://testnet.explorer.injective.network',
  //  explorerName: 'Injective Explorer',
  //  gasToken: 'INJ',
  //  chainId: 'injective-888',
  //  icon: 'Injective',
  //  maxBlockSearch: 0,
  //},
  Scroll: {
    ...chains.Scroll!,
    displayName: 'Scroll',
    explorerUrl: 'https://sepolia.scrollscan.dev/',
    explorerName: 'Scrollscan',
    gasToken: 'ETHscroll',
    chainId: 534351,
    icon: 'Scroll',
    maxBlockSearch: 2000,
    symbol: 'SCR',
  },
  Blast: {
    ...chains.Blast!,
    displayName: 'Blast',
    explorerUrl: 'https://testnet.blastscan.io/',
    explorerName: 'Blastscan',
    gasToken: 'ETHblast',
    chainId: 168587773,
    icon: 'Blast',
    maxBlockSearch: 2000,
    symbol: 'BLAST',
  },
  Xlayer: {
    ...chains.Xlayer!,
    displayName: 'X Layer',
    explorerUrl: 'https://www.okx.com/web3/explorer/xlayer-test/',
    explorerName: 'OKX Explorer',
    gasToken: 'OKB',
    chainId: 195,
    icon: 'Xlayer',
    maxBlockSearch: 2000,
    symbol: 'OKX',
  },
  Mantle: {
    ...chains.Mantle!,
    displayName: 'Mantle',
    explorerUrl: 'https://explorer.testnet.mantle.xyz/',
    explorerName: 'Mantle Explorer',
    gasToken: 'MNT',
    chainId: 5003,
    icon: 'Mantle',
    maxBlockSearch: 2000,
    symbol: 'MNT',
  },
  Worldchain: {
    ...chains.Worldchain!,
    displayName: 'World Chain',
    explorerUrl: 'https://worldchain-sepolia.explorer.alchemy.com/',
    explorerName: 'World Scan',
    gasToken: 'ETHworldchain',
    chainId: 4801,
    icon: 'Worldchain',
    maxBlockSearch: 2000,
    symbol: 'WORLD',
  },
};
