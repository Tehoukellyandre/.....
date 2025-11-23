import { createFileRoute } from '@tanstack/react-router'
import { AttractiveCar } from '../component/attractive_acceuil'
import { FamilleInteret } from '../component/famille_layout'
import { HeroSection } from '../component/hero_session'
import { FeaturesSection } from '../component/pourquoi_layout'
import { ServicesSection } from '../component/services_session'

export const Route = createFileRoute('/accueil')({ 
  component: Home,
})

function Home() {
  return (
    <>
      <AttractiveCar />
      <ServicesSection/>
      <FeaturesSection />
      <HeroSection />
      <FamilleInteret/>
    </>
  )
}