import routes from "./routes";

export const localsMiddlewre = (req, res, next) => {
  res.locals.siteName = "WeTube";
  res.locals.routes = routes;
  next();
};