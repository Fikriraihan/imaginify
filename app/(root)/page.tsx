import { createUser, createUser2 } from "@/lib/actions/user.actions";
import User from "@/lib/database/models/user.model";
import { connectToDatabase } from "@/lib/database/mongoose";
import { UserButton } from "@clerk/nextjs";
import { unstable_noStore } from "next/cache";
import React from "react";

const getData = async () => {
  unstable_noStore();
  try {
    await connectToDatabase();
    const data = await User.find();
    return data;
  } catch (error) {
    return error;
  }
};

const Home = async () => {
  const data: any = await getData();

  return (
    <div>
      <h1>{data.map((val: any) => val.firstName)}</h1>
      <form action={createUser2}>
        <div>
          <h1>ClerkId</h1>
          <input className="border" name="clerkId" type="text" />
        </div>
        <div>
          <h1>Email</h1>
          <input className="border" name="email" type="text" />
        </div>
        <div>
          <h1>Username</h1>
          <input className="border" name="username" type="text" />
        </div>
        <div>
          <h1>First Name</h1>
          <input className="border" name="firstName" type="text" />
        </div>
        <div>
          <h1>Last Name</h1>
          <input className="border" name="lastName" type="text" />
        </div>
        <div>
          <h1>Photo</h1>
          <input className="border" name="photo" type="text" />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default Home;
