import './ProyectCard.scss'

export default function ProyectCard({ image, tittle, description, children }) {
  return (
    <div className='ProyectCard' style={{ backgroundImage: `url(${image})` }}>
      <div className='proyect-card__container'>
        <h3>{tittle}</h3>
        <p>{description}</p>
        <div className='proyect-card__links'>{children}</div>
      </div>
    </div>
  )
}
