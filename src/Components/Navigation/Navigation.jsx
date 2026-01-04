import React from "react";
import { navigationMenu } from "./NavigationMenu";
import { useNavigate } from "react-router-dom";
import { Avatar, Button, Menu, MenuItem } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const Navigation = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    console.log("Logout");
    handleClose();
  };
  return (
    <div className="h-screen sticky top-0">
      <div>
        <div className="py-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
            class="bi bi-twitter-x"
            viewBox="-10 -10 50 50"
            id="Twitter-X--Streamline-Bootstrap"
            height="50"
            width="50"
          >
            <desc>Twitter X Streamline Icon: https://streamlinehq.com</desc>
            <path
              d="M23.625 1.40625h4.60125l-10.05 11.516250000000001L30 28.59375h-9.256875l-7.250625 -9.506250000000001 -8.296875 9.506250000000001H0.5925l10.749374999999999 -12.318750000000001L0 1.40625h9.493125l6.5531250000000005 8.686875L23.626875000000002 1.40625Zm-1.6125 24.427500000000002h2.5500000000000003L8.105625 4.021875H5.371875z"
              stroke-width="1.875"
            ></path>
          </svg>
        </div>
        <div className="space-y-6">
          {navigationMenu.map((item) => (
            <div
              className="cursor-pointer flex space-x-3 items-center"
              onClick={() =>
                item.title === "Profile"
                  ? navigate(`/profile/${5}`)
                  : navigate(item.path)
              }
            >
              {item.icon}
              <p className="text-x1">{item.title}</p>
            </div>
          ))}
        </div>
        <div className="py-10">
          <Button
            sx={{
              width: "100%",
              borderRadius: "29px",
              py: "15px",
              bgcolor: "#1e88e5",
            }}
            variant="contained"
          >
            Tweet
          </Button>
        </div>
        <div className="flex item-center justify-between">
          <div className="flex item-center space-3">
            <Avatar
              alt=""
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8h8Dy7U_XjGALwkMmvzChX5YaxQg8Z2UJCA&s"
            />
          </div>
          <div>
            <span>Neha Naaz</span>
            <span className="opacity-70">@neha_naazneen</span>
          </div>

          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <MoreHorizIcon />
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            slotProps={{
              list: {
                "aria-labelledby": "basic-button",
              },
            }}
          >
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
