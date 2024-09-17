import React from 'react'
import styles from './Table.module.scss'

const Table = ({children, nowrap}) => {
  return (
    <div className={`${styles["un-table__scroll"]}`}>
        <table className={`${styles["un-table"]} ${nowrap ? styles["nowrap"] : ""} `}>
            {children}
        </table>
    </div>
  )
}

export default Table