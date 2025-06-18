"use server"

import { z } from "zod";
import { companySchema } from "./utils/zodSchemas";
import { requireUser } from "./utils/hooks";
import { prisma } from "@/lib/db";
import { redirect } from "next/navigation";

export async function createCompany(data: z.infer<typeof companySchema>) {
    const user = await requireUser();

    const validatedData = companySchema.parse(data);

    await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      onboardingCompleted: true,
      userType: "COMPANY",
      Company: {
        create: {
          ...validatedData,
        },
      },
    },
  });

  redirect("/");
}