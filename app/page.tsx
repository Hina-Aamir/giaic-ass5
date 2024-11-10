import Image from "next/image";
import Header from "./components/Header/header.tsx";

export default function Home() {
  return (
    <div >
         <Header />
         <div className="flex">
         <div className="container h-[calc(100vh-100px)] ,w-1/2 bg-white p-20 ">
          <h1 className="text-extrabold text-3xl

">IMPECCABLE <br></br>CRAFTSMANSHIP AND <br></br>FINESSE
         </h1><br></br><br></br>
          <p>An example of intricate workmanship and detail, elegant<br></br> 
          necklaces and long and short chains form a part of our <br></br>
          desirable collection.</p><br></br><br></br>
         

<button className="bg-[#A29875] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  EXPLORE NOW
</button>




           </div>
     
<div className="container h-[calc(100vh-100px)] ,w-full bg-white p-10 ">
<img src="assets/img1.png" alt="Image" className="w-[450px] h-[500px] " />
{/* <img src="assets/img2.png" alt="Image" className="w-[400px] h-[459px] m-8" /> */}
</div>

</div> 
    </div>
  );
}
