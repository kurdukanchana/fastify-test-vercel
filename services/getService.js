import pg from "pg";

export const handleGetRequset = async (req, res) => {
  if (req.headers.test) {
    const { Pool } = pg;

    const pool = new Pool({
      connectionString: process.env.POSTGRES_URL,
    });

    try {
      const client = await pool.connect();
      const result = await client.query("SELECT * FROM test");
      client.release();

      res.send({
        hello: "world",
        rows: result.rows,
      });
    } catch (err) {
      console.error(err);
      res.status(500).send("Error fetching data");
    } finally {
      if (pool) {
        pool.end();
      }
    }
  } else {
    res.send("hello");
  }
};
