import { assetsMap, getAssetWithUrlId } from '../assetsData'
import styles from './styles.module.css'

export type AssetInfo = Partial<typeof assetsMap>

function IDOCard(urlId = 'bal'): JSX.Element | void {
  const assetInfo = getAssetWithUrlId(urlId)

  if (!assetInfo) {
    return console.error(`Asset "${urlId}" does not exist`)
  }

  return (
    <div className="flex">
      <figure className={styles.image}>{assetInfo.Pic}</figure>
      <div className="flex-column">
        <div className="flex">
          <div className={styles.name}>{assetInfo.name}</div>
          {assetInfo.Icon}
        </div>
        <div className={styles.fullName}>{assetInfo.fullName}</div>
      </div>
    </div>
  )
}

export default IDOCard
