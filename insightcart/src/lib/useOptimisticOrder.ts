import { useOptimistic } from "react";

type Order = { email: string; cart: { sku: string; qty: number }[] };

export function useOptimisticOrder() {
  const [optimistic, addOptimistic] = useOptimistic<Order[], Order>([], (state, o) => [
    ...state,
    o,
  ]);
  return { optimistic, addOptimistic };
}
