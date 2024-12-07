import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="text-3xl text-sky-700 ">
      <p>Hello</p>
      <Button variant={"destructive"}>Click me</Button>
    </div>
  );
}
