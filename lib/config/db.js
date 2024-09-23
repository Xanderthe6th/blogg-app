import mongoose from "mongoose";

export const ConnectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://nnamogbe10:Gabito10@cluster0.3kfx7.mongodb.net/blogg-app"
  );
  console.log("DB Connected");
};
