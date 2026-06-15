import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "@/lib/db";
import { smtpTransport } from "@/lib/mail";
import { admin, captcha, username } from "better-auth/plugins";
import createAccountTmpl from "./create_account.html";
import forgotPasswordTmpl from "./forgot_password.html";

export const auth = betterAuth({
  baseURL: process.env.APP_BASE_URL,
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  // we do ! on the smtptransport because if the SMTP_HOST is not set
  // the email features will be disabled and the sendMail function will never be called
  emailAndPassword: {
    enabled: !!process.env.SMTP_HOST,
    requireEmailVerification: !!process.env.SMTP_HOST,
    sendResetPassword: async ({ user, url }) => {
      await smtpTransport!.sendMail({
        to: user.email,
        html: forgotPasswordTmpl.replace("{{link}}", url),
      });
    },
  },
  emailVerification: {
    sendVerificationEmail: async ({ user, url }) => {
      await smtpTransport!.sendMail({
        to: user.email,
        html: createAccountTmpl.replace("{{link}}", url),
      });
    },
  },
  user: {
    additionalFields: {
      theme: {
        type: "string",
        default: "dark",
      },
    }
  },
  plugins: [
    username(),
    admin(),
    captcha({
      provider: "cloudflare-turnstile",
      secretKey: process.env.CLOUDFLARE_TURNSTILE_SECRET_KEY as string,
    }),
  ],
});
