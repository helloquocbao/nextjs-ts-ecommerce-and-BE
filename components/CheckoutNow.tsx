"use client";
import { Button } from "@/components/ui/button";
import { urlFor } from "@/app/lib/sanity";
import { ProductCart } from "./AddToBag";

export default function CheckoutNow({
  currency,
  description,
  image,
  name,
  price,
  price_id,
}: ProductCart) {
  function buyNow(product: any) {
    console.log(product);
  }

  const product = {
    name: name,
    description: description,
    price: price,
    currency: currency,
    image: urlFor(image).url(),
    price_id: price_id,
  };
  return (
    <Button
      variant="outline"
      onClick={() => {
        buyNow(product);
      }}
    >
      Checkout Now
    </Button>
  );
}
