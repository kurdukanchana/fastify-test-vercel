const handlePutRequest = async (req, res) => {
  const { name, age, dob } = req.body;

  const pool = await req.server.pg.connect();
  try {
    const result = await pool.query(
      "INSERT INTO test (name, age, dob) VALUES ($1, $2, $3) RETURNING *",
      [name, age, dob]
    );
    res.status(200).send({
      message: "Data successfully inserted",
      data: result.rows[0],
    });
  } catch (error) {
    res.status(500).send({
      error: "Internal Server Error",
      message: "An error occurred while inserting data into the database.",
    });
  } finally {
    pool.release();
  }
};

export default handlePutRequest;
