interface User {
  username: string;
  name: string;
  projects: string[];
  coolness?: number;
  favoriteFood: string;
}

async function loadUser(username: string): Promise<User | undefined> {
  const users: User[] = [
    {
      username: "antho",
      name: "Bob",
      projects: ["vitest", "vite"],
      favoriteFood: "sushi",
    },
    {
      username: "matt",
      name: "Zary",
      projects: ["react", "solidity"],
      favoriteFood: "pizza",
    },
  ];

  return users.find((user) => user.username === username);
}

export async function loadUserData(username: string) {
  const user = await loadUser(username);
  if (!user) throw new Error("no user found");
  user.coolness = username === "antho" ? 100 : -1;
  return user;
}
