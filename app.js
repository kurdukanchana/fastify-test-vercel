import Fastify from "fastify";
import routes from "./routes/routes.js";
import firstPlugin from "./plugins/firstPlugin.js";
import { swaggerOptions, swaggerUiOptions } from "./swaggerOptions.js";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";
import dotenv from "dotenv";
import pgPlugin from "./plugins/pgPlugin.js";

dotenv.config();

const fastify = Fastify({
  logger: true,
});

fastify.register(fastifySwagger, swaggerOptions);
fastify.register(fastifySwaggerUi, swaggerUiOptions);

fastify.register(routes);
fastify.register(firstPlugin);
fastify.register(pgPlugin);

fastify.ready((err) => {
  if (err) throw err;
  fastify.swagger();
});

fastify.listen({ port: 3000 }, (err) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
