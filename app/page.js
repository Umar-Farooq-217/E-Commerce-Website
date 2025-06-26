import Image from 'next/image';
import Navbar from './components/navbar/Navbar'
import StartedButton from './components/startedButton/startedButton'
export default function Home() {
  return (
   <div className="bg-[#2b2b2b] h-screen min-w-full z-0  text-white">
    <Navbar/>

    <div className="px-[195px] py-[80px]">
      <div className="">
        <h1 className="">Discover digital art & Collect NFTs</h1>
        <p className="">NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.</p>
        <StartedButton title='Get Started'/>
        <div>
          <div className="">
            <h4 className="">240k+</h4>
            <p className="">Total Sales</p>
          </div>
          
        </div>
      </div>
      <div className="">
        <Image src='/space.png' width={510} height={401} alt="space man Image" />
        <h1 className="">Space Walking</h1>
        <div className="">
            <Image src='/smallicon.svg' width={24} height={24} alt="space man Image" />
            <p className="">Animakid</p>
        </div>
      </div>
    </div>
   </div>
  );
}
