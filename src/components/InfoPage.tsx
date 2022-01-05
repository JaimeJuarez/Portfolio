import { FC } from 'react'
import { ProfesoresList } from '../modules/profesores/ProfesoresList'
export const InfoPage: FC = () => {
  return (
    <>
      <div className="container mb-5">
        <div className="row">
          <div className="info mt-5 text-center">
            Estimado/a estudiante: Al dedicar unos minutos de tu tiempo para
            evaluar <br />
            puedes contribuir a la mejora del trabajo docente. <br /> <br />{' '}
            Evalúa con respeto, tus respuestas son confidenciales y anónimas.{' '}
            <br /> <br />
            <b className="text-success"> Docentes a evaluar</b>
          </div>
          <hr />
        </div>
      </div>
      <div id="profesores" className="container">
        <ProfesoresList />
      </div>
    </>
  )
}
