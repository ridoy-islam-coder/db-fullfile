import mongoose from "mongoose";
import app from "./app";

import { config } from "./app/config";

 async function main() {
  await mongoose.connect(config.db_uri as string);
   
   app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`); });


}

main().then(() => console.log("Mongobd connected successfull !")).catch((error) => {

  console.error("Error connecting to the database:", error);

});