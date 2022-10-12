import React from 'react'
import style from './Contacto.module.css'
import cv from '../../recursos/cvjesus.pdf'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';

export const Contacto = () => {
  return (
    <div className={`${style.contacto}`}>
      <h2>Contactame:</h2>
      <div className={`${style.icons}`}>
        <a href='https://www.linkedin.com/in/m6nuel/' rel="noopener noreferrer" target="_blank"> 
          <LinkedInIcon sx={{ fontSize: 70 }} />         
        </a>
        <a href='https://github.com/m6nuel' rel="noopener noreferrer"  target="_blank"> 
          <GitHubIcon sx={{ fontSize: 70 }} /> 
        </a>
      </div>
      <div className={`${style.boton}`}>
        <a href={cv} download> <button>Descargar CV <span> <TextSnippetIcon /> </span></button>  </a>
      </div>
    </div>
  )
}
