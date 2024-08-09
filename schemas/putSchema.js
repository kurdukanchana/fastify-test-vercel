const putSchema = {
  body: {
    type: "object",
    properties: {
      name: { type: "string" },
      age: { type: "integer" },
      dob: { type: "string", format: "date" },
    },

    required: ["name", "dob"],
  },
};

export default putSchema;
