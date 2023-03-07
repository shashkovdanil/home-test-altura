import { useState } from 'react'
import { useQuery } from 'react-query'
import axios, { AxiosError } from 'axios'
import { NFTCard } from './components/NFTCard'
import { NFTModal } from './components/NFTModal'
import { ErrorMessage } from './components/ErrorMessage'

import { OpenSeaNFT } from './types'

export function App() {
  const { data, isLoading, isError, error } = useQuery<
    OpenSeaNFT[],
    AxiosError
  >(
    'nfts',
    () =>
      axios
        .get(
          `https://testnets-api.opensea.io/api/v1/assets`,
        )
        .then(response => response.data.assets),
    {
      retry: false,
      onError: error => {
        console.error(error)
      },
    },
  )

  const [selectedNFT, setSelectedNFT] = useState<OpenSeaNFT | null>(null)
  const [isOpen, setIsOpen] = useState(false)

  function handleNFTClick(nft: OpenSeaNFT) {
    setSelectedNFT(nft)
    setIsOpen(true)
  }

  function handleModalClose() {
    const CLOSING_ANIMATION_DURATION = 300

    setIsOpen(false)

    setTimeout(() => {
      setSelectedNFT(null)
    }, CLOSING_ANIMATION_DURATION)
  }

  return (
    <>
      <div className="px-4 w-full max-w-4xl m-auto mt-8">
        {isLoading && <div>Loading...</div>}
        {isError && (
          <ErrorMessage error={error}>
            Sorry, we couldn&apos;t load the NFTs. Please try again later.
          </ErrorMessage>
        )}
        {data && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {data
              .filter(nft => nft.image_preview_url)
              .map(nft => (
                <NFTCard
                  key={nft.id}
                  nft={nft}
                  onClick={() => handleNFTClick(nft)}
                />
              ))}
          </div>
        )}
      </div>
      <NFTModal isOpen={isOpen} nft={selectedNFT} onClose={handleModalClose} />
    </>
  )
}
