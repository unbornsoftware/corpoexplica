import React from 'react'
import styles from './NotFound.module.scss'

const NotFound = () => {
  return (
    <div className='un-page__content'>
        <div className='un-page__title'>
          <span className='pr-icon-home'></span>
          <p>Home / Página não encontrada</p>
        </div>
        <div className={styles["un-message"]}>
          <icon className="pr-icon-warning"></icon>
          <p>Desculpe, essa funcionalidade ainda não está disponível!</p>
        </div>
      </div>
  )
}

export default NotFound