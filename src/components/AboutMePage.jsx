import { Banner } from './Banner'
import { AboutMeSection } from './AboutMeSection'
import { ServicesSection } from './ServicesSection'
import { ContactSection } from './ContactSection'

export function AboutMePage () {
    return <>
        <Banner></Banner>
        <AboutMeSection></AboutMeSection>
        <ServicesSection></ServicesSection>
        <ContactSection></ContactSection>
    </>
}