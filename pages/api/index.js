export const handler = async (req, res) => {
  res
    .status(200)
    .json({ message: `API is online at ${new Date().toISOString()}` });
};

export default handler;
