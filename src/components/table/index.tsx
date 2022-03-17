import { useState, ReactNode } from 'react'

import { AssetInfo } from 'components/IDOCard'
import styles from './styles.module.css'

interface Props {
  assetInfo: AssetInfo
  apr?: string | ReactNode
  dailyReward?: string | JSX.Element
  asset?: ReactNode
  totalReward?: string | JSX.Element
}

export default function UnstyledTable(rows: Props[]) {
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  return (
    rows.length && (
      <div className={styles.root}>
        <table aria-label="custom pagination table">
          <thead>
            <tr>
              <th>Token Referral Farm</th>
              <th>Estimated APR</th>
              <th>Daily Farm Reward</th>
              <th>Total Farm Reward</th>
            </tr>
          </thead>
          <tbody>
            {(rowsPerPage > 0 ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : rows).map(
              // @ts-ignore
              ({ assetInfo: { fullName }, ...row }, indexRow) =>
                fullName && (
                  <tr key={`${fullName}-${indexRow}`}>
                    <td>{row.asset}</td>
                    <td style={{ width: 120 }} align="right">
                      {row.apr}
                    </td>
                    <td style={{ width: 120 }} align="right">
                      {row.dailyReward}
                    </td>
                    <td style={{ width: 120 }} align="right">
                      {row.dailyReward}
                    </td>
                  </tr>
                )
            )}

            {emptyRows > 0 && (
              <tr style={{ height: 41 * emptyRows }}>
                <td colSpan={3} />
              </tr>
            )}
          </tbody>
        </table>
      </div>
    )
  )
}
