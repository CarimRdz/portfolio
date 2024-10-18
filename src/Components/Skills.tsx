import '../css/skills.css'
import Icon from './Icon'
import { SkillCardProps } from './Intefaces'

function SkillCard({title,skillList,ico}:SkillCardProps){
    return (
        <div className='skill-card border-box'>
            <div className='skill-card-title'>  
               <h3 >
                 <Icon ico={ico}/> {title} 
               </h3>
            </div>
             <ul className='skill-card-list'>
                {
                    skillList.map((skill,index) => (
                        <li key={index}>{skill}</li>
                    ))   
                }
             </ul>
         </div>
    )
 }


export default function Skills(){
    return(
        <section className='views-section'>
            <h2><span className='bold'>#</span>  Habilidades</h2>
            <section className='views-section-cards'>
            <SkillCard title="Lenguajes" skillList={["Java","C#","JavaScript","PHP"]} ico="code"></SkillCard>
            <SkillCard title="Frameworks" skillList={["Spring Boot","React"]} ico="code"></SkillCard>
            <SkillCard title="Otros" skillList={["Postman","VS","CSS","HTML","SCSS"]} ico="settings"></SkillCard>
            <SkillCard title="Bases de Datos" skillList={["MySQL","PostgreSQL"]} ico="database"></SkillCard>
            </section>
        </section>
    )
}