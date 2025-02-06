import app from "./src/app";
import { PORT } from "./src/config/env";
import sequelize from "./src/config/db";

sequelize
  .authenticate()
  .then(() => console.log("Connected to Supabase Postgres via Sequelize"))
  .catch((err) => console.error("Sequelize connection error:", err));

sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("Database synced successfully!");
  })
  .catch((err) => console.error("Database sync error:", err));

app.listen(PORT, () => {
  console.log(`server running on port: ${PORT}`);
});
