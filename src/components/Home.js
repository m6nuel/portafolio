import React from 'react'
import foto from '../recursos/foto.jpg'

export const Home = () => {
  return (
    <>
        <div className='foto'>
            <img alt='Foto' src={foto} />
            <h3>Jesús Manuel Delgado Sánchez</h3>
        </div>
        <div className='info'>
            <span>SoftWare Developer Full Stack</span>
            <span>Aqui podrian ir logos o otra informacion</span>
        </div>
    </>
  )
}
