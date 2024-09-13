import React from 'react'
import styles from './Home.module.scss'

const Home = () => {
  return (
    <>
      <div className='un-page__content'>
        <div className='un-page__title'>
          <span className='pr-icon-home'></span>
          <p>Home / Dashboard</p>
        </div>
        <p className={styles["un-message"]}>Bem vindo ao Corpo Explica.</p>
      </div>
    </>
  )
}

export default Home