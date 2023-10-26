import { describe, test, expect } from "vitest";
import { loadUserData } from "./load_user.tsx";

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
  test("load user data as expected", async () => {
    const user = await loadUserData("antho");
    expect(user).toMatchSnapshot();
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
