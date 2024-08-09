export const handlePostRequest = (req, res) => {
  if (req.headers.authorization !== "1234-1234-X") {
    res.status(401).send({ error: "Unauthorized" });
    return;
  }

  if (req.body?.name === "vijesh") {
    res.status(418).send({
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
  } else {
    res.status(202);
    res.send({
      status: 202,
      message: "General response for non-Vijesh users",
      data: {
        info: "The user profile is not available for this name.",
        suggestions: [
          "Please check the name and try again.",
          "If you need assistance, contact support.",
        ],
        helpLinks: [
          {
            title: "User Support",
            url: "https://support.example.com",
          },
          {
            title: "FAQ",
            url: "https://example.com/faq",
          },
        ],
      },
    });
  }
};
