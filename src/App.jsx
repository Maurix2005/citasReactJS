import './css/main.css'
import { useState } from 'react'
import Formulario from './components/Form'
import Paciente from './components/Pacientes';

function App() {
  
  const [modalVisible, setModalVisible] = useState(false);
  const [pacientes, setPacientes] = useState([])

  return (
    <>
      <main className="container">
        <h1 className="title">Terminverwaltung für die <span className = "titleBold">Tierarztpraxis</span></h1>

        <button className="btn-nueva-cita" onClick={() => { ;setModalVisible(true);}}>
          <span className="btn-nueva-cita-texto">Neuen Termin erstellen</span>
        </button>

        <Paciente/>

        {modalVisible && (
          <div className="modal-Overlay" role="dialog" aria-modal="true">
            <div className="modal-Content">
              <Formulario visible = {modalVisible} setVisible = {setModalVisible} pacientes = {pacientes} setPacienites = {setPacientes} />
            </div>
          </div>
        )}
        
      </main>
    </>
  )
}

export default App
