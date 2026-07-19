import type { Core } from "@strapi/strapi";

export default ({ strapi }: { strapi: Core.Strapi }) => ({
  async trigger(ctx: any) {
    strapi.log.info("=== Deploy route hit ===");
    const hookUrl = process.env.CLOUDFLARE_DEPLOY_HOOK_URL;

    if (!hookUrl) {
      strapi.log.warn("Deploy hook URL not configured — set CLOUDFLARE_DEPLOY_HOOK_URL in .env");
      ctx.throw(500, "Deploy hook URL not configured");
      return;
    }

    try {
      const res = await fetch(hookUrl, { method: "POST" });

      if (!res.ok) {
        strapi.log.error(`Deploy hook failed: ${res.status}`);
        ctx.throw(502, "Failed to trigger deploy");
        return;
      }

      ctx.body = { message: "Deploy triggered" };
    } catch (error) {
      strapi.log.error("Deploy hook error:", error);
      ctx.throw(502, "Failed to trigger deploy");
    }
  },
});
