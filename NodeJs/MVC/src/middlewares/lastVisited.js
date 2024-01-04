export const lastVisited = (req, res, next) => {
  // 1. if cookie is present, then update with last visited in the res.locals
  if (req.cookies.lastVisited) {
    // console.log("setting up res.locals");
    res.locals.lastVisited = new Date(req.cookies.lastVisited).toLocaleString();
  }

  // 2. Set a new cookie with the current timestamp
  res.cookie("lastVisited", new Date().toISOString(), {
    maxAge: 2 * 24 * 60 * 60 * 1000,
  });

  // 3. Call the next middleware in the chain
  next();
};
