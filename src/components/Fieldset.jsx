import { useParams } from 'react-router-dom'
import datosprofesores from '../modules/profesores/profesores.json'
export const Fieldset = () => {
  const params = useParams()
  console.log(params.profesorId)
  const profesor = datosprofesores.find(
    (x) => x.id === parseInt(params.profesorId)
  )
  return (
    <>
      <div
        key={profesor.id}
        className="fatherbox container mt-5 d-flex justify-content-center col-md-12 "
      >
        <div className="col-md-2 col-4">
          {' '}
          <img src={profesor.Imagen} alt="" />{' '}
        </div>
        <div className="col-md-10">
          {' '}
          Nombre del Docente: <b> {profesor.Nombre} </b> <br />
          Materia: <b> {profesor.Materia} </b>
        </div>
      </div>
      <form
        action="POST"
        name="formularioevalucaion"
        className="container"
        id="form1"
      >
        <div
          className="pregunta col-md-12 mt-4 text-center mb-4"
          id="evaluacion"
        ></div>
        <div className="test d-flex">
          <div className="checks col-md-11">
            <fieldset className="field col-md-12 fields" id="vista1">
              <h3 className="col-md-12 mb-5 text-center">
                ¿Estas satisfecho con las clases recibidas por este docente?
              </h3>
              <div className="form-check mb-3">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault1"
                  id="flexRadioDefault1"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  <p> Muy Deacuerdo</p>
                </label>
              </div>
              <div className="form-check  mb-3">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault1"
                  id="flexRadioDefault2"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  <p> Deacuerdo</p>
                </label>
              </div>
              <div className="form-check mb-3">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault1"
                  id="flexRadioDefault3"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault3">
                  <p> En Desacuerdo</p>
                </label>
              </div>
              <div className="form-check mb-3">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault1"
                  id="flexRadioDefault4"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault4">
                  <p> Muy en Desacuerdo</p>
                </label>
              </div>
            </fieldset>
            <fieldset className="field fields" id="vista2">
              <h3 className="col-md-12 mb-5 text-center">
                ¿El docente se presento a todas sus horas de clase?
              </h3>
              <div className="form-check col-md-2 col-ms-5 mb-3">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault2"
                  id="flexRadioDefault5"
                />
                {
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault5"
                  >
                    <p> Muy Deacuerdo</p>
                  </label>
                }
              </div>
              <div className="form-check col-md-2 col-sm-5 mb-3">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault2"
                  id="flexRadioDefault6"
                />
                {
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault6"
                  >
                    <p> Deacuerdo</p>
                  </label>
                }
              </div>
              <div className="form-check col-md-2 col-sm-5 mb-3">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault2"
                  id="flexRadioDefault7"
                />
                {
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault7"
                  >
                    <p> En Desacuerdo</p>
                  </label>
                }
              </div>
              <div className="form-check col-md-2 col-sm-5 mb-3">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault2"
                  id="flexRadioDefault8"
                />
                {
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault8"
                  >
                    <p> Muy en Desacuerdo</p>
                  </label>
                }
              </div>
            </fieldset>
            <fieldset className="field fields" id="vista3">
              <h3 className="col-md-12 mb-5 text-center">
                ¿El contenido de la materia impartida por el docente era lo
                suficientemente competente?
              </h3>
              <div className="form-check col-md-2 col-ms-5 mb-3">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault3"
                  id="flexRadioDefault9"
                />
                {
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault9"
                  >
                    <p> Muy Deacuerdo</p>
                  </label>
                }
              </div>
              <div className="form-check col-md-2 col-sm-5 mb-3">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault3"
                  id="flexRadioDefault10"
                />
                {
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault10"
                  >
                    <p> Deacuerdo</p>
                  </label>
                }
              </div>
              <div className="form-check col-md-2 col-sm-5 mb-3">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault3"
                  id="flexRadioDefault11"
                />
                {
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault11"
                  >
                    <p> En Desacuerdo</p>
                  </label>
                }
              </div>
              <div className="form-check col-md-2 col-sm-5 mb-3">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault3"
                  id="flexRadioDefault12"
                />
                {
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault12"
                  >
                    <p> Muy en Desacuerdo</p>
                  </label>
                }
              </div>
            </fieldset>
            <fieldset className="field fields" id="vista4">
              <h3 className="col-md-12 mb-5 text-center">
                ¿El docente agredio a algun estudiante durante el semestre?
              </h3>
              <div className="form-check col-md-2 col-ms-5 mb-3">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault4"
                  id="flexRadioDefault13"
                />
                {
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault13"
                  >
                    <p> Muy Deacuerdo</p>
                  </label>
                }
              </div>
              <div className="form-check col-md-2 col-sm-5 mb-3">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault4"
                  id="flexRadioDefault14"
                />
                {
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault14"
                  >
                    <p> Deacuerdo</p>
                  </label>
                }
              </div>
              <div className="form-check col-md-2 col-sm-5 mb-3">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault4"
                  id="flexRadioDefault15"
                />
                {
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault15"
                  >
                    <p> En Desacuerdo</p>
                  </label>
                }
              </div>
              <div className="form-check col-md-2 col-sm-5 mb-3">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault4"
                  id="flexRadioDefault16"
                />
                {
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault16"
                  >
                    <p> Muy en Desacuerdo</p>
                  </label>
                }
              </div>
            </fieldset>
            <fieldset id="vista5" className="finalspace mb-5 fields">
              <h3 className="col-md-12 mb-5 text-center">
                ¿Que es lo que el docente puede mejorar?
              </h3>
              <textarea
                className="text-area form-control me-4"
                placeholder="Introduzca sus comentarios aquí..."
                aria-label="With textarea"
              ></textarea>
            </fieldset>
            <fieldset id="vista6" className="finalspace mb-5 fields">
              <h3 className="col-md-12 mb-5 text-center">Comentarios extras</h3>
              <textarea
                className="text-area   form-control me-4"
                placeholder="Introduzca sus comentarios aquí..."
                aria-label="With textarea"
              ></textarea>
              <div id="enviar" className="send">
                <button type="submit" className="btn-send mt-4 btn btn-success">
                  Terminar
                </button>
              </div>
            </fieldset>
          </div>
        </div>
      </form>
    </>
  )
}
