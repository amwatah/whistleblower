import { string, z } from "zod";
import { supabase } from "../../../supabase";
import { createTRPCRouter, publicProcedure } from "../trpc";
// id           String   @id @unique @default(uuid())
// created      DateTime @default(now())
// updated      DateTime @updatedAt
// title        String
// county       String
// constituency String
// case_type    String
// describtion  String
// image        String
// seconders    String[]
// status       Status
// alleged      String
// alleged_Role String
// created_by   Flaggers @relation(fields: [flaggerId], references: [id])
// flaggerId    String

export const CasesRouter = createTRPCRouter({
  createCase: publicProcedure
    .input(
      z.object({
        title: z.string(),
        describtion: z.string(),
        county: z.string(),
        constituency: z.string(),
        case_type: z.string(),
        alleged: z.string(),
        alleged_role: z.string(),
        flagged_by: z.string(),
        image_url: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const { data: createdCase } = await supabase.from("Cases").insert({
        title: input.title,
        describtion: input.describtion,
        county: input.county,
        constituency: input.constituency,
        case_type: input.case_type,
        alleged: input.alleged,
        alleged_Role: input.alleged_role,
        flaggerId: input.flagged_by,
        image: input.image_url,
        status: "ALLEGATION",
      });
      return createdCase;
    }),

  getAllCases: publicProcedure.query(async ({ ctx }) => {
    const { data: AllCases } = await supabase.from("Cases").select("*");
    return AllCases;
  }),
  dropCase: publicProcedure
    .input(
      z.object({
        case_id: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const { data: deletedCase } = await supabase
        .from("Cases")
        .delete()
        .eq("id", input.case_id)
        .select("*");

      return deletedCase;
    }),
  changeCaseStatus: publicProcedure
    .input(
      z.object({
        case_id: string(),
        newStatus: z.enum([
          "ALLEGATION",
          "INVESTIGATION",
          "TRIAL",
          "CONVICTED",
          "CLOSED",
        ]),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const { data: updatedCase } = await supabase
        .from("Cases")
        .update({
          status: input.newStatus,
        })
        .eq("id", input.case_id)
        .select("*");
      return updatedCase;
    }),
  getCaseById: publicProcedure
    .input(z.object({ case_id: z.string() }))
    .query(async ({ input }) => {
      const { data: foundCase } = await supabase
        .from("Cases")
        .select("*")
        .eq("id", input.case_id)
        .single();

      return foundCase;
    }),
  getCaseByFilter: publicProcedure
    .input(
      z.object({
        filter_by: z.enum(["COUNTY", "CONSTITUENCY", "TYPE", "STATUS"]),
        filter_value: z.string(),
      })
    )
    .query(async ({ input }) => {
      if (input.filter_by === "COUNTY") {
        const { data: cases } = await supabase
          .from("Cases")
          .select("*")
          .eq("county", input.filter_value);
        return cases;
      }
      if (input.filter_by === "CONSTITUENCY") {
        const { data: cases } = await supabase
          .from("Cases")
          .select("*")
          .eq("constituency", input.filter_value);
        return cases;
      }
      if (input.filter_by === "TYPE") {
        const { data: cases } = await supabase
          .from("Cases")
          .select("*")
          .eq("case_type", input.filter_value);
        return cases;
      }
    }),
});
