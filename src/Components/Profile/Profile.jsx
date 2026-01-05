import React from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate } from "react-router-dom";
import { Avatar, Button } from "@mui/material";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const Profile = () => {
  const navigate = useNavigate();

  const handleBack = () => navigate(-1);

  const handleOpenProfileModel = () => {
    console.log("handleOpenProfileModel");
  };

  const handleFollowUser = () => {
    console.log("handleOpenFollowUser");
  };

  return (
    <div>
      <section className={`z-50 flex items-center sticky top-0 bg-opacity-95`}>
        <KeyboardBackspaceIcon
          className="cursor-pointer"
          onClick={handleBack}
        />
        <h1 className="py-5 text-xl font-bold opacity-90 ml-5">
          Code with Neha
        </h1>
      </section>

      <section>
        <img
          className="w-[100%] -[15rem] object-cover"
          src="https://cdn.pixabay.com/photo/2025/12/13/17/42/17-42-02-836_1280.jpg"
          alt=""
        ></img>
      </section>

      <section className="pl-6">
        <div className="flex justify-between items-start mt-5 h-[5rem]">
          <Avatar
            className="transform -translate-y-24"
            alt="code with neha"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8h8Dy7U_XjGALwkMmvzChX5YaxQg8Z2UJCA&s"
            sx={{ width: "10rem", height: "10rem", border: "4px solid white" }}
          />

          {true ? (
            <Button
              onClick={handleOpenProfileModel}
              variant="contained"
              sx={{ borderRadius: "20px" }}
            >
              Edit Profile
            </Button>
          ) : (
            <Button
              onClick={handleFollowUser}
              variant="contained"
              sx={{ borderRadius: "20px" }}
            >
              {true ? "Follow" : "Unfollow"}
            </Button>
          )}
        </div>

        <div>
          <div className="flex items-center">
            <h1 className="font-bold text-lg">Code with Neha</h1>
            {true && (
              <img
                className="ml-2 w-5 h-5"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtKhZVxWmELo68xu9a00XQ8OrV9hzQD54h2A&s"
                alt=""
              />
            )}
          </div>
          <h1 className="text-gray-500">@codewithneha</h1>
        </div>

        <div className="mt-2 space-y-3">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            expedita eaque illo aliquam eius nostrum excepturi! Ad mollitia
            deserunt corporis, labore, esse libero excepturi expedita ipsam
            necessitatibus id ipsa quaerat.
          </p>
          <div className="py-1 flex space-x-5">
            <div className="flex items-center text-gray-500">
              <BusinessCenterIcon />
              <p className="ml-2">Education</p>
            </div>
            <div className="flex items-center text-gray-500">
              <LocationOnIcon />
              <p className="ml-2">India</p>
            </div>
            <div className="flex items-center text-gray-500">
              <CalendarMonthIcon />
              <p className="ml-2">Joined Jun 2023</p>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
