import Classic from "./components/Classic";
import Editorchoice from "./components/Editorchoice";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Herosection from "./components/Herosection";
import Navbar from "./components/Navbar";
import Neural from "./components/Neural";
import Post from "./components/Post";
import Products from "./components/Products";

export default function Home() {
  return (
    <div>
      <Header />

      <Navbar />

      <Herosection />

      <Editorchoice />

      <Products />

      <Classic />

      <Neural />
      <Post />
      <Footer />
    </div>
  );
}
