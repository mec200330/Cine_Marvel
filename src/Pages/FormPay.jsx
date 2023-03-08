import { useState } from "react"
import Button from "../Components/Button/Button"
import './FormPay.css'

const FormPay = () => {
  const[name, setName] = useState('')
   const[mail, setEmail] = useState('')
   const[phone, setPhone] = useState('')
   const[textArea, setTextArea] = useState('')
   const [check, setCheck] = useState()

   const handleSubmit = (evt)=>{
    evt.preventDefault()
    if(!name)
    alert('Introduce tu nombre')
    if(!mail || !mail.includes('@') || !mail.includes('gmail.com' || 'hotmail.com' || 'outlook.com'))
    alert('Ingresa tu correo, recuerda que debe contener un @ y debe finalizar con un servicio de mensajeria existente como gmail.com, hotmail.com, outlook.com etc.')
    if(phone.length>0 &&phone.length<9 )
    alert('El telefono ingresado no es valido')
    if(!textArea)
    alert('Escribe por favor tus comentarios, tu opinión es muy importante para nosotros')
    if(!check)
    alert('Debes aceptar los terminos y condiciones')
  
    
    
}
  
  
  return (
    <div className="formContainer">
      
    <form onSubmit={handleSubmit} className="col form" id="form">
      <h1 className="formTitle">Envíanos tus inquietudes a través de este formulario</h1>
    <label for="nombre" > <small>Nombre Completo</small></label> 
    <input onChange={(e)=>setName(e.target.value)} type="text" className="form-control" id="nameInput"></input>
    
    <label for="exampleFormControlInput1" className="form-label" id="mail"> <small>Email</small></label>
    <input onChange={(e)=>setEmail(e.target.value)} type="text" className="form-control" id="mailInput"></input>
    
    <label for="phone" id="phone"><small>Teléfono</small></label>
      <input  onChange={(e)=>setPhone(e.target.value)} list="phone" name="phone" className="form-control" id="phoneInput" type="text"></input>
      <select   id="phone">
      <option  value="+01">USA</option>
      <option selected value="+034">ESP</option>
      <option value="+057">COL</option>
      <option value="+027">ZBW</option>
      <option value="+021">LAS</option>
      <option value="+075">CTR</option>
      <option select value="+059">ETP</option>
     </select>
      
     
      <textarea onChange={(e)=>setTextArea(e.target.value)} className="form-control" id="FormControlTextarea1" rows="3" col-3 placeholder="¿En qué podemos ayudarte?"></textarea>
      
      <input onChange={(e)=>setCheck(e.target.value)} type="checkbox" id="acepto" name="acepto" ></input>
      <label for="acepto "> <small> <a href="#">Acepto la Política de Privacidad y los Términos y condiciones.</a></small> </label>
    <br />
    <Button clase='cartelera3 sendForm' nombre='Enviar'></Button>
  
    </form>
    </div>
  )
}

export default FormPay
