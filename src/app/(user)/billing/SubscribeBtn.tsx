"use client";
import { useState } from "react";
import { getStripe } from "@/lib/stripe-client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react"

type Props = {
  userId?: string,
  price: string
}

const SubscribeBtn = ({ userId, price }: Props) => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);

  const handleCheckout = async (price: string) => {
    if (!userId) {
      router.push('/login')
    }

    setLoading(true);

    try {
      const { sessionId } = await fetch('/api/stripe/checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ price })
      }).then((res) => res.json());

      const stripe = await getStripe();
      stripe?.redirectToCheckout({ sessionId });
    } catch (error) {
      setLoading(false);
      console.log('Subscribe Button Error', error)
    }
  }
  return (
    <Button disabled={loading} onClick={() => handleCheckout(price)}>{
      loading ? <>
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        Please Wait
      </> :
        "Upgrade Your Plan"}</Button>
  )
}

export default SubscribeBtn;