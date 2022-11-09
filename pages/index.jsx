import Banner from "../components/Layout/Banner";
import Awards from "../components/Layout/Awards";
import Clients from "../components/Layout/Clients";
import Happy from "../components/Layout/happy";
import SanDiego from "../components/Layout/san-diego";
import Help from "../components/Layout/Help";

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
