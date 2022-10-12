import React from 'react';
import style from './NavBar.module.css'
import HomeIcon from '@mui/icons-material/Home';
import CodeIcon from '@mui/icons-material/Code';
import FolderIcon from '@mui/icons-material/Folder';
import ContactPageIcon from '@mui/icons-material/ContactPage';

export const NavBar = () => {
  return (
    <div className={`${style.navbar}`}>
      {/* <div>portafolio</div> */}
      <div className={`${style.links}`}>
        <a href='#home'>home </a>
        <a href='#tecnologias'>tecnologias</a>
        <a href='#proyectos'>proyectos</a>
        <a href='#contacto'>contacto</a>
      </div>
      <div className={`${style.icons}`}>
        <a href='#home'><HomeIcon /> </a>
        <a href='#tecnologias'><CodeIcon /></a>
        <a href='#proyectos'><FolderIcon/></a>
        <a href='#contacto'><ContactPageIcon /></a>
      </div>
    </div>
  )
}
