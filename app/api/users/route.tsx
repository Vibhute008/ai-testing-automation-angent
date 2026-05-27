import { db, users } from "@/db";
import { currentUser } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function POST() {
  const user = await currentUser();

  try {
    const userResult = await db
      .select()
      .from(users)
      .where(eq(users.email, user?.primaryEmailAddress?.emailAddress ?? ""));
    if (userResult.length === 0) {
      const newUser = await db
        .insert(users)
        .values({
          email: user?.primaryEmailAddress?.emailAddress ?? "",
          name: user?.firstName ?? "New User",
        })
        .returning();
      return NextResponse.json({ user: newUser[0] });
    } else {
      return NextResponse.json({ user: userResult[0] });
    }
  } catch (error) {
    console.log("Error fetching or creating user:", error);
    return NextResponse.json(
      { error: "Failed to fetch or create user" },
      { status: 500 },
    );
  }
}
