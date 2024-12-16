import ByItems from "./components/ByItems/byitems";
import Footer from "./components/footer/footer";
import Mainpage from "./components/mainpage/mainpage";
import Navbar from "./components/navbar/navbar";
import TopProducts from "./components/Products/TopProducts";
import EmblaCarousel from "./components/src/js/EmblaCarousel";
import Timer from "./components/Timer/timer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Mainpage />
      <ByItems />
      <TopProducts />
      <Timer />
      <EmblaCarousel/>
      <Footer />
  


    </div>
  );
}
