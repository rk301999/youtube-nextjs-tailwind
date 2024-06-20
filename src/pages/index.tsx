import Image from "next/image";
import { Inter } from "next/font/google";
import VideoCard from "@/components/VideoCard";
import VideoGrid from "@/components/VideoGrid";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
   <>
    <Navbar/>
    <div className="grid grid-cols-12 gap-7">
    <Sidebar/>
    <VideoGrid/>
    </div>
   </>
  );
}
