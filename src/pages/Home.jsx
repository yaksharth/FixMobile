import React from 'react';
import Hero from '../components/Hero';
import FeaturesBar from '../components/FeaturesBar';
import Services from '../components/Services';
import Estimator from '../components/Estimator';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturesBar />
      <Services />
      <Estimator />
      <Process />
      <Testimonials />
    </>
  );
}
