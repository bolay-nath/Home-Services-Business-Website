import Nav from "./component/Nav";
import HomeSection from "./component/Home";
import ServiceWorker from "./component/Services";
import PortfolioSection from "./component/Portfolio";
import PricingSection from "./component/Priching";
import ContactSection from "./component/Contact";
import Footer from "./component/Footer";
import WhatsappPopup from "./component/WhatsappPopup";
import FAQSection from "./component/FAQSection";
import WhyChooseUsSection from "./component/WhyChoseUs";
import ProcessSection from "./component/ProcessSection";

export default function Home() {
  return (
    <div>
      <Nav />
      <HomeSection />
      <ServiceWorker />
      <PortfolioSection />
      <ProcessSection />
      <PricingSection />
      <WhyChooseUsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
      <WhatsappPopup />
    </div>
  );
}
