import React, { ChangeEvent, FormEvent, useState } from "react";
import { InputAdornment, Stack, TextField } from "@mui/material";
import { GitHub, Search } from "@mui/icons-material";

import { HeaderProps } from "./Header.types";

const Header: React.FC<HeaderProps> = ({ onSearch }) => {
  const [userName, setUserName] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setUserName(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(userName);
    setUserName("");
  };

  return (
    <Stack
      sx={{ backgroundColor: "#0064EB", padding: "16px 41px" }}
      spacing="22px"
      direction="row"
      mb="28px"
    >
      <GitHub sx={{ color: "white", fontSize: "40px" }} />
      <form onSubmit={handleSubmit}>
        <TextField
          id="username"
          name="username"
          size="small"
          placeholder="Enter GitHub username"
          value={userName}
          onChange={handleChange}
          sx={{ backgroundColor: "#fff", border: "none", borderRadius: "6px" }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
        />
      </form>
    </Stack>
  );
};

export default Header;
