import app from "./src/app";
import { PORT } from "./src/config/env";

app.listen(PORT, () => {
  console.log(`server running on port: ${PORT}`);
});
