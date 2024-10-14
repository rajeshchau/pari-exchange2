
import Header from "./components/Header"
import Trending from "./components/Trending"

import PriceTickerTable from '../app/context/PriceTickertable';
import Footer from '../app/context/footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="mt-10"/>
      <Trending />

      <div className="mt-20"/>
      <PriceTickerTable />
      <Footer />
      
    </div>
  );
}
