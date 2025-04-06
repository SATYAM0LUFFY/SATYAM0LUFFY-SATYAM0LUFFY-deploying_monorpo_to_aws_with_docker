import {prismaClient} from "db/client"
export default async function Home() {
  const users  = await prismaClient.users.findMany() ; 
  return (
    <div>
      {JSON.stringify(users)}
    </div>
  );
}
