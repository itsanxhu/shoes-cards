import { DotBackgroundDemo } from "./Components/Dotbg";
import ShoesCard from "./Components/ShoesCard";

const App = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <DotBackgroundDemo />
      <div className="relative z-10 flex flex-col lg:flex-row justify-center gap-10">
        <ShoesCard
          title="Jordan Sixty Plus Low"
          brand="Nike"
          img="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/c/e/ce80759Nike-IH2047-100_1.jpg?rnd=20200526195200&tr=w-1080"
          hoverImg="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/c/e/ce80759Nike-IH2047-100_8.jpg?rnd=20200526195200&tr=w-1080"
          price={138}
        />
        <ShoesCard
          title="Nike Structure Plus"
          brand="Nike"
          img="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/a/b/ab828aaNike-HQ3048-400_1.jpg?rnd=20200526195200&tr=w-1080"
          hoverImg="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/a/b/ab828aaNike-HQ3048-400_8.jpg?rnd=20200526195200&tr=w-1080"
          price={157}
        />
        <ShoesCard
          title="Nike Air Max Alpha Trainer 6"
          brand="Nike"
          img="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/a/b/ab828aaNike-FQ1833-014_1.jpg?rnd=20200526195200&tr=w-1080"
          hoverImg="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/a/b/ab828aaNike-FQ1833-014_8.jpg?rnd=20200526195200&tr=w-1080"
          price={124}
        />
      </div>
    </div>
  );
};

export default App;
