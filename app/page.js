import Image from "next/image";
import Nav from "./component/Nav";
import HomeSection from "./component/Home";
import AboutSection from "./component/About";
import ServiceWorker from "./component/Services";
import PortfolioSection from "./component/Portfolio";
import PricingSection from "./component/Priching";
import ContactSection from "./component/Contact";
import Footer from "./component/Footer";
import WhatsappPopup from "./component/WhatsappPopup";
import FAQSection from "./component/FAQSection";
import WhyChooseUsSection from "./component/WhyChoseUs";

export default function Home() {
  return (
    <div>
      <Nav />
      <HomeSection />
      <AboutSection />
      <ServiceWorker />
      <PortfolioSection />
      <PricingSection />
      <WhyChooseUsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
      <WhatsappPopup />
    </div>
  );
}
