import { FC } from 'react'
import { AlumnoList } from '../modules/alumno/alumnoList'
export const Alumno: FC = () => {
  return (
    <div className="estudiante-screen pb-5">
      <div id="estudiante">
        <AlumnoList />
      </div>
    </div>
  )
}
