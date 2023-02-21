import { z } from "zod";
import { supabase } from "../../../supabase";
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
    .mutation(async ({ input }) => {
      const { data } = await supabase
        .from("Flaggers")
        .insert({
          code: input.code,
          password: input.password,
          county: input.county,
          constituency: input.constituency,
        })
        .select("*");
      return data;
    }),
  login: publicProcedure
    .input(
      z.object({
        code: z.number(),
        password: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      const { data: user } = await supabase
        .from("Flaggers")
        .select("*")
        .eq("code", input.code)
        .eq("password", input.password)
        .single();
      return user;
    }),

  deleteAccount: publicProcedure
    .input(
      z.object({
        code: z.number(),
      })
    )
    .mutation(async ({ input }) => {
      const { data: accountToDelete } = await supabase
        .from("Flaggers")
        .delete()
        .eq("code", input.code);

      return accountToDelete;
    }),
});
