import Help from "../components/Layout/help";
import Happy from "../components/Layout/happy";
import SanDiego from "../components/Layout/san-diego";
import Banner from "../components/Layout/banner";
import Awards from "../components/Layout/awards";
import Clients from "../components/Layout/clients";

export default function Home() {
  return (
    <>
      <Banner />
      <Awards />
      <Clients />
      <Happy />
      <SanDiego />
      <Help />
    </>
  );
}
