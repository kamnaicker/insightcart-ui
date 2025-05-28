"use server";

import { headers } from "next/headers";

export async function placeOrder(data: {
  email: string;
  cart: { sku: string; qty: number }[];
}) {
  // Works in dev, Vercel, Pages, etc.
  const headerObj = await headers();
  const host = headerObj.get("host")!;           // e.g. localhost:3000 or demo.pages.dev
  const proto = host.startsWith("localhost") ? "http" : "https";
  const url   = `${proto}://${host}/api/orders`;

  await fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "content-type": "application/json" },
    cache: "no-store",
  });
}
