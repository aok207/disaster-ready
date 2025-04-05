import { drizzle } from "drizzle-orm/neon-http";

export const db = drizzle(process.env.AUTH_DRIZZLE_URL!);
