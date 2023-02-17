import { CasesRouter } from "./routers/cases";
import { FlaggersRouter } from "./routers/flaggers";
import { createTRPCRouter } from "./trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  FLAGGERS_ENDPOINT: FlaggersRouter,
  CASES_ENDPOINT: CasesRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
