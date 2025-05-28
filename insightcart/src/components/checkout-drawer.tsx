"use client";

import { useTransition } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { placeOrder } from "@/app/actions/placeOrder";
import CartButton from "./cart-button";
import { useOptimisticOrder } from "@/lib/useOptimisticOrder";

export default function CheckoutDrawer() {
  const [pending, start] = useTransition();
  const { optimistic, addOptimistic } = useOptimisticOrder();

  async function submit(formData: FormData) {
    const order = {
      email: formData.get("email") as string,
      cart: [{ sku: "demo-sku-1", qty: 1 }],
    };

    // 1. Add optimistically
    addOptimistic(order);

    // 2. Fire-and-forget server action
    start(() => placeOrder(order));
  }

  return (
    <Sheet>
      <CartButton />
      <SheetContent side="right" className="w-96 sm:w-[28rem]">
        <SheetHeader className="mb-6 text-lg">
          {/* screen-reader title, invisible to sighted users */}
          <VisuallyHidden asChild>
            <SheetTitle>Checkout</SheetTitle>
          </VisuallyHidden>
        </SheetHeader>

        <form action={submit} className="space-y-4">
          <Input
            name="email"
            type="email"
            placeholder="you@example.com"
            required
          />

          <Button type="submit" className="w-full" disabled={pending}>
            {pending ? "Placing Order…" : "Place Order"}
          </Button>
        </form>

        {/* demo optimistic list */}
        {optimistic.length > 0 && (
          <div className="mt-8 rounded-xl bg-green-50 p-4 text-sm">
            <p className="font-medium">Orders in flight:</p>
            <ul className="list-disc pl-5">
              {optimistic.map((o, i) => (
                <li key={i}>{o.email}</li>
              ))}
            </ul>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
