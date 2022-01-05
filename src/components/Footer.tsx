import { FC } from 'react'
import imagenes from '../assets/img/images'

export const Footer: FC = () => {
  return (
    <footer className="footer-desing mt-5">
      <div>
        {/* <img className="wave" src="../assets/img/wave2.png" style="filter: invert(); width: 100%;" alt=""> */}
        <img
          className="wave w-100"
          style={{ filter: 'invert()' }}
          src={imagenes.wave}
          alt=""
        />
      </div>
      <div className="container">
        <div className="row">
          <div className="footer-info d-flex flex-wrap">
            <div className="info col-md-6 mt-4 order-1">
              {/* <img src="https://www.ucol.mx/cms/beta/img/icon/logo.png " style="filter: invert(); margin-bottom: 3%;" alt=" "> */}
              <img
                className="mb-3"
                style={{ filter: 'invert()' }}
                src={imagenes.udcLogo}
                alt=""
              />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum eum
                tempora vero ab ipsa soluta sed, rem voluptate distinctio nihil!
                Ad ipsum minus animi in odio facilis distinctio amet quibusdam.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Dolorum, ratione eum deleniti quos voluptatem, sunt beatae
                aperiam praesentium fuga aspernatur, ad aut. Nihil veritatis
                cumque neque non perspiciatis omnis aperiam. Lorem ipsum dolor
                sit, amet consectetur adipisicing elit. Consequuntur nam
                asperiores dolor autem, eveniet nesciunt veniam? Rem veniam
                accusamus provident possimus accusantium vitae nisi at, eius
                aperiam consequuntur, autem ullam.
              </p>
            </div>
            <div className="redes-sociales col-md-6 order-2 col-12">
              <h3 className="social-title ">REDES SOCIALES</h3>
              <a
                href="https://www.facebook.com/UdeC.oficial"
                target="_blank"
                rel="noreferrer"
              >
                {' '}
                <img className="social-img" src={imagenes.facebook} alt="" />
              </a>
              <a
                href="https://twitter.com/udec_oficial"
                target="_blank"
                rel="noreferrer"
              >
                {' '}
                <img className="social-img" src={imagenes.twitter} alt="" />
              </a>
              <a
                href="https://www.instagram.com/udec.oficial/?hl=es-la"
                target="_blank"
                rel="noreferrer"
              >
                <img className="social-img" src={imagenes.instagram} alt="" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCAb8uVFknu27Per_vLM4tGg"
                target="_blank"
                rel="noreferrer"
              >
                <img className="social-img" src={imagenes.youtube} alt="" />
              </a>
            </div>
          </div>
          <div className="derechos col-md-12 mt-5 text-center">
            <p>
              Dirección: Av. Universidad No. 333, Las Víboras; CP 28040 Colima,
              Colima, México <br /> © Derechos Reservados 2018-2022 Universidad
              de Colima
            </p>
            <hr />
          </div>
        </div>
      </div>
    </footer>
  )
}
