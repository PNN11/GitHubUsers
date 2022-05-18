import React from "react";
import { Avatar, Link, Stack, Typography } from "@mui/material";
import { People, PersonRounded } from "@mui/icons-material";

import { UserInfoProps } from "./UserInfo.types";

const UserInfo: React.FC<UserInfoProps> = ({ user }) => {
  const { avatar_url, name, login, followers, following, html_url } = user;
  return (
    <Stack flex="1" maxWidth="280px">
      <Avatar
        src={avatar_url}
        sx={{ width: "100%", height: "auto", marginBottom: "29px" }}
      ></Avatar>
      <Typography
        fontSize={26}
        fontWeight="600"
        marginBottom="12px"
        variant="h2"
      >
        {name}
      </Typography>
      <Link
        href={html_url}
        target="_blank"
        rel="noopener"
        fontSize="18px"
        fontWeight="400"
        mb="25px"
        underline="none"
      >
        {login}
      </Link>
      <Stack direction="row" justifyContent="space-between">
        <Stack direction="row" spacing="10px">
          <People color="disabled" />
          <Typography alignItems="center">{followers} followers</Typography>
        </Stack>
        <Stack direction="row" spacing="10px">
          <PersonRounded color="disabled" />
          <Typography>{following} following</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default UserInfo;
