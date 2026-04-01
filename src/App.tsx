/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureSection from './components/FeatureSection';
import Offerings from './components/Offerings';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        
        <FeatureSection 
          title="Tomorrow should be better than today"
          description="We are a team of strategists, designers communicators, researchers. Togeather, we belive that progress only happens when you refuse to play things safe."
          image="https://picsum.photos/seed/meeting/800/800"
          underlineType="yellow"
        />

        <FeatureSection 
          title="See how we can help you progress"
          description="We add a layer of fearless insights and action that allows change makers to accelerate their progress in areas such as brand, design digital, comms and social research."
          image="https://picsum.photos/seed/working/800/800"
          reverse
          underlineType="yellow"
        />

        <Offerings />
        
        <Testimonials />
        
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
