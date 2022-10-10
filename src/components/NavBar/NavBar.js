import React from 'react';
import style from './NavBar.module.css'

export const NavBar = () => {
  console.log(style)
  return (
    <div className={`${style.navbar}`}>
      <div>portafolio</div>
      <div>

      <a href='#home'>home</a>
      <a href='#tecnologias'>tecnologias</a>
      <a href='#proyectos'>proyectos</a>
      <a href='#contacto'>contacto</a>
      </div>
    </div>
  )
}
