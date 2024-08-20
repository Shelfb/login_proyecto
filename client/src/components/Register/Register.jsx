import './Register.css'
import '../../App.css'

import video from '../../LoginAssets/video.mp4'
import logo from '../../LoginAssets/image.png'

import { Link } from 'react-router-dom'

import { CiUser } from "react-icons/ci";
import { SlLock } from "react-icons/sl";
import { AiOutlineSwapRight } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";

const Register = () => {
  return (
    <div className='registerPage flex'>
      <div className="container flex">

        <div className="videoDiv">
          <video src={video} autoPlay muted loop></video>

          <div className="textDiv">
            <h2 className='title'>Compra y vende extraordinarios productos</h2>
            <p>¡Con el grandioso sabor colombiano!</p>
          </div>

          <div className="footerDiv flex">
            <span className='text'>Tienes una cuenta?</span>
            <Link to={'/'}>
            <button className='btn'>Inicia sesión</button>
            </Link>
          </div>

        </div>

        <div className="formDiv flex">
          <div className="headerDiv">
            <img src={logo} alt="Logo imagen"/>
            <h3>Déjanos conocerte</h3>
          </div>

        <form action="" className='form grid'>
  
          <div className="inputDiv">
            <label htmlFor="username">Nombre de usuario</label>
            <div className="input flex">
              <CiUser className='icon'/>
              <input type="text" id='username' placeholder='Nombre de usuario'/>
            </div>
          </div>

          <div className="inputDiv">
            <label htmlFor="email">Correo electrónico</label>
            <div className="input flex">
              <HiOutlineMail className='icon'/>
              <input type="email" id='email' placeholder='Correo electrónico'/>
            </div>
          </div>

          <div className="inputDiv">
            <label htmlFor="password">Contraseña</label>
            <div className="input flex">
              <SlLock className='icon'/>
              <input type="password" id='password' placeholder='Contraseña de acceso'/>
            </div>
          </div>

          <Link to={'/'}>
          <button type='submit' className='btn flex'>
              <span>Regístrame</span>
              <AiOutlineSwapRight className='icon'/>
          </button>
          </Link>
          <span className='forgotPassword'>
            Olvidaste tu constraseña? <a href="">Oprime aquí</a>
          </span>
        </form>

        </div>
      </div>
    </div>
  )
}

export default Register