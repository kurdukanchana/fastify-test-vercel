const Fastify = require("fastify");
const routes = require("../routes/routes"); // Adjust the path as necessary

describe("Fastify Routes", () => {
  let fastify;

  beforeAll(async () => {
    fastify = Fastify({
      logger: false,
    });

    fastify.register(routes);

    await fastify.listen({ port: 8 }); // Use a random port
  });

  afterAll(async () => {
    await fastify.close();
  });

  test("GET / should return hello world with header", async () => {
    const response = await fastify.inject({
      method: "GET",
      url: "/",
      headers: {
        test: "true",
      },
    });

    expect(response.statusCode).toBe(200);
    expect(response.json()).toEqual({ hello: "world" });
  });

  test("GET / should return hello without header", async () => {
    const response = await fastify.inject({
      method: "GET",
      url: "/",
    });

    expect(response.statusCode).toBe(200);
    expect(response.payload).toBe("hello");
  });

  test("POST / with valid data should return 418 for Vijesh", async () => {
    const response = await fastify.inject({
      method: "POST",
      url: "/",
      headers: {
        authorization: "1234-1234-X",
      },
      payload: {
        name: "vijesh",
        age: 27,
        dateOfBirth: "1996-09-04",
        skill: "all",
      },
    });

    expect(response.statusCode).toBe(418);
    expect(response.json()).toEqual({
      personalDetails: {
        name: "Vijesh",
        age: 27,
        dateOfBirth: "04/09/1996",
        gender: "Male",
        nationality: "Indian",
      },
      contactInformation: {
        email: "vijesh@example.com",
        phone: "+1234567890",
        address: {
          street: "123 Main St",
          city: "Sample City",
          state: "CA",
          postalCode: "12345",
          country: "USA",
        },
      },
      professionalDetails: {
        currentJob: {
          title: "Software Engineer",
          company: "Tech Solutions",
          yearsExperience: 5,
          skills: ["JavaScript", "Node.js", "React", "SQL"],
        },
        previousJobs: [
          {
            title: "Web Developer",
            company: "Web Innovators",
            yearsExperience: 2,
          },
          {
            title: "Intern",
            company: "StartUp Inc.",
            yearsExperience: 1,
          },
        ],
      },
      personalInterests: {
        hobbies: ["Photography", "Traveling", "Cooking"],
        languagesSpoken: ["English", "Hindi"],
        favoriteBooks: [
          {
            title: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
          },
          {
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
          },
        ],
      },
      metadata: {
        createdAt: "2024-01-01T12:00:00Z",
        updatedAt: "2024-08-01T12:00:00Z",
        lastLogin: "2024-07-25T08:30:00Z",
      },
    });
  });

  test("POST / with invalid authorization should return 401", async () => {
    const response = await fastify.inject({
      method: "POST",
      url: "/",
      headers: {
        authorization: "invalid-auth",
      },
      payload: {
        name: "vijesh",
        age: 27,
        dateOfBirth: "1996-09-04",
        skill: "all",
      },
    });

    expect(response.statusCode).toBe(401);
    expect(response.json()).toEqual({ error: "Unauthorized" });
  });

  test("POST / with missing required fields should return 400", async () => {
    const response = await fastify.inject({
      method: "POST",
      url: "/",
      headers: {
        authorization: "1234-1234-X",
      },
      payload: {
        name: "vijesh",
        age: 27,
        skill: "all",
      },
    });

    expect(response.statusCode).toBe(400);
    expect(response.json().message).toMatch(
      "body must have required property 'dateOfBirth'"
    );
  });
});
