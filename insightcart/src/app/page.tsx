import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Welcome to InsightCart</h1>
      <p className="mt-4 text-lg">Your one-stop solution for data-driven insights.</p>
      <Image
        src="/globe.svg"
        alt="InsightCart Logo"
        width={200}
        height={200}
        className="mt-8"
      />
    </main>
  );
}
