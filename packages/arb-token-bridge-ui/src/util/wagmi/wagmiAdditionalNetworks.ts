import { Chain, sepolia as sepoliaDefault } from 'wagmi'

import { ether } from '../../constants'
import { ChainId, ChainWithRpcUrl, explorerUrls, rpcURLs } from '../networks'

export function chainToWagmiChain(chain: ChainWithRpcUrl): Chain {
  return {
    id: chain.chainID,
    name: chain.name,
    network: chain.name.toLowerCase().split(' ').join('-'),
    nativeCurrency: chain.nativeTokenData ?? ether,
    rpcUrls: {
      default: {
        http: [chain.rpcUrl]
      },
      public: {
        http: [chain.rpcUrl]
      }
    }
  }
}

export const sepolia: Chain = {
  ...sepoliaDefault,
  rpcUrls: {
    ...sepoliaDefault.rpcUrls,
    // override the default public RPC with the Infura RPC
    // public RPCs are getting rate limited
    default: {
      http: [rpcURLs[ChainId.Sepolia]!]
    }
  }
}

export const arbitrumSepolia: Chain = {
  id: ChainId.ArbitrumSepolia,
  name: 'Arbitrum Sepolia',
  network: 'arbitrum-sepolia',
  nativeCurrency: ether,
  rpcUrls: {
    default: {
      http: [rpcURLs[ChainId.ArbitrumSepolia]!]
    },
    public: {
      http: [rpcURLs[ChainId.ArbitrumSepolia]!]
    }
  },
  blockExplorers: {
    etherscan: {
      name: 'Arbiscan',
      url: explorerUrls[ChainId.ArbitrumSepolia]!
    },
    default: { name: 'Arbiscan', url: explorerUrls[ChainId.ArbitrumSepolia]! }
  }
}

export const arbitrumNova: Chain = {
  id: ChainId.ArbitrumNova,
  name: 'Arbitrum Nova',
  network: 'arbitrum-nova',
  nativeCurrency: ether,
  rpcUrls: {
    default: {
      http: [rpcURLs[ChainId.ArbitrumNova]!]
    },
    public: {
      http: [rpcURLs[ChainId.ArbitrumNova]!]
    }
  },
  blockExplorers: {
    etherscan: { name: 'Arbiscan', url: 'https://nova.arbiscan.io' },
    default: { name: 'Arbiscan', url: 'https://nova.arbiscan.io' }
  }
}

export const xaiTestnet: Chain = {
  id: ChainId.XaiTestnet,
  name: 'Xai Orbit Testnet',
  network: 'xai-testnet',
  nativeCurrency: ether,
  rpcUrls: {
    default: {
      http: [rpcURLs[ChainId.XaiTestnet]!]
    },
    public: {
      http: [rpcURLs[ChainId.XaiTestnet]!]
    }
  },
  blockExplorers: {
    default: {
      name: 'Blockscout',
      url: 'https://testnet-explorer.xai-chain.net'
    }
  }
}

export const xai: Chain = {
  id: ChainId.Xai,
  name: 'Xai',
  network: 'xai',
  nativeCurrency: {
    name: 'Xai',
    symbol: 'XAI',
    decimals: 18
  },
  rpcUrls: {
    default: {
      http: [rpcURLs[ChainId.Xai]!]
    },
    public: {
      http: [rpcURLs[ChainId.Xai]!]
    }
  },
  blockExplorers: {
    default: {
      name: 'Blockscout',
      url: 'https://explorer.xai-chain.net'
    }
  }
}

export const kameleon: Chain = {
  id: ChainId.Kameleon,
  name: 'kameleon',
  network: 'kameleon',
  nativeCurrency: {
    name: 'Kameleon',
    symbol: 'KAME',
    decimals: 18
  },
  rpcUrls: {
    default: {
      http: [rpcURLs[ChainId.Kameleon]!]
    },
    public: {
      http: [rpcURLs[ChainId.Kameleon]!]
    }
  },
  blockExplorers: {
    default: {
      name: 'Blockscout',
      url: 'https://explorer-l2-dev.kardiachain.io'
    }
  }
}

export const stylusTestnet: Chain = {
  id: ChainId.StylusTestnet,
  name: 'Stylus Testnet',
  network: 'stylus-testnet',
  nativeCurrency: ether,
  rpcUrls: {
    default: {
      http: [rpcURLs[ChainId.StylusTestnet]!]
    },
    public: {
      http: [rpcURLs[ChainId.StylusTestnet]!]
    }
  },
  blockExplorers: {
    default: {
      name: 'Blockscout',
      url: 'https://stylus-testnet-explorer.arbitrum.io'
    }
  }
}

/**
 * For e2e testing
 */
export const localL1Network: Chain = {
  id: ChainId.Local,
  name: 'EthLocal',
  network: 'custom-localhost',
  nativeCurrency: ether,
  rpcUrls: {
    default: {
      http: [rpcURLs[ChainId.Local]!]
    },
    public: {
      http: [rpcURLs[ChainId.Local]!]
    }
  },
  blockExplorers: {
    default: { name: 'Blockscout', url: '' }
  }
}

/**
 * For e2e testing
 */
export const localL2Network: Chain = {
  id: ChainId.ArbitrumLocal,
  name: 'ArbLocal',
  network: 'arbitrum-localhost',
  nativeCurrency: ether,
  rpcUrls: {
    default: {
      http: [rpcURLs[ChainId.ArbitrumLocal]!]
    },
    public: {
      http: [rpcURLs[ChainId.ArbitrumLocal]!]
    }
  },
  blockExplorers: {
    default: { name: 'Blockscout', url: '' }
  }
}
