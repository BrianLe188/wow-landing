import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import AppPreview from "@/components/AppPreview";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Page = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="features">
          <Features />
        </section>
        <section id="app">
          <AppPreview />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Page;
