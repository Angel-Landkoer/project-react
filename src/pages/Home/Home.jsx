// import Hooks

// import components
// header
import { NavBar } from "../../components/NavBar/NavBar";
import { CardNFT } from "../../components/CardNFT/CardNFT";
import { DiscoverH } from "../../components/DiscoverH/DiscoverH";

// main
import { ContainerCardsNFT } from "../../components/ContainerCardsNFT/ContainerCardsNFT";
import { SectionCreateSellNFT } from "../../components/SectionCreateSellNFT/SectionCreateSellNFT";
import { SectionLogos } from "../../components/SectionLogos/SectionLogos";
import { CardDetailsContainer } from "../../components/CardDetailsContainer/CardDetailsContainer";

// import styles
import "./Home.scss";

export function Home() {
  return (
    <>
      <header>
        <section className="header">
          {/* <NavBar /> */}
          <DiscoverH />
          <CardNFT
            description={"Heat Wave No GIF by Loof and Timmy"}
            image={
              "https://media3.giphy.com/media/TeRP089ltwj4Ib61aj/giphy.gif?cid=d13c8921t1eayoo1h5fbxjoroy9mttl8qt7e0cbvu7sqiff5&rid=giphy.gif&ct=g"
            }
          />
        </section>
      </header>
      <main>
        <section className="main">
          <SectionLogos />
          <SectionCreateSellNFT />
          <ContainerCardsNFT title={"Live Auctions"} />
          {/* <CardDetailsContainer /> */}
        </section>
      </main>
    </>
  );
}
