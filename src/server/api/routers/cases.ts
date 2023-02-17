import { string, z } from "zod";
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
      const newCase = await ctx.prisma.cases.create({
        data: {
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
        },
      });
      return newCase;
    }),

  getAllCases: publicProcedure.query(async ({ ctx }) => {
    const cases = await ctx.prisma.cases.findMany();
    return cases;
  }),
  dropCase: publicProcedure
    .input(
      z.object({
        case_id: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const caseToDrop = await ctx.prisma.cases.delete({
        where: {
          id: input.case_id,
        },
      });
      return caseToDrop;
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
      const updatedCase = await ctx.prisma.cases.update({
        where: {
          id: input.case_id,
        },
        data: {
          status: input.newStatus,
        },
      });
      return updatedCase;
    }),
  getCaseById: publicProcedure
    .input(z.object({ case_id: z.string() }))
    .query(async ({ input, ctx }) => {
      const foundCase = await ctx.prisma.cases.findFirst({
        where: {
          id: input.case_id,
        },
      });
      return foundCase;
    }),
  getCaseByFilter: publicProcedure
    .input(
      z.object({
        filter_by: z.enum(["COUNTY", "CONSTITUENCY", "TYPE", "STATUS"]),
        filter_value: z.string(),
      })
    )
    .query(async ({ ctx, input }) => {
      if (input.filter_by === "COUNTY") {
        const cases = await ctx.prisma.cases.findMany({
          where: {
            county: input.filter_value,
          },
        });
        return cases;
      }
      if (input.filter_by === "CONSTITUENCY") {
        const cases = await ctx.prisma.cases.findMany({
          where: {
            constituency: input.filter_value,
          },
        });
        return cases;
      }
      if (input.filter_by === "TYPE") {
        const cases = await ctx.prisma.cases.findMany({
          where: {
            case_type: input.filter_value,
          },
        });
        return cases;
      }
    }),
});
