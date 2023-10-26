import { describe, test, expect, vi } from "vitest";
import { loadUserData } from "./load_user";
vi.mock("./load-user-data", () => {
  return {
    loadUserData() {
      return {
        coolness: -1,
        favoriteFood: "fish",
        name: "Zod",
        projects: ["vue", "angular"],
        username: "testuser",
      };
    },
  };
});
describe("loadUserDetails", () => {
  //test v1
  //   test("load user data as expected", async () => {
  //     const user = await loadUserData("antho");

  //     expect(user).toEqual({
  //       coolness: 100,
  //       name: "Bob",
  //       projects: ["vitest", "vite"],
  //       username: "antho",
  //     });
  //   });

  //testV2
  //   test("load user data as expected", async () => {
  //     const user = await loadUserData("antho");
  //     expect(user).toMatchSnapshot();
  //   });
  //testV3
  test("load user data as expected", async () => {
    const user = await loadUserData("antho");
    expect(user).toMatchInlineSnapshot(`
      {
        "coolness": 100,
        "favoriteFood": "sushi",
        "name": "Bob",
        "projects": [
          "vitest",
          "vite",
        ],
        "username": "antho",
      }
    `);
  });
  test("set coolness level appropriately", async () => {
    const antho = await loadUserData("antho");
    const matt = await loadUserData("matt");

    expect(antho.coolness).toBe(100);
    expect(matt.coolness).toBe(-1);
  });
  test("throws an error for noneexistant users", async () => {
    //directement la fonciton dans le expect car le throw new error dans le code de la fonction
    //est donné avant la fin de la fonction
    expect(async () => await loadUserData("fakeuser")).rejects.toThrowError("no user found");
  });
});
