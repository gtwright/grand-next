export const resolvers = {
  Query: {
    viewer(_parent, _args, _context, _info) {
      return { id: 1, name: "John Smith", status: "cached" };
    },
    async hello(_parent, _args, _context) {
      return `Hello. The current timestamp is ${Date.now()}`;
    },
  },
};
