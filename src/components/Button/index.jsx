import './Button.scss'

export default function Buttton({ name, handleClick }) {
  return (
    <button className='button__call-to-action' onClick={handleClick}>{name}</button>
  )
}
