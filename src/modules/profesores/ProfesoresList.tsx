import { FC } from 'react'
import { Link } from 'react-router-dom'
import datosProfesores from './profesores.json'
export const ProfesoresList: FC = () => {
  return (
    <>
      {datosProfesores.map((i) => {
        return (
          <div key={i.Nombre} className="d-flex mb-4 p-1 flex-wrap">
            <div className="col-md-2 col-4">
              <img src={i.Imagen} />
            </div>
            <div className="col-md-6 col-8 info-docente">
              Nombre del Docente: <b> {i.Nombre} </b> <br /> Materia:
              <b> {i.Materia} </b>
            </div>
            <div className="col-12 col-md-3 mt-3">
              <div className="row">
                <div className="col-6">
                  <Link
                    to={`/evaluacion/${i.id}`}
                    className="btn btn-success col-md-5 col-6 btn-evaluar"
                  >
                    Evaluar
                  </Link>
                </div>
                <div className="col-6">
                  <a
                    href={`reporte.html?idprofesor=${i.id}`}
                    className="btn btn-danger col-md-6 col-6 w-100"
                  >
                    Reportar
                  </a>
                </div>
              </div>
            </div>
            <hr />
          </div>
        )
      })}
    </>
  )
}
