import React from 'react'
import { auth, signIn } from '@/auth';
import ManageSubscription from './ManageSubscription';
import { db } from '@/db';
import { users } from '@/db/schema';
import { eq } from 'drizzle-orm';

const page = async () => {
  const session = await auth();

  if (!session || !session.user || !session.user.id) {
    signIn();
    return null;
  }

  const user = await db.query.users.findFirst({
    where: eq(users.id, session.user.id)
  })

  const plan = user?.subscribed ? 'premium' : 'free';

  return (
    <div className="p-4 border rounded-md">
      <h1 className="text-4xl mb-3">Subscription Details</h1>
      <p className="mb-2">You are currently on a {plan} plan</p>
      <ManageSubscription />
    </div>
  )
}

export default page;