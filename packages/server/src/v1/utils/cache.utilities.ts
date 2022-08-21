import getExpeditiousCache from "express-expeditious";

export const cache = getExpeditiousCache({
  namespace: "expresscache",
  defaultTtl: "5 minutes",
});
