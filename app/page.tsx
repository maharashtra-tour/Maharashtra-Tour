import Banner from './components/Banner/index';
import Companies from './components/Companies/Companies';
import Courses from './components/Courses/index';
import Mentor from './components/Mentor/index';
import Testimonials from './components/Testimonials/index';
import Newsletter from './components/Newsletter/Newsletter';
import Aboutus from './components/AboutUs';
import Fleets from './components/Fleets/index';
import PopularRoutes from './components/PopularRoutes';
import FAQ from './components/FAQ';




export default function Home() {
  return (
    <main>
      <Banner />
      <Companies />
      <Courses />
      <Aboutus />
      <Fleets />
      {/* <Mentor /> */}
      <Testimonials />
      <PopularRoutes />
      <FAQ/>
      <Newsletter />
    </main>
  )
}
