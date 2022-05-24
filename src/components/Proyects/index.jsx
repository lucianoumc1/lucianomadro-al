import ProyectCard from '../ProyectCard'
import GithubIcon from '../icons/GithubIcon'
import LinkIcon from '../icons/LinkIcon'
import proyectsList from './proyectsList'
import './Proyects.scss'

export default function Proyects() {

  return (
    <section className='proyects__container' id='proyects'>
      <h1 className='proyects__tittle'>Mis proyectos</h1>
      <div className='proyects__cards'>
        {proyectsList.map(el => (
            <ProyectCard
              tittle={el.tittle}
              image={el.image}
              description={el.description}
              key={el.tittle}
            >
              {el?.github && <GithubIcon href={el.github} />  }
              {el?.deploy && <LinkIcon href={el.deploy} />  }
            </ProyectCard>
          )
        )}
      </div>
    </section>
  )
}
