import {AttractiveCar} from './component/attractive_acceuil'
import {Header}  from './component/header'
import { FeaturesSection } from './component/pourquoi_layout'
import { ServicesSection } from './component/services_session'

export function Test() {
    return (
       <>
          <Header />
          <AttractiveCar />
          <ServicesSection/>
          <FeaturesSection />
       </>
    )

}
