import { useState,useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import '../css/navbar.css'
import Icon from './Icon'

export default function Navbar(){

    const [isResponsive,setIsResponsive] = useState(false)

    function onHandleSetResponsive() {
        setIsResponsive(!isResponsive)
    }
    function onHandleCloseMenu (){
        if (isResponsive)
            onHandleSetResponsive()
    }

    useEffect(() => {
        function handleResize() {
          if (window.innerWidth >= 768) {
            setIsResponsive(false); 
          }
        }
    
        window.addEventListener('resize', handleResize)
        handleResize()
        return () => {
          window.removeEventListener('resize', handleResize)
        }
      }, []);


    return(
        <nav className={ isResponsive ? 'menu-resp':'menu'}>
            <div className='menu-icon' onClick={()=>onHandleSetResponsive()}>
                <Icon ico='menu'/>
            </div>

            <div className='menu-box'>
                <div className='menu-bio'>
                    <h1>Carim Rodríguez</h1>
                    <h3>Desarrollador Jr</h3> 
                </div>
                <ul className='menu-list'>
                    <li onClick={()=>onHandleCloseMenu()}><NavLink to='/' className={({ isActive }) => (isActive ? "menu-list-item-On" : "menu-list-item")}># Sobre mi</NavLink></li>
                    <li onClick={()=>onHandleCloseMenu()}><NavLink to='/skills' className={({ isActive }) => (isActive ? "menu-list-item-On" : "menu-list-item")}># Habilidades</NavLink></li>
                    <li onClick={()=>onHandleCloseMenu()}><NavLink to='/projects' className={({ isActive }) => (isActive ? "menu-list-item-On" : "menu-list-item")}># Proyectos</NavLink></li>
                </ul>
                <a className='contact' href='https://github.com/CarimRdz' target='_blank'>
                    <i className="fa-brands fa-github fa-xl"></i>
                </a>
            </div>
            
            

        </nav>
    )
}