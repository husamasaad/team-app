


import { sectionsData } from '@/constants/data'
import { Footer, Navbar, Testimonials } from '@/components/index'
import { FlexSection, Hero } from '@/components/index'


export default function Home() {

  return (
    <>
    <Navbar light={false} />
    <main className='overflow-hidden'>
      <Hero />
      {sectionsData.map(obj => (
        <FlexSection key={obj.id} section={obj} />
      ))}
      <Testimonials />
    </main>
    <Footer />
    </>
  )
}
