import '../css/paciente.css';

const Paciente = () =>{
    return(
        <article className="paciente-card">
            <p className="paciente-label"> Paciente:
                <span className="paciente-name"></span>
            </p>
            <p className="paciente-fecha"></p>
            <div className="paciente-contenedor-btns">
                <button className="paciente-btn paciente-btn-edit">
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