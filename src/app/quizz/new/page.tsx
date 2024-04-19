import UploadDoc from "../UploadDoc";
import { auth, signIn } from "@/auth";
import { getUserSubscription } from "@/actions/userSubscriptions";
import { Lock, Flame } from "lucide-react";
import { getStripe } from "@/lib/stripe-client";
import { useRouter } from "next/navigation";
import { PRICE_ID } from "@/lib/utils";
import UpgradePlan from "../UpgradePlan";
import { redirect } from 'next/navigation'

const page = async () => {
  const session = await auth();
  // const router = useRouter();
  const userId = session?.user?.id;
  if (!userId) {
    // signIn();
    redirect('/api/auth/signin');
    return;
  }
  const subscribed: boolean | null | undefined = await getUserSubscription({ userId })

  return (
    <div className="flex flex-col flex-1">
      <main className="py-11 flex flex-col text-center gap-4 items-center flex-1 mt-24">
        {!subscribed ?
          <>
            <h2 className="text-3xl font-bold mb-4">What do you want to be quizzed about today?</h2>
            <UploadDoc />
          </> :
          <UpgradePlan />
        }
      </main>
    </div>
  )
}

export default page;