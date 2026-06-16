import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// export default function Home() {
//   return (
//     <main className="relative min-h-screen bg-[#030712] text-white overflow-x-hidden">
//       <Navbar />
//       <Hero />
//       <About />
//       <Skills />
//       <Projects />
//       <Experience />
//       <Achievements />
//       <Contact />
//       <Footer />
//     </main>
//   );
// }

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Gaurav Chavda",
    jobTitle: "Flutter Developer",
    url: "https://gauravchavda.in",
    email: "gauravchavda3430@gmail.com",
    telephone: "+919904525377",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ahmedabad",
      addressRegion: "Gujarat",
      addressCountry: "IN",
    },
    sameAs: [
      "https://linkedin.com/in/gaurav-chavda",
      "https://github.com/GauravChavda1",
    ],
    knowsAbout: [
      "Flutter", "Dart", "Firebase", "Mobile Development",
      "MVVM", "BLoC", "GetX", "REST APIs",
    ],
  };

  return (
    <main className="relative min-h-screen bg-[#030712] text-white overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Achievements />
      <Contact />
      <Footer />
    </main>
  );
}