import { createRouteHandler } from "uploadthing/next";
 
import { ourFileRouter } from "./core";
 // cite from https://docs.uploadthing.com/getting-started/appdir
// Export routes for Next App Router
export const { GET, POST } = createRouteHandler({
  router: ourFileRouter,
 
  // Apply an (optional) custom config:
  // config: { ... },
});