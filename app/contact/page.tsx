import Header from "@/components/MainPage/Header";
import Footer from "@/components/MainPage/Footer";
import ContactHero from "@/components/ContactPage/ContactHero";
import ContactForm from "@/components/ContactPage/ContactForm";
import ContactInfo from "@/components/ContactPage/ContactInfo";
import ContactCTA from "@/components/ContactPage/ContactCTA";

export const metadata = {
  title: "Contact Aseiro – Machine Vision & Automation Solutions UK & India",
  description: "Contact Aseiro for industrial automation, machine vision, and quality inspection solutions in the UK and India. Offices in Sheffield & Hyderabad.",
};

export default function ContactPage() {
  return (
    <div className="font-sans bg-white">
      <Header />
      <main>
        <ContactHero />
        {/* Contact Form & Info Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              <ContactForm />
              <ContactInfo />
            </div>
          </div>
        </section>
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}
