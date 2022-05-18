import React, { useState } from "react";
import { Box, List, Pagination, Stack, Typography } from "@mui/material";

import { UserReposProps } from "./UserRepos.types";
import UserRepo from "components/UserRepo/UserRepo";

const UserRepos: React.FC<UserReposProps> = ({ repositories }) => {
  const [page, setPage] = useState<number>(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Box flex="2">
      <Typography
        align="left"
        fontSize="32px"
        fontWeight="600"
        variant="h2"
        mb="29px"
      >
        Repositories ({repositories.length})
      </Typography>
      <List>
        {repositories.slice(page * 4 - 4, page * 4).map((repo) => (
          <UserRepo key={repo.id} repository={repo} />
        ))}
      </List>
      <Stack
        direction="row"
        spacing="24px"
        justifyContent="end"
        alignItems="center"
      >
        <Typography variant="body2" color="#808080">
          {page * 4 - 3}-{page * 4} of {repositories.length} Items
        </Typography>
        <Pagination
          page={page}
          count={Math.ceil(repositories.length / 4)}
          onChange={handleChange}
          color="primary"
          shape="rounded"
        />
      </Stack>
    </Box>
  );
};

export default UserRepos;
