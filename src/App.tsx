import { Footer } from "./Footer";
import { Header } from "./Header";

function App() {
  return (
    <>
      <Header />
      <section className=" bg-gray-200 h-screen">
        <div className="flex items-center justify-center font-bold text-4xl text-teal-800">
          Hello World!
        </div>
      </section>
      <Footer />
    </>
  );
}
export default App;
