import type { Core } from "@strapi/strapi";

export default ({ strapi }: { strapi: Core.Strapi }) => ({
  async create(ctx: any) {
    const { firstName, lastName, email, phone, location, dogDetails, goals, serviceInterest, referralSource } =
      ctx.request.body;

    if (!firstName || !lastName || !email) {
      ctx.throw(400, "firstName, lastName, and email are required");
      return;
    }

    const entry = await strapi.documents("api::contact-submission.contact-submission").create({
      data: { firstName, lastName, email, phone, location, dogDetails, goals, serviceInterest, referralSource },
    });

    try {
      await strapi.plugins["email"].services.email.send({
        to: process.env.CONTACT_EMAIL_TO,
        subject: `New Contact Form Submission from ${firstName} ${lastName}`,
        text: [
          `Name: ${firstName} ${lastName}`,
          `Email: ${email}`,
          phone ? `Phone: ${phone}` : null,
          location ? `Location: ${location}` : null,
          serviceInterest ? `Service Interest: ${serviceInterest}` : null,
          dogDetails ? `\nDog Details:\n${dogDetails}` : null,
          goals ? `\nGoals:\n${goals}` : null,
          referralSource ? `Referral Source: ${referralSource}` : null,
        ]
          .filter(Boolean)
          .join("\n"),
      });
    } catch (error) {
      strapi.log.error("Failed to send contact email:", error);
    }

    ctx.status = 201;
    ctx.body = { data: entry };
  },
});
