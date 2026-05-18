'use client';

import Hero from '@/components/Hero';
import Metrics from '@/components/Metrics';
import Services from '@/components/Services';
import CampaignShowcase from '@/components/CampaignShowcase';
import AIEngine from '@/components/AIEngine';
import Process from '@/components/Process';
import ClientWall from '@/components/ClientWall';
import Testimonials from '@/components/Testimonials';
import AILab from '@/components/AILab';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Hero />
      <section id="metrics">
        <Metrics />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="work">
        <CampaignShowcase />
      </section>
      <section id="ai-engine">
        <AIEngine />
      </section>
      <section id="process">
        <Process />
      </section>
      <section id="clients">
        <ClientWall />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="lab">
        <AILab />
      </section>
      <section id="contact">
        <ContactForm />
      </section>
      <Footer />
    </>
  );
}
