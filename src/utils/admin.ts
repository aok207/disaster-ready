"server only";

import { auth } from "@/auth";
import { db } from "@/db";
import { users } from "@/db/schema/users";
import { eq } from "drizzle-orm";

export async function checkIfUserIsAdmin(): Promise<boolean> {
  const session = await auth();

  if (!session || !session.user) {
    return false;
  }

  const user = await db
    .select({ id: users.id, role: users.role })
    .from(users)
    .where(eq(users.id, session.user.id as string));

  if (user[0].role === "admin") {
    return true;
  }

  return false;
}
