import TabsUnstyled from '@mui/base/TabsUnstyled'
import TabsListUnstyled from '@mui/base/TabsListUnstyled'
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled'
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled'
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled'

import styles from './styles.module.css'

export default function UnstyledTabsCustomized(): JSX.Element {
  return (
    <TabsUnstyled defaultValue={0}>
      <TabsListUnstyled className={styles.tabList}>
        <TabUnstyled className={styles.tab}>One</TabUnstyled>
        <TabUnstyled className={styles.tab}>Two</TabUnstyled>
      </TabsListUnstyled>
      <TabPanelUnstyled className={styles.tabPanel} value={0}>
        First content
      </TabPanelUnstyled>
      <TabPanelUnstyled className={styles.tabPanel} value={1}>
        Second content
      </TabPanelUnstyled>
    </TabsUnstyled>
  )
}
