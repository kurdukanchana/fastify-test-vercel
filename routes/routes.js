import getSchema from "../schemas/getSchema.js";
import postSchema from "../schemas/postSchema.js";
import putSchema from "../schemas/putSchema.js";
import { handleGetRequset } from "../services/getService.js";
import { handlePostRequest } from "../services/postService.js";
import handlePutRequest from "../services/putService.js";

const routes = (fastify, options, done) => {
  fastify.get("/", {
    schema: getSchema,
    handler: handleGetRequset,
  });

  fastify.post("/", {
    schema: postSchema,
    handler: handlePostRequest,
  });

  fastify.put("/", {
    schema: putSchema,
    handler: handlePutRequest,
  });

  done();
};

export default routes;
