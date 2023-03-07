import { Modal } from './Modal'
import { OpenSeaNFT } from '../types'

interface Props {
  nft: OpenSeaNFT | null
  isOpen: boolean
  onClose: () => void
}

export function NFTModal({ nft, isOpen, onClose }: Props) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      {nft && (
        <div>
          <div>
            <div className="sm:flex sm:items-start">
              <img
                src={nft.image_url}
                alt={nft.name}
                className="w-full rounded-lg shadow-lg sm:w-1/2"
              />
              <div className="mt-4 sm:mt-0 sm:ml-4 sm:text-left">
                <h3 className="text-lg font-black mb-4 leading-6 text-gray-900">
                  {nft.name}
                </h3>
                {nft.description && (
                  <p className="text-sm mb-2">{nft.description}</p>
                )}
                {nft.owner && (
                  <p className="text-sm">Owner address: {nft.owner.address}</p>
                )}
              </div>
            </div>
          </div>
          <div className="mt-3 sm:flex sm:flex-row-reverse">
            <a
              href={nft.permalink}
              target="_blank"
              rel="noreferrer"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Purchase
            </a>
            <button
              type="button"
              onClick={onClose}
              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </Modal>
  )
}
