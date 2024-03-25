import Image from "next/image";
import Hero from "@/components/Hero"
import Body from "@/components/Body"
import MobileBody from "@/components/MobileBody";
import MobileFooter from "@/components/MobileFooter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Body />
      <MobileBody />
      <Footer />
      <MobileFooter />

    </main>
  );
}
