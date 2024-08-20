import './Login.css'
import '../../App.css'

import video from '../../LoginAssets/video.mp4'
import logo from '../../LoginAssets/image.png'

import { Link } from 'react-router-dom'

import { CiUser } from "react-icons/ci";
import { SlLock } from "react-icons/sl";
import { AiOutlineSwapRight } from "react-icons/ai";

const Login = () => {
  return (
    <div className='loginPage flex'>
      <div className="container flex">

        <div className="videoDiv">
          <video src={video} autoPlay muted loop></video>

          <div className="textDiv">
            <h2 className='title'>Compra y vende extraordinarios productos</h2>
            <p>¡Con el grandioso sabor colombiano!</p>
          </div>

          <div className="footerDiv flex">
            <span className='text'>No tienes una cuenta?</span>
            <Link to={'/register'}>
            <button className='btn'>Regístrate</button>
            </Link>
          </div>

        </div>

        <div className="formDiv flex">
          <div className="headerDiv">
            <img src={logo} alt="Logo imagen"/>
            <h3>Bienvenido</h3>
          </div>

        <form action="" className='form grid'>
          {/*<span className='showMessage'>Estado del inicio de sesión</span>*/}

          <div className="inputDiv">
            <label htmlFor="username">Nombre de usuario</label>
            <div className="input flex">
              <CiUser className='icon'/>
              <input type="text" id='username' placeholder='Nombre de usuario'/>
            </div>
          </div>

          <div className="inputDiv">
            <label htmlFor="password">Contraseña</label>
            <div className="input flex">
              <SlLock className='icon'/>
              <input type="password" id='password' placeholder='Contraseña de acceso'/>
            </div>
          </div>

          <button type='submit' className='btn flex'>
            <span>Inicia sesión</span>
            <AiOutlineSwapRight className='icon'/>
          </button>

          <span className='forgotPassword'>
            Olvidaste tu constraseña? <a href="">Oprime aquí</a>
          </span>
        </form>

        </div>
      </div>
    </div>
  )
}

export default Login