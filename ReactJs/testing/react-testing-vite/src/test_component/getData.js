const data = {
  id: 1,
  name: "David",
};

export const getUser = () => {
  return Promise.resolve(data);
};
