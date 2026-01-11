import React from "react";
import { useNavigate } from "react-router-dom";
import { Avatar, Button, Menu, MenuItem } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import BarChartIcon from "@mui/icons-material/BarChart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { FavoriteOutlined } from "@mui/icons-material";
import ReplyModel from './ReplyModel';

const TweetCard = () => {
  const navigate=useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const[openReplyModel, setOpenReplyModel]=React.useState(false);
  const handleOpenReplyModel = () => setOpenReplyModel(true);
  const handleCloseReplyModel = () => setOpenReplyModel(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleDeleteTweet = () => {
    console.log("delete tweet");
    handleClose();
  };

  const handleCreateRetweet = () => {
    console.log("retweet");
  };
  const handleLikeTweet = () => {
    console.log("Like Tweet");
  };
  return (
    <React.Fragment>
      {/* <div className='flex items-center fot-semibold text-gray-700 py-2'>
            <RepeatIcon/>
            <p>You Retweet</p>

        </div> */}
      <div className="flex space-x-5">
        <Avatar
          onClick={() => navigate(`/profile/${6}`)}
          className="cursor-pointer"
          alt="username"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8h8Dy7U_XjGALwkMmvzChX5YaxQg8Z2UJCA&s"
        />
        <div className="w-full">
          <div className="flex justify-between items-center ">
            <div className="flex cursor-pointer items-center space-x-2">
              <span className="font-semibold">Code with Neha</span>
              <span className="text-gray-600">@codewithneha . 2m</span>
              <img
                className="ml-2 w-5 h-5"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtKhZVxWmELo68xu9a00XQ8OrV9hzQD54h2A&s"
                alt=""
              />
            </div>
            <div>
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
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleDeleteTweet}>Delete</MenuItem>
                <MenuItem onClick={handleDeleteTweet}>Edit</MenuItem>
              </Menu>
            </div>
          </div>
          <div className="mt-2">
            <div onClick={()=>navigate(`/tweet/${3}`)}  className="cursor-pointer ">
              <p className="mb-2 p-0">nice tutorial</p>
              <img
                className="w-[28rem] border border-gray-400 p-5 rounded-md"
                src="data:image/jpeg;base64,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"
                alt=""
              />
            </div>
            <div className="py-5 flex flex-wrap justify-between items-center">
              <div className="space-x-3 flex items-center text-gray-600">
                <ChatBubbleOutlineIcon
                  className="cursor-pointer"
                  onClick={handleOpenReplyModel}
                />
                <p>43</p>
              </div>
              <div
                className={`${
                  true ? "text-pink-600" : "text-gray-600"
                } space-x-3 flex items-center`}
              >
                <RepeatIcon
                  onClick={handleCreateRetweet}
                  className="cursor-pointer"
                />
                <p>54</p>
              </div>

              <div
                className={`${
                  true ? "text-pink-600" : "text-gray-600"
                } space-x-3 flex items-center`}
              >
                {true ? (
                  <FavoriteIcon
                    onClick={handleLikeTweet}
                    className="cursor-pointer"
                  />
                ) : (
                  <FavoriteOutlined
                    onClick={handleLikeTweet}
                    className="cursor-pointer"
                  />
                )}
                <p>54</p>
              </div>

              <div className="space-x-3 flex items-center text-gray-600">
                <BarChartIcon
                  className="cursor-pointer"
                  onClick={handleOpenReplyModel}
                />
                <p>43</p>
              </div>

              <div className="space-x-3 flex items-center text-gray-600">
                <FileUploadIcon
                  className="cursor-pointer"
                  onClick={handleOpenReplyModel}
                />
                <p>43</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section>
        <ReplyModel handleClose={handleCloseReplyModel} open={openReplyModel}/>
      </section>
    </React.Fragment>
  );
};

export default TweetCard;
