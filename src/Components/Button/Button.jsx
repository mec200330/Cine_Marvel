import './Button.css'

const Button = (props) => {
  return (
    <button disabled={props.estado} onClick={props.accion} className={props.clase}>{props.nombre}</button>
  )
}

export default Button


