// Runs at the edge; just streams the body straight to the Worker.
export const runtime = "edge";

export async function POST(req: Request) {
  const body = await req.text();                     // keep it raw
  const res  = await fetch(`${process.env.NEXT_PUBLIC_API_ORIGIN}/orders`, {
    method: "POST",
    body,
    headers: { "content-type": "application/json" },
  });
  return new Response(null, { status: res.ok ? 204 : 500 });
}
