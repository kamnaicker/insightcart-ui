import Hero from "@/components/hero";
import { getInsightCartPayload } from "@/lib/fetchInsightCart";

export const dynamic = "force-dynamic";

export default async function Home() {
  const payload = await getInsightCartPayload();   // server-only fetch
  return (
    <main className="mx-auto max-w-7xl px-6 py-20">
      <Hero {...payload} />
    </main>
  );
}
