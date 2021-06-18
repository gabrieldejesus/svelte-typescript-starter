import { writable } from "svelte/store";

type Store = {
  name: string;
  age: number;
  admin: boolean;
};

export const store = writable<Store>({
  name: "Gabriel de Jesus",
  age: 22,
  admin: false,
});
