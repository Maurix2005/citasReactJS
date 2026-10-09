import { useState, useEffect } from 'react'
import '../css/form.css';

const Formulario = ({ setVisible,pacientes,setPacientes }) => {

  const [paciente, setPaciente] = useState('')
  const [propietario, setPropietario] = useState('')
  const [email, setEmail] = useState('')
  const [telefono, setTelefono] = useState('')
  const [fechaAlta, setFechaAlta] = useState('')
  const [sintomas, setSintomas] = useState('')

  const handleCita = (e)=>{
    e.preventDefault()
    //validations
    if ([paciente.trim(),propietario.trim(),email.trim(),telefono.trim(), fechaAlta.trim(), sintomas.trim()].includes('')){
      window.alert('Error: todos los campos son obligatorios' )
      return;
    }
    //create an object with all values in the form
    const nuevoPaciente = {
      paciente,
      propietario,
      email,
      telefono,
      fechaAlta,
      sintomas
    };
    nuevoPaciente.id = Date.now();

    console.log(nuevoPaciente)
    setPacientes([...pacientes, nuevoPaciente])
    setVisible(false)
  }

  return (
    <div className="form_contenido">
      <h2 className="form-titulo">Neu <span className="form-titulo-bold">Terminverwaltung</span></h2>
      <form onSubmit={(e) => handleCita(e)}>
        <div className="form-campo">
          <label htmlFor="paciente" className='form-label'>Tiername:</label>
          <input id="paciente"
            type="text" className='form-input'
            placeholder='perrito Poppy' value={paciente}
            onChange={(e) => setPaciente(e.target.value)} />
        </div>
        <div className="form-campo">
          <label htmlFor="propietario" className='form-label'>Tierbesitzer:</label>
          <input id="propietario"
            type="text" className='form-input'
            placeholder='Connor' value={propietario}
            onChange={(e) => setPropietario(e.target.value)} />
        </div>
        <div className="form-campo">
          <label htmlFor="correo" className='form-label'>E-mail-Adresse:</label>
          <input id="correo"
            type="email" className='form-input'
            placeholder='email@dominio.com' value={email}
            onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-campo">
          <label htmlFor="tel" className='form-label'>Telefonnummer:</label>
          <input id="tel"
            type="tel" className='form-input'
            placeholder='4491234567' value={telefono}
            onChange={(e) => setTelefono(e.target.value)} />
        </div>
        <div className="form-campo">
          <label htmlFor="fecha" className='form-label'>Entlassungsdatum:</label>
          <input id="fecha"
            type="date" className='form-input'
            placeholder='DD/MM/AAAA' value={fechaAlta}
            onChange={(e) => setFechaAlta(e.target.value)} />
        </div>
        <div className="form-campo">
          <label htmlFor="sintomas" className='form-label'>Symptome:</label>
          <textarea id="sintomas"
            className='form-input'
            placeholder='Supercalifragilisticoespiralidoso' value={sintomas}
            rows={7}
            onChange={(e) => setSintomas(e.target.value)} />
        </div>
        <div className="contenedor_btn">
          <button className="form-btn-submit" type='submit'>
            <span className="form-btn-submit-texto">Senden</span>
          </button>
          <button className="form-btn-cancelar" onClick={() => setVisible(false)}>
            <span className="form-btn-cancelar-texto">Cancel</span>
          </button>
        </div>
      </form>
    </div>
  )
}

export default Formulario;
