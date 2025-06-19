"use server";

import { z } from "zod";
import { companySchema, jobSeekerSchema } from "./utils/zodSchemas";
import { requireUser } from "./utils/hooks";
import { prisma } from "@/lib/db";
import { redirect } from "next/navigation";
import arcjet, { detectBot, shield } from "@arcjet/next";

const aj = arcjet({
  key: process.env.ARCJET_KEY!,
  rules: [
    shield({
      mode: "LIVE",
    }),
    detectBot({
      mode: "LIVE",
      allow: [],
    }),
  ],
});

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

export async function createJobSeeker(data: z.infer<typeof companySchema>) {
  const user = await requireUser();

  const validatedData = jobSeekerSchema.parse(data);

   await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      onboardingCompleted: true,
      userType: "JOB_SEEKER",
      JobSeeker: {
        create: {
          ...validatedData,
        },
      },
    },
  });

  return redirect("/");
}