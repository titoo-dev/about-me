import { Iconly } from 'react-iconly'


export function ContactSection () {
    return <div className="py-32 bg-black-56">
        <h3 className="text-3xl text-white-60 text-center">Dites bonjour</h3>
        <p className="text-lg text-white-52 text-center max-w-lg mx-auto pt-6">Je suis disponible pour des projets freelances, travaille à dista ou juste discuter de design, n'hesitez pas à me contacter via</p>
        <p className="flex justify-center text-lg text-amber-500 text-center max-w-lg mx-auto pt-8">
            <div className="mr-1 mt-1"><Iconly name="Message" primaryColor="orange"/></div> <span>titosymanankasina1@gmail.com</span>
        </p>
        <p className="flex justify-center text-lg text-amber-500 text-center max-w-lg mx-auto pt-8">
            <div className="mr-1 mt-1"><Iconly name="Call" primaryColor="orange"/></div> <span>(+261) 34 52 322 74</span>
        </p>
<p className="flex justify-center text-lg text-amber-500 text-center max-w-lg mx-auto pt-8">
            <span>RAZAFIMBELO Titosy Manankasina IGGLIA3</span>
        </p>
    </div>
}
