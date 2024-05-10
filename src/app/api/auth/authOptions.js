import clientPromise from "@/libs/mongoConnect";
import { UserInfo } from "@/models/UserInfo";
import bcrypt from "bcrypt";
import * as mongoose from "mongoose";
import { User } from "@/models/User";
import { MongoDBAdapter } from "@auth/mongodb-adapter";

export const authOptions = {
  secret: process.env.SECRET,
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    // Define your authentication providers here
  ],
};

export async function authorize(credentials, req) {
  const email = credentials?.email;
  const password = credentials?.password;

  mongoose.connect(process.env.MONGO_URL);
  const user = await User.findOne({ email });
  const passwordOk = user && bcrypt.compareSync(password, user.password);

  if (passwordOk) {
    return user;
  }

  return null;
}
