import Navbar              from "./components/Navbar";
import Ticker              from "./components/Ticker";
import HeroSlider          from "./components/HeroSlider";
import AlertStrip          from "./components/AlertStrip";
import StatsSection        from "./components/StatsSection";
import NotificationsSection from "./components/NotificationsSection";
import NewsSection         from "./components/NewsSection";
import EventsSection       from "./components/EventsSection";
import QuickLinksSection   from "./components/QuickLinksSection";
import Footer              from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Ticker />
      <HeroSlider />
      <AlertStrip />
      <main>
        <StatsSection />
        <hr className="section-divider" />
        <NotificationsSection />
        <hr className="section-divider" />
        <NewsSection />
        <hr className="section-divider" />
        <EventsSection />
        <hr className="section-divider" />
        <QuickLinksSection />
      </main>
      <Footer />
    </>
  );
}
