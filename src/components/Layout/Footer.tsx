import { Link } from 'react-router-dom'
import style from '../../assets/css/Footer.module.scss'
import logo from '../../assets/img/logo-white.png'
import github from '../../assets/img/github-white.svg'
import mail from '../../assets/img/mail.svg'
import linkedin from '../../assets/img/linkedin-white.svg'
import { useAppSelector } from '../../hooks/hooks'

export const Footer = () => {
  const lang: string = useAppSelector(state => state.language)

  const copy = (lang === 'eng') ? 'Created by' : 'Creado por'
  return(
    <div className={`pt-3 ${style.footer}`}>
      <div className="container d-flex flex-column align-items-center py-5 text-white">
        <Link to={'/'}><img src={logo} width={220} alt="Emely Mack - Front End Developer" /></Link>
        <span className='text-center mt-4 fst-italic mx-5'>{(lang === 'eng') ? 'Bringing your vision to life' : 'Dándole vida a tu visión'}, <br className='d-md-none'/>{(lang === 'eng') ? 'one pixel at a time' : 'un pixel a la vez'}</span>
        <div className={`${style.rrss} mt-5`}>
          <a href='https://www.github.com/emelymack' target='_blank'><img src={github} className={style.icon} /></a>
          <a href='https://www.linkedin.com/in/emelymack' target='_blank'><img src={linkedin} className={style.icon} /></a>
          <a href='mailto:emelymackdev@gmail.com'><img src={mail} className={style.icon} /></a>
        </div>
      </div>
      <div className={`text-center py-2 ${style.copy}`}>
        <span>© Copyright 2023. {copy} <a href="./" className='text-white'>Emely Mack</a></span>
      </div>
    </div>
  
  )
}