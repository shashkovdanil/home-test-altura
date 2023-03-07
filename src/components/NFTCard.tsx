import { OpenSeaNFT } from '../types'

interface Props {
  nft: OpenSeaNFT
  onClick: () => void
}

export function NFTCard({ nft, onClick }: Props) {
  return (
    <button className="p-2 flex flex-col shadow-lg rounded-lg" onClick={onClick}>
      <img
        src={nft.image_preview_url}
        alt={nft.name}
        className="shadow-lg rounded-lg h-28 object-cover mb-8"
      />
      <p className="font-bold truncate text-left">{nft.name}</p>
    </button>
  )
}
