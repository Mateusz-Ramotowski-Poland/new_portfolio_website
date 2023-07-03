import { Container } from "./components";
import { About, Contact, Footer, Header, Hero, Projects, Skills, Testimonials } from "./page_sections";
import "./styles/App.scss";

export const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Container>
        <About />
        <Skills />
        <Projects />
        <Testimonials />
        <Contact />
      </Container>
      <Footer />
    </>
  );
};
