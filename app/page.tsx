import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/components/widgets/Hero";
import Clients from "@/components/widgets/Clients";
import Community from "@/components/widgets/Community";
import Teach from "@/components/widgets/Teach";

export default function Home() {
  return (
    <>
      <Hero />
      <Clients />
      <Community />
      <Teach />
    </>
  );
}
