import './AboutMePageStyle.css'
import me_01 from './../assets/images/me_01.jpeg'
import { CustomTitle } from './CustomTitle'
import { OutlinedButton, RaisedButton } from './Buttons'

export function AboutMeSection () {
    return <div className="bg-black-56 xl:px-32">
        <div className="py-32 max-w-lg mx-auto lg:max-w-6xl md:max-w-3xl px-6 xl:px-0 grid lg:grid-cols-3 xl:max-w-full ">
            {/* Image */}
            <div className="flex lg:col-span-1" data-aos="fade-right" data-aos-duration="1000">
                <div className="block about-me-img-size border-8 border-amber-500"></div>
                <img className="absolute border-8 border-black-87 shadow-lg transform translate-x-10 -translate-y-10 about-me-img-size object-cover xl:ml-26" src={me_01} alt="me"/>
            </div>

            {/* Texte */}
            <div className="pt-12 lg:col-span-2 xl:pl-20 lg:pl-32" data-aos="fade-left" data-aos-duration="700" data-aos-delay="700">
                <CustomTitle text="Qui suis-je ?" />

                <p className="pt-8 text-sm max-w-md md:text-lg  md:max-w-2xl text-white-52 font-sans">Je m'appelle Titosy, je suis étudiant en licence d'administration des entreprises, génie logiciel et intelligence artificielle à l'Institut Supérieur Polytéchnique de Madagascar (ISPM).  
Mon principal intérêt pour l'informatique le développement mobile, j'ai des compétences dans les technologies récentes notamment React Native et aussi Flutter de Google. Passionné par le design et le développement front-end, j'ai à cœur de compléter les opportunités qui me sont données en construisant des solutions modernes et efficaces. Rigoureux et exigeant, je veille à respecter les bonnes pratiques et les standards de développement. Étant également curieux et ouvert d'esprit, j'aime expérimenter les dernières tendances par une veille quotidienne.</p>
                
                <div className="flex items-center space-x-6">
                    <RaisedButton text="Contactez-moi"/>
                    <OutlinedButton text="Télecharger CV"/>
                </div>
            </div>
        </div>
    </div>
}