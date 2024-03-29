import devIcon from '../../assets/img/developer.svg'
import style from '../../assets/css/Banner.module.scss'
import { useAppSelector } from '../../hooks/hooks'
import Lottie from 'lottie-react';
import animation from '../../assets/lotties/banner-lottie.json'

export const Banner = () => {
  const language: string = useAppSelector(state => state.language)

  const greeting = (language === 'eng') ? 'Hi' : 'Hola'
  const name = (language === 'eng') ? "I'm Emely Mack" : 'Me llamo Emely Mack'
  const btnTxt = (language === 'eng') ? "Contact me" : 'Contactame'
  const subtitle = (language === 'eng') ? "A passionate Frontend Web Developer focused on building beautiful, useful, and responsive websites that catch the eye and enhance user experiences" : 'Soy una Desarrolladora Web Frontend apasionada y enfocada en construir sitios web hermosos, funcionales y responsive que atrapen tu mirada y mejoren tu user experience'

  return (
    <div className={style.banner}>
      <div className='container d-flex align-items-center justify-content-start py-4 px-4 px-lg-0 animate__animated animate__flipInX'>
        <div className="row row-cols-1 row-cols-lg-2">
          <div className="col d-flex justify-content-center">
            <Lottie animationData={animation} loop={true} style={{width: '100%'}} />
            {/* <img src={devImg} alt="" className={style.bannerImg} /> */}
          </div>
          <div className="col d-flex flex-column justify-content-center align-items-center align-items-lg-start pe-lg-5">
            <h1 className={`me-3 ${style.title} display-5 text-center text-lg-start`}>{greeting}!<br className='d-none d-lg-block'/> {name}</h1>
            <img src={devIcon} alt={'Imagen de programadora'} width={50} />
            <p className='mt-4 fst-italic text-center text-lg-start' style={{fontSize: '18px'}}>
              {subtitle}.
            </p>
            <a href="#contact" className='btn btn-secondary px-4'>{btnTxt}!</a>
          </div>
        </div>
      </div>
    </div>
    
  )
}