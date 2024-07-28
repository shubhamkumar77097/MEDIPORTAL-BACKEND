import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect("mongodb+srv://shubhamkumar77097:CxA6NsfS1mkrGMab@cluster0.w25lgx8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
      dbName: "MERN_STACK_HOSPITAL_MANAGEMENT_SYSTEM",
    })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log("Some error occured while connecting to database:", err);
    });
};
