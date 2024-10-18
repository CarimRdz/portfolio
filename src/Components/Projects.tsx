import Icon from './Icon'

import { ProjectCardProps } from './Intefaces'
import '../css/projects.css'

function ProjectCard({techs,title,info,link}:ProjectCardProps){
    return(
        <div className='project-card border-box'>
            <div className='project-card-tech'>
                <p>{techs}</p>
            </div>
            <h3>{title}</h3>
            <div className='project-card-info'>
                <p>{info}</p>
            </div>
            <a href={link} target='_blank' ><Icon ico='open_in_new' /></a>
            
        </div>
    )
}

export default function Projects ()
{
    return(
        <section className='views-section'>
            <h2><span className='bold'>#</span> Proyectos</h2>
            <section className='views-section-cards'>
                <ProjectCard  
                    techs='PHP,JS,SCSS,HTML' 
                    title='Web Site' 
                    info='Desarrollo de sitio web de catálogo de servicios. Diseño UI e implementación para el desarrollo de un sitio web en HTML5, CSS3, JS y PHP.' 
                    link='https://soluethernat.com/' 
                />
                <ProjectCard  
                    techs='React,SCSS,TS,HTML' 
                    title='Portolio' 
                    info='Portafolio web personal, con diseño misimalista. El sitio permite a los usuarios navegar fácilmente entre secciones utilizando React Router, lo que mejora la fluidez sin recargar la página añadiendo transiciones sutiles en el cambio de secciones' 
                    link=''  
                />                
            </section>
            
        </section>
    )
}

