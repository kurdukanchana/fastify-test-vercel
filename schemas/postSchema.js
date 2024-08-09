const postSchema = {
  body: {
    type: "object",
    properties: {
      name: { type: "string" },
      age: { type: "integer" },
      dateOfBirth: { type: "string", format: "date" },
      skill: { type: "string" },
    },
    required: ["name", "dateOfBirth"],
  },
  headers: {
    type: "object",
    properties: {
      Authorization: { type: "string" },
    },
  },

  response: {
    200: {
      type: "object",
      properties: {
        message: { type: "string" },
      },
    },
    401: {
      type: "object",
      properties: {
        error: { type: "string" },
      },
    },
    418: {
      type: "object",
      properties: {
        personalDetails: {
          type: "object",
          properties: {
            name: { type: "string" },
            age: { type: "integer" },
            dateOfBirth: { type: "string" },
            gender: { type: "string" },
            nationality: { type: "string" },
          },
        },
        contactInformation: {
          type: "object",
          properties: {
            email: { type: "string" },
            phone: { type: "string" },
            address: {
              type: "object",
              properties: {
                street: { type: "string" },
                city: { type: "string" },
                state: { type: "string" },
                postalCode: { type: "string" },
                country: { type: "string" },
              },
            },
          },
        },
        professionalDetails: {
          type: "object",
          properties: {
            currentJob: {
              type: "object",
              properties: {
                title: { type: "string" },
                company: { type: "string" },
                yearsExperience: { type: "integer" },
                skills: { type: "array", items: { type: "string" } },
              },
            },
            previousJobs: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  title: { type: "string" },
                  company: { type: "string" },
                  yearsExperience: { type: "integer" },
                },
              },
            },
          },
        },
        personalInterests: {
          type: "object",
          properties: {
            hobbies: { type: "array", items: { type: "string" } },
            languagesSpoken: { type: "array", items: { type: "string" } },
            favoriteBooks: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  title: { type: "string" },
                  author: { type: "string" },
                },
              },
            },
          },
        },
        metadata: {
          type: "object",
          properties: {
            createdAt: { type: "string" },
            updatedAt: { type: "string" },
            lastLogin: { type: "string" },
          },
        },
      },
    },
  },
};

export default postSchema;
