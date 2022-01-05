// Datos del estudiante
import { FC, useEffect, useState } from 'react'
import datosAlumnos from './estudiante.json'
export const AlumnoList: FC = () => {
  const [images, setImages] = useState<Map<string, string>>(new Map())
  useEffect(() => {
    async function getAlumnosImages() {
      const newImages = new Map<string, string>()

      for (const alumno of datosAlumnos) {
        const src = await import('../../assets/img/' + alumno.Imagen)
        newImages.set(alumno.Imagen, src.default)
      }
      setImages(newImages)
    }
    getAlumnosImages()
  }, [])
  return (
    <>
      {datosAlumnos.map((i) => {
        return (
          <div key={i.Name} className="d-flex content-father">
            <div className="d-flex justify-content-center mt-4 w-100">
              <img className="mb-4 foto-alumno" src={images.get(i.Imagen)} />
            </div>
            <div className="col-md-12 text-center">
              <b> {i.Name} </b> <br /> <b> {i.Facultad} </b> <br />{' '}
              <b> {i.CicloEscolar} </b>
            </div>
          </div>
        )
      })}
    </>
  )
}
