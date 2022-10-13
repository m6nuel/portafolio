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
        <a href='#home'>Home </a>
        <a href='#tecnologias'>Tecnologias</a>
        <a href='#proyectos'>Proyectos</a>
        <a href='#contacto'>Contacto</a>
      </div>
      <div className={`${style.icons}`}>
        <a href='#home'><HomeIcon  sx={{ fontSize: 40 }}/> </a>
        <a href='#tecnologias'><CodeIcon sx={{ fontSize: 40 }}/></a>
        <a href='#proyectos'><FolderIcon sx={{ fontSize: 40 }}/></a>
        <a href='#contacto'><ContactPageIcon sx={{ fontSize: 40 }}/></a>
      </div>
    </div>
  )
}
