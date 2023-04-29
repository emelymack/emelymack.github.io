import style from '../assets/css/AboutMe.module.scss'
import htmlLogo from '../assets/img/html.png'
import cssLogo from '../assets/img/css.png'
import javascriptLogo from '../assets/img/javascript.png'
import reactLogo from '../assets/img/react.png'
import gitLogo from '../assets/img/git.png'
import typescriptLogo from '../assets/img/typescript.svg'
import bootstrapLogo from '../assets/img/bootstrap.png'
import sassLogo from '../assets/img/sass.png'
import mysqlLogo from '../assets/img/mysql.png'
import nodejsLogo from '../assets/img/nodejs.png'
import postmanLogo from '../assets/img/postman.webp'
import javaLogo from '../assets/img/java.png'
import reduxLogo from '../assets/img/redux.png'
import figmaLogo from '../assets/img/figma.png'
import adobexdLogo from '../assets/img/adobexd.png'
import agileLogo from '../assets/img/agile.png'

export const Skills = () => (
  <div className="container p-5">
    <div className="row row-cols-4 gx-0 gy-4">
      <div className={`col ${style.skillsCol}`}>
        <img src={htmlLogo} alt="HTML" width={125} className='mb-2' />
        HTML
      </div>
      <div className={`col ${style.skillsCol}`}>
        <img src={cssLogo} alt="CSS" width={90} className='mb-2' />
        CSS
      </div>
      <div className={`col ${style.skillsCol}`}>
        <img src={javascriptLogo} alt="JavaScript" height={110} className='mb-3' style={{borderRadius: '10px'}} />
        JavaScript
      </div>
      <div className={`col ${style.skillsCol}`}>
        <img src={typescriptLogo} alt="TypeScript" width={110} className='mb-3' />
        TypeScript
      </div>
      <div className={`col ${style.skillsCol}`}>
        <img src={reactLogo} alt="React" width={110} className='mb-3' />
        React
      </div>
      <div className={`col ${style.skillsCol}`}>
        <img src={reduxLogo} alt="Redux" width={150} className='mb-1' />
        Redux
      </div>
      <div className={`col ${style.skillsCol}`}>
        <img src={bootstrapLogo} alt="Bootstrap" width={120} className='mb-4' />
        Bootstrap
      </div>
      <div className={`col ${style.skillsCol}`}>
        <img src={sassLogo} alt="Sass" width={130} className='mb-3' />
        Sass
      </div>
      <div className={`col ${style.skillsCol}`}>
        <img src={gitLogo} alt="Git" width={110} className='mb-3' />
        Git
      </div>
      <div className={`col ${style.skillsCol}`}>
        <img src={mysqlLogo} alt="MySQL" width={150} className='mb-4' />
        MySQL
      </div>
      <div className={`col ${style.skillsCol}`}>
        <img src={nodejsLogo} alt="Node JS" width={130} className='mb-3' />
        Node JS
      </div>
      <div className={`col ${style.skillsCol}`}>
        <img src={postmanLogo} alt="Postman" width={100} className='mb-2' />
        Postman
      </div>
      <div className={`col ${style.skillsCol}`}>
        <img src={javaLogo} alt="Java" width={100} className='mb-2' />
        Java
      </div>
      <div className={`col ${style.skillsCol}`}>
        <img src={figmaLogo} alt="Figma" width={110} className='mb-3' />
        Figma
      </div>
      <div className={`col ${style.skillsCol}`}>
        <img src={adobexdLogo} alt="AdobeXD" width={100} className='mb-3' />
        AdobeXD
      </div>
      <div className={`col ${style.skillsCol}`}>
        <img src={agileLogo} alt="Agile Methodologies" width={100} className='mb-2' />
        Agile Methodologies
      </div>
    </div>
  </div>
)