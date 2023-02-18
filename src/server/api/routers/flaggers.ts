import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const FlaggersRouter = createTRPCRouter({
  register: publicProcedure
    .input(
      z.object({
        code: z.number(),
        password: z.string(),
        county: z.string(),
        constituency: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const createdFlagger = await ctx.prisma.flaggers.create({
        data: {
          code: input.code,
          password: input.password,
          county: input.county,
          constituency: input.constituency,
        },
      });
      return createdFlagger;
    }),
  login: publicProcedure
    .input(
      z.object({
        code: z.number(),
        password: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const retrievedUser = await ctx.prisma.flaggers.findFirst({
        where: {
          code: input.code,
          password: input.password,
        },
      });
      return retrievedUser;
    }),

  deleteAccount: publicProcedure
    .input(
      z.object({
        code: z.number(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const accountToDelete = await ctx.prisma.flaggers.delete({
        where: {
          code: input.code,
        },
      });
      return accountToDelete;
    }),
});
