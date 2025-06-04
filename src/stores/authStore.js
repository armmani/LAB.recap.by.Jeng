import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAuthStore = create(persist( (set) => ({
  user: null,
  accessToken: "",
  userId: "44699126-0e7c-447c-9164-307c4febe598",
  actionLogin: (input) => {},
  actionRegister: (input) => {},
  actionGetme: () => {},
}), 
{
  name: "user-store",

} ))

export default useAuthStore;