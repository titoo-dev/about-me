import { ServiceCard } from './ServiceCard'


export function ServicesSection () {
    return <div className="py-16 px-6 max-w-lg mx-auto xl:max-w-full xl:px-32 md:max-w-3xl lg:max-w-6xl bg-black-87">
        <div className="inline-block" data-aos="fade-right" data-aos-duration="1000">
            <h2 className="pb-5 text-white-60 font-bold text-3xl lg:text-4xl">Mes services</h2>
            <div className="w-6/12 border-b-4 border-amber-500"></div>
        </div>
        <p className="pt-8 text-sm md:text-lg lg:max-w-xl text-white-52 font-sans" data-aos="fade-right" data-aos-delay="700" data-aos-duration="1000">Voici quelques services que je peux vous offrir, pour le moment je suis en plein apprentissage mais je vous offre le meilleur de ce que je peux faire.</p>
        <div className="grid pt-12 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            <ServiceCard color="blue" title="Etude UX"  text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque soluta inventore illum dolore. Laudantium vero voluptatibus quia neque eaque ab voluptates rem distinctio, ducimus dolores excepturi"/>
            <ServiceCard color="purple"title="Integration Mobile" text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque soluta inventore illum dolore. Laudantium vero voluptatibus quia neque eaque ab voluptates rem distinctio, ducimus dolores excepturi"/>
            <ServiceCard color="green" title="App Design"  text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque soluta inventore illum dolore. Laudantium vero voluptatibus quia neque eaque ab voluptates rem distinctio, ducimus dolores excepturi"/>
            <ServiceCard color="pink" title="Mobile design"  text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque soluta inventore illum dolore. Laudantium vero voluptatibus quia neque eaque ab voluptates rem distinctio, ducimus dolores excepturi"/>
        </div>
    </div>
}