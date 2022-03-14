import { useRef, useState, useEffect } from 'react'
import { useSelect, SelectOption } from '@mui/base'

import styles from './styles.module.css'

interface Props {
  options: SelectOption<string>[]
  placeholder?: string
}

function CustomSelect({ options, placeholder }: Props) {
  const listboxRef = useRef<HTMLUListElement>(null)
  const [listboxVisible, setListboxVisible] = useState(false)

  const { getButtonProps, getListboxProps, getOptionProps, value } = useSelect({
    listboxRef,
    options,
  })

  useEffect(() => {
    listboxVisible && listboxRef.current?.focus()
  }, [listboxVisible])

  return (
    <div className={styles.root} onClick={() => setListboxVisible(!listboxVisible)}>
      <div className={styles.toggle} {...getButtonProps()} style={{ '--color': value } as any}>
        {value ?? <span className={styles.placeholder}>{placeholder ?? ' '}</span>}
      </div>
      <ul {...getListboxProps()} className={listboxVisible ? '' : 'hidden'}>
        {options.map((option) => (
          <li className={styles.selectOption} key={option.value} {...getOptionProps(option)}>
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  )
}

const options = [
  {
    label: 'Red',
    value: '#D32F2F',
  },
  {
    label: 'Green',
    value: '#4CAF50',
  },
  {
    label: 'Blue',
    value: '#2196F3',
  },
]

export default function UseSelect() {
  return <CustomSelect placeholder="Select a color..." options={options} />
}
