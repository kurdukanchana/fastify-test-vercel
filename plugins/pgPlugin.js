import fp from "fastify-plugin";
import pg from "pg";

async function pgPlugin(fastify, options) {
  const { Pool } = pg;
  const pool = new Pool({
    connectionString: process.env.POSTGRES_URL,
  });

  try {
    await pool.connect();
    fastify.log.info("Connected to PostgreSQL");

    fastify.decorate("pg", pool);

    fastify.addHook("onClose", async (fastifyInstance, done) => {
      await pool.end();
      fastify.log.info("Disconnected from PostgreSQL");
      done();
    });
  } catch (err) {
    fastify.log.error("Failed to connect to PostgreSQL:", err);
    throw err;
  }
}

export default fp(pgPlugin);
