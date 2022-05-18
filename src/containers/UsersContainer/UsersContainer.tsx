import React from "react";
import {
  Box,
  CircularProgress,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import {
  CancelPresentationOutlined,
  PersonOutline,
  Search,
} from "@mui/icons-material";

import Header from "components/Header";
import UserInfo from "components/UserInfo";
import UserRepos from "components/UserRepos";
import { usersApi } from "store/users";

const UsersContainer: React.FC = () => {
  const [getUser, { data: user, isLoading, isError }] =
    usersApi.useLazyGetUserQuery();
  const [getRepositories, { data: repositories }] =
    usersApi.useLazyGetRepositoriesQuery();

  const handleSearch = (name: string) => {
    getUser(name, true);
    getRepositories(name, true);
  };

  return (
    <Container disableGutters maxWidth={false} sx={{ maxWidth: "1366px" }}>
      <Header onSearch={handleSearch} />
      {isLoading && (
        <Box textAlign="center" mt="35vh">
          <CircularProgress size={80} />
        </Box>
      )}
      {isError && (
        <Box color="#808080" textAlign="center" mt="35vh">
          <PersonOutline sx={{ fontSize: "88px" }} />
          <Typography fontSize="22px">User not found</Typography>
        </Box>
      )}
      {!isLoading && !isError && !user && (
        <Box color="#808080" textAlign="center" mt="35vh">
          <Search sx={{ fontSize: "88px" }} />
          <Typography fontSize="22px" maxWidth="210px" m="0 auto">
            Start with searching a GitHub user
          </Typography>
        </Box>
      )}
      {!isLoading && !isError && user && repositories && (
        <Container>
          <Stack direction="row" flexWrap="wrap" gap="96px">
            <UserInfo user={user} />
            {repositories?.length ? (
              <UserRepos repositories={repositories} />
            ) : (
              <>
                <Box color="#808080" textAlign="center" mt="15%" flex="2">
                  <CancelPresentationOutlined sx={{ fontSize: "88px" }} />
                  <Typography fontSize="22px">
                    Repository list is empty
                  </Typography>
                </Box>
              </>
            )}
          </Stack>
        </Container>
      )}
    </Container>
  );
};

export default UsersContainer;
