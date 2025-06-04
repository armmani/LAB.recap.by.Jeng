import axios from "axios";
import { create } from "zustand";

const usetPostStore = create( (set) => ({
  posts: [],
  post: null,
  actionFetchPostsByUserId: async (userId) => {
    const res = await axios.get(` https://api-post-ts.onrender.com/api/v1/posts/${userId}`)
  }
}) )