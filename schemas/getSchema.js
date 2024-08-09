const getSchema = {
  description: "Root endpoint",
  tags: ["root"],
  summary: "Root summary",
  headers: {
    type: "object",
    properties: {
      test: { type: "string" },
    },
  },
};

export default getSchema;
