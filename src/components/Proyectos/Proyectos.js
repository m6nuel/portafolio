import React from 'react'
import style from './Proyectos.module.css'

export const Proyectos = () => {
  return (
    <>
        <div className={`${style.proyecto}`}>
            <div className={`${style.image}`}>
              <img  alt='proyecto'/>
            </div>
            <div>
              <a href='https://github.com/m6nuel' rel="noopener noreferrer">Codigo</a>
              <a href='https://github.com/m6nuel' rel="noopener noreferrer">Proyecto</a>
            </div>
        </div>
        <div className={`${style.proyecto}`}>
            <div className={`${style.image}`}>
              <img  alt='proyecto'/>
            </div>
            <div>
              <a href='https://github.com/m6nuel' rel="noopener noreferrer">Codigo</a>
              <a href='https://github.com/m6nuel' rel="noopener noreferrer">Proyecto</a>
            </div>
        </div>
    </>
  )
}
