import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { Repository, User } from "./users.types";

export const usersApi = createApi({
  reducerPath: "users",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.github.com/users",
  }),
  endpoints: (build) => ({
    getUser: build.query<User, string>({
      query: (userName) => ({ url: `/${userName}` }),
    }),
    getRepositories: build.query<Repository[], string>({
      query: (userName) => ({ url: `/${userName}/repos` }),
    }),
  }),
});
