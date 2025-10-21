import Layout from './components/Layout/Layout';
import ThreeScene from './components/Scene/Scene';
import HomeSection from './sections/Home/HomeSection';
import AboutSection from './sections/About/AboutSection';
import ProjectsSection from './sections/Projects/ProjectsSection';
import ContactSection from './sections/Contact/ContactSection';

function App() {
  return (
    <>
      <ThreeScene />
      <Layout>
        <HomeSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </Layout>
    </>
  );
}

export default App;