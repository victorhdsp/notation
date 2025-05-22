import RichEditor from "@/components/rich-editor";
import mockDocument from "@/tests/__mock__/document";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <RichEditor document={mockDocument} />
    </main>
  );
}
