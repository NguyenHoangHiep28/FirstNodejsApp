const express = require("express")
const dotenv = require("dotenv").config();
const errorHandler = require("./middleware/errorHandler")
const connectDB = require("./config/dbConnection")
const app = express()

connectDB()
const port = process.env.PORT || 5000;
app.use(express.json());
app.use("/api/contacts", require("./routes/contractRoutes"))
app.use(errorHandler);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})