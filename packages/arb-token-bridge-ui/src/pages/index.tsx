import React, { useEffect } from 'react'
import dynamic from 'next/dynamic'
import { addCustomChain, addCustomNetwork } from '@arbitrum/sdk'

import { AppConnectionFallbackContainer } from '../components/App/AppConnectionFallbackContainer'
import { Loader } from '../components/common/atoms/Loader'
import {
  getCustomChainsFromLocalStorage,
  xaiTestnet,
  xai,
  kameleon
} from '../util/networks'
import { mapCustomChainToNetworkData } from '../util/networks'

const App = dynamic(() => import('../components/App/App'), {
  ssr: false,
  loading: () => (
    <AppConnectionFallbackContainer>
      <div className="fixed inset-0 m-auto h-[44px] w-[44px]">
        <Loader size="large" color="white" />
      </div>
    </AppConnectionFallbackContainer>
  )
})

export default function Index() {
  useEffect(() => {
    // user-added custom chains do not persists between sessions
    // we add locally stored custom chains
    getCustomChainsFromLocalStorage().forEach(chain => {
      try {
        addCustomChain({ customChain: chain })
        mapCustomChainToNetworkData(chain)
      } catch (_) {
        // already added
      }

      try {
        // adding to L2 networks too to be fully compatible with the sdk
        addCustomNetwork({ customL2Network: chain })
      } catch (_) {
        // already added
      }
    })

    try {
      addCustomNetwork({ customL2Network: xaiTestnet })
    } catch (error: any) {
      console.error(`Failed to register Xai Testnet: ${error.message}`)
    }
    try {
      addCustomChain({ customChain: xaiTestnet })
    } catch (error: any) {
      console.error(`Failed to register Xai Testnet: ${error.message}`)
    }

    try {
      addCustomNetwork({ customL2Network: xai })
    } catch (error: any) {
      console.error(`Failed to register Xai: ${error.message}`)
    }
    try {
      addCustomChain({ customChain: xai })
    } catch (error: any) {
      console.error(`Failed to register Xai: ${error.message}`)
    }

    try {
      addCustomNetwork({ customL2Network: kameleon })
    } catch (error: any) {
      console.error(`Failed to register kameleon: ${error.message}`)
    }
    try {
      addCustomChain({ customChain: kameleon })
    } catch (error: any) {
      console.error(`Failed to register kameleon: ${error.message}`)
    }
  }, [])

  return <App />
}
