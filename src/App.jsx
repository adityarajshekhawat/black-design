import "./styles/animation.scss";
import "./styles/responsive.scss";
// importing the componets
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Theme from "./resuable-comp/themechange/Theme";
import { ThemeProvider } from "./resuable-comp/themetoogler/toogletheme";
import Hero from "./pages/Hero";
import Adv from "./pages/Advanteges";
import Techno from "./pages/Tech";
import Latestdesign from "./pages/Latestdesign";
import Testimonials from "./pages/Testimonials";
import Latestnews from "./pages/Latestnews";
import Exp from "./pages/Exp";
import Footer from "./pages/Footer";
import AnimatedButton from "./resuable-comp/btn/Dtn";
import Newbtn from "./resuable-comp/new-btn/New-btn";
function App() {
  return (
    <>
      <ThemeProvider>
        <Theme />
        <Navbar />
        <Home />
        <Hero />
        <Adv  />
        <Techno />
        <Latestdesign />
        <Testimonials />
        <Latestnews />
        <Exp />
        <Footer />
      </ThemeProvider>
      {/* <AnimatedButton>Hello</AnimatedButton> */}
      {/* <Newbtn /> */}
    </>
  );
}

export default App;
