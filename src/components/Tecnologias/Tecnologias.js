import React from 'react';
import style from './Tecnologias.module.css'
import css from '../../recursos/css.png'
import js from '../../recursos/js.png'
import node from '../../recursos/node.png'
import react from '../../recursos/react.png'

export const Tecnologias = () => {
  return (
    <>
        <div className={`${style.cont}`}>
            <h2>Tecnologias</h2>
        </div>
        <div className={`${style.content}`}>
            <img alt='css' src={css} />
            <img alt='js' src={js} />
            <img alt='node' src={node} />
            <img alt='react' src={react} />
        </div>
    {/* <div className={`${style.content}`}>
        <div className={`${style.tecn}`}>
            <img alt='css' src={css} />
        </div>
        <div className={`${style.tecn}`}>
            <img alt='js' src={js} />
        </div>
        <div className={`${style.tecn}`}>
            <img alt='node' src={node} />
        </div>
        <div className={`${style.tecn}`}>
            <img alt='react' src={react} />
        </div>
    </div> */}
    </>
  )
}
