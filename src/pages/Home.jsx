import PageTransition from '../components/ui/PageTransition';
import useSeo from '../hooks/useSeo';
import Hero from '../components/sections/home/Hero';
import Intro from '../components/sections/home/Intro';
import Categories from '../components/sections/home/Categories';
import WhyUs from '../components/sections/home/WhyUs';
import Featured from '../components/sections/home/Featured';
import Partners from '../components/sections/home/Partners';
import Certifications from '../components/sections/home/Certifications';
import Stats from '../components/sections/home/Stats';
import CTA from '../components/sections/home/CTA';

export default function Home() {
  useSeo('nav.home', 'home.hero.subtitle');

  return (
    <PageTransition>
      <Hero />
      <Intro />
      <Categories />
      <WhyUs />
      
      <Partners />
      <Certifications />
      <Stats />
      <CTA />
    </PageTransition>
  );
}
