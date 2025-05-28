"use client";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SheetTrigger } from "@/components/ui/sheet";

export default function CartButton() {
  return (
   <SheetTrigger asChild>
     <Button
       aria-label="Checkout"
       size="icon"
       className="
         fixed top-6 left-6
         sm:bottom-8 sm:right-8
         rounded-full shadow-lg
         bg-primary text-primary-foreground
         hover:bg-primary/90
         z-50
       "
     >
       <ShoppingCart className="h-5 w-5" />
     </Button>
   </SheetTrigger>
 );
}
