import { Abril_Fatface } from "next/font/google"
import Navbar from "./components/menu/menu";
import Services from "./components/services/services";

const Abril = Abril_Fatface({weight : '400', subsets: ["latin"]})

export default function Home() {
  return (
    <main className="" >
      <Navbar/>
      <div className=" mx-40 mt-12 mb-24 relative flex flex-col  before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <h1 className={`${Abril.className} text-8xl` }>MULTI-DISCPLINARY <br/>DESIGN STUDIO</h1>
        <p className="mt-8 text-2xl w-8/12">We believe  in creating human centered digital products and experiences  that lead to vibrant businesses and outstanding brands loved by consumers.</p>
      </div>
      <Services/>
    </main>
  );
}
