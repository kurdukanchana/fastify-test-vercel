import fp from "fastify-plugin";

const firstPlugin = async (fastify, opts) => {
  fastify.decorate("testFunction", (s) => s.toUpperCase());

  fastify.get("/:text", (req, res) => {
    const text = req.params.text;
    // const { text } = req.params;
    const result = fastify.testFunction(text);
    res.send({ result });
  });
};

export default fp(firstPlugin);
