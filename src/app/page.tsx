import Image from "next/image";
import Hero from "@/components/Hero"
import Body from "@/components/Body"
import MobileBody from "@/components/MobileBody";
import MobileFooter from "@/components/MobileFooter";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Body />
      <MobileBody />
      <MobileFooter />

    </main>
  );
}
