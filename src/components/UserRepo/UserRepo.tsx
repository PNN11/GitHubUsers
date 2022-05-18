import React from "react";
import { Link, ListItem, ListItemText, Typography } from "@mui/material";

import { UserRepoProps } from "./UserRepo.types";

const UserRepo: React.FC<UserRepoProps> = ({ repository }) => {
  const { name, html_url, description } = repository;
  return (
    <ListItem
      sx={{
        backgroundColor: "#FFFFFF",
        marginBottom: "24px",
        borderRadius: "6px",
        padding: "24px 32px",
      }}
    >
      <ListItemText
        primary={
          <Typography fontWeight={600} variant="h5" marginBottom="16px">
            <Link
              color="#0064EB"
              href={html_url}
              target="_blank"
              rel="noopener"
              underline="none"
            >
              {name}
            </Link>
          </Typography>
        }
        secondary={<Typography>{description}</Typography>}
      />
    </ListItem>
  );
};

export default UserRepo;
