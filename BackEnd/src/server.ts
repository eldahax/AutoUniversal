import dotenv from "dotenv";
dotenv.config();

import app from "./app";
import sequelize from "./config/database"

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connected successfully");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Database connection failed:", error);
   
  }
};

startServer();