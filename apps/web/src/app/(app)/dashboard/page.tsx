import Navbar from "@/components/Navbar";
import Client from "./client";
import { db, schema } from "@helplink/db"; 

type Post = {
  id: number;
  name: string; 
  createdAt: Date;
  updatedAt: Date;
};

const posts = schema.posts;

async function getData(): Promise<Post[]> {
  // Fetch the data from the database and assert the type
  const allPosts = await db.select().from(posts) as Post[]; // Assert type here
  return allPosts;
}

export default async function Applications() {
  const postData = await getData();
  console.log(postData);

  return (
    <div>
      <Navbar>
      <Client />
      </Navbar>
    </div>
  );
}
