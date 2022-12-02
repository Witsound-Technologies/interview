import { Client } from "https://deno.land/x/mysql@v2.11.0/mod.ts";
import { query, table } from "https://deno.land/x/sql@1.0/mod.ts";
import { User } from "./User.ts";

export async function CreateUser(name: string, lastname: string, age: number) {
  const user = new User();
  user.id = 1;
  user.name = name;
  user.lastname = lastname;
  if (user.name != "") {
    if (user.lastname != "") {
      if (user.age != undefined) {
        const insert = table("user").insert(user).build();
        const client = await new Client().connect({
          hostname: "localhost",
        });
        await query(client, insert);
      }
    }
  }
}
