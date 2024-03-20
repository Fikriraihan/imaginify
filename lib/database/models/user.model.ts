import { Schema, model, models } from "mongoose";

export interface IUser {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  photo: string;
  clerkId: string;
  planId: string;
  creditBalance: number;
}

const userSchema = new Schema({
  clerkId: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  photo: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  planId: {
    type: String,
    required: true,
  },
  creditBalance: {
    type: Number,
    required: true,
  },
});

const User = models?.User || model("User", userSchema);

export default User;
