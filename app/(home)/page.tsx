import RichEditor from "@/components/rich-editor";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Tamo ai mano</h1>
      <RichEditor />
    </main>
  );
}
