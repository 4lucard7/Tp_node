const express = require('express')
const connectDB = require("./config/db");


const app = express()
const port = 3000

connectDB();

app.use(express.json());

app.use("/api", require("./routes/UserRoute"));
app.use("/api", require("./routes/EntrepriseRoute"));
app.use("/api", require("./routes/StagiaireRoute"));


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
