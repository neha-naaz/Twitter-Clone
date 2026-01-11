import React, { useState } from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate } from "react-router-dom";
import { Avatar, Button } from "@mui/material";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import TweetCard from "../HomeSection/TweetCard";
import ProfileModal from "./ProfileModal";

const Profile = () => {
  const [tabValue, setTabValue] = React.useState('1');
  const navigate=useNavigate();
  const[openProfileModel, setOpenProfileModel]=useState(false);
  const handleOpenProfileModel = () => setOpenProfileModel(true);
  const handleClose = () => setOpenProfileModel(false);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);

    if (newValue === 4) {
      console.log("likes tweet")
    } else if(newValue === 1) {
      console.log("users tweet")
    }
  };

  const handleBack = () => navigate(-1);

  const handleFollowUser = () => {
    console.log("handleOpenFollowUser");
  };

  return (
    <div>
      <section className={`bg-white z-50 flex items-center sticky top-0 bg-opacity-95`}>
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

          <div className="flex items-center space-x-5">
            <div className="flex items-center space-x-1 font-semibold">
              <span>190</span>
              <span className="text-gray-500">Following</span>
            </div>

            <div className="flex items-center space-x-1 font-semibold">
              <span>590</span>
              <span className="text-gray-500">Followers</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
      <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={tabValue}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleTabChange} aria-label="lab API tabs example">
            <Tab label="TWEETS" value="1" />
            <Tab label="REPLIES" value="2" />
            <Tab label="MEDIA" value="3" />
            <Tab label="LIKES" value="4" />
          </TabList>
        </Box>
        <TabPanel value="1">
          {[1,1,1,1].map((item)=><TweetCard />)}
        </TabPanel>
        <TabPanel value="2">users replies</TabPanel>
        <TabPanel value="3">users media</TabPanel>
        <TabPanel value="4">users likes</TabPanel>
      </TabContext>
    </Box>
      </section>

      <section>
        <ProfileModal handleClose={handleClose} open={openProfileModel}/>
      </section>
    </div>
  );
};

export default Profile;
