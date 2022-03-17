const assetsMap = [
  {
    apiId: 'BAL',
    urlId: 'bal',
    name: 'BAL',
    fullName: 'Balancer',
    color: '',
    Icon: await import('./balancer'),
    Pic: <img src="./balancer.png" alt="BAL" />,
    txLink: (tx_hash: any) => `https://blockchair.com/bitcoin/transaction/${tx_hash}`,
    addressLink: (address: any) => `https://blockchair.com/bitcoin/address/${address}`,
  },
  {
    apiId: 'RADAR',
    urlId: 'dappradar',
    name: 'DappRadar',
    fullName: 'Dapp Radar',
    color: '',
    Icon: await import('./dapp-radar'),
    Pic: <img src="./dapp-radar.png" alt="RADAR" />,
    txLink: (tx_hash: any) => `https://blockchair.com/bitcoin-cash/transaction/${tx_hash}`,
    addressLink: (address: any) => `https://blockchair.com/bitcoin-cash/address/${address}`,
  },
  {
    apiId: 'MASK',
    urlId: 'mask',
    name: 'Mask',
    fullName: 'Mask Netword',
    color: '',
    Icon: await import('./mask'),
    Pic: <img src="./mask-network.png" alt="MASK" />,
    txLink: (tx_hash: any) => `https://binance.mintscan.io/txs/${tx_hash}`,
  },
  {
    apiId: 'UNI',
    urlId: 'uni',
    name: 'Uniswap',
    fullName: 'Uniswap',
    color: '',
    Icon: await import('./attrace'),
    Pic: <img src="./uniswap.png" alt="UNI" />,
    txLink: (tx_hash: any) => `https://blockchair.com/stellar/transaction/${tx_hash}`,
    addressLink: (address: any) => `https://blockchair.com/stellar/address/${address}`,
  },
]

const getAssetWithUrlId = (urlId: string, fallback = undefined) =>
  assetsMap.find((assetInfo) => assetInfo.urlId === urlId) ?? fallback

export { assetsMap, getAssetWithUrlId }
