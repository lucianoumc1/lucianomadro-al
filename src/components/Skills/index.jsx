import skills from './skillsList'
import './Skills.scss'

export default function Skills() {
  return (
    <section className='Skills'>
      <h2 className='skills__tittle'>Lenguajes & Tecnologias</h2>
      <div className='skills__container'>
        
        {skills.map(el => {
          const randomNumberForAnimation = Math.ceil(Math.random() * 10);
          const animation = randomNumberForAnimation > 5 ? "animation-left" : "animation-rigth"
          const regExp = /[a-z]*.png/ig
          const name = el.match(regExp)[0].replace('.png'," icon")
          return (<img className={animation} src={el} alt={name} key={name} />)
        })}
        
      </div>
    </section>
  )
}
