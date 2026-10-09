import '../css/paciente.css';

const Paciente = ({setVisible,pacientes,paciente}) =>{


    const handleEditar = ()=>{
        setVisible(true);
        
        console.log(pacientes);
    }
    return(
        <article className="paciente-card">
            
            <p className="paciente-label"> Paciente:
                <span className="paciente-name">{paciente?.paciente || 'Anonimo'}</span>
            </p>
            <p className="paciente-fecha">{paciente?.fechaAlta || 'sin registro de fecha'}</p>
            <div className="paciente-contenedor-btns">
                <button className="paciente-btn paciente-btn-edit" onClick={() => handleEditar()}>
                    Editar
                </button>
                <button className="paciente-btn paciente-btn-eliminate">
                    Eliminar
                </button>
            </div>
        </article>
    );
};

export default Paciente;