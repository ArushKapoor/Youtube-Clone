import React from "react";
import "./SearchPage.css";
import ChannelRow from "./ChannelRow";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import VideoRow from "./VideoRow";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />

      <ChannelRow
        image="https://yt3.ggpht.com/a-/AOh14GhOUP_9re93yOMdN4RLQLHl6Mbk6vmUS1524w=s68-c-k-c0x00ffffff-no-rj-mo"
        channel="Clever Programmer"
        verified
        subs="660K"
        noOfVideos={382}
        description="You can find awesome programming lessons here! Also, expect programming tips and tricks will take your coding skills to the ..."
      />

      <hr />

      <VideoRow
        views="12K views"
        subs="660K"
        description="FREE JavaScript Training ..."
        timestamp="12 hours ago"
        channel="Clever Programmer"
        title="🔴 Top UI/UX Design Trends (2020)"
        image="https://i.ytimg.com/vi/GJUUPexbpeY/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDhiOfBV6u_wtlXcI1FVbtJuqayzQ"
      />

      <VideoRow
        views="6K views"
        subs="660K"
        description="There's a big problem in programming communities. A lot of beginners quit coding because some people in communities like ..."
        timestamp="17 hours ago"
        channel="Clever Programmer"
        title="Why Stackoverflow Sucks (A Rant on Elitism in Coding)"
        image="https://i.ytimg.com/vi/RPbynQsdl24/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBvVGR93qQA839-pOql4EQWOaKTNw"
      />

      <VideoRow
        views="46K views"
        subs="660K"
        description="FREE JavaScript Training ..."
        timestamp="Streamed 1 day ago"
        channel="Clever Programmer"
        title="🔴  Build a Facebook Clone with REACT JS for Beginners!"
        image="https://i.ytimg.com/vi/B-kxUMHBxNo/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBCud7IMsie6j3GpDXtH8I5zk8NmA"
      />

      <VideoRow
        views="12K views"
        subs="660K"
        description="FREE JavaScript Training ..."
        timestamp="2 days ago"
        channel="Clever Programmer"
        title="🔴 Build a Whatsapp Clone with MERN Stack (MongoDB, Express, React, Node JS)"
        image="https://i.ytimg.com/vi/gzdQDxzW2Tw/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLD4Vh2Udp6d-8u4ndSmQll00Z9ebg"
      />

      <VideoRow
        views="30K views"
        subs="660K"
        description="FREE JavaScript Training ..."
        timestamp="Streamed 2 days ago"
        channel="Clever Programmer"
        title="🔴 Build an Airbnb Clone with REACT JS for Beginners!"
        image="https://i.ytimg.com/vi/BtJeH_-XYaA/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDr53O8qrTXxql8shBudR-wyIouXw"
      />

      <VideoRow
        views="33K views"
        subs="660K"
        description="FREE JavaScript Training ..."
        timestamp="Streamed 3 days ago"
        channel="Clever Programmer"
        title="🔴 Let's Build a Hulu Clone with REACT JS for Beginners!"
        image="https://i.ytimg.com/vi/du_FuBTrclo/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCwIletVIEJ6xjBaPICZd9CxFC-fA"
      />

      <VideoRow
        views="47K views"
        subs="660K"
        description="FREE JavaScript Training ..."
        timestamp="4 days ago"
        channel="Clever Programmer"
        title="4 Steps to Become a Front End Developer in 2021"
        image="https://i.ytimg.com/vi/F3ztn4H6Ftg/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLC1_gCB5ZQDhOCjIpB8IoWB8mZ8bQ"
      />

      <VideoRow
        views="27K views"
        subs="660K"
        description="FREE JavaScript Training ..."
        timestamp="Streamed 4 days ago"
        channel="Clever Programmer"
        title="🔴  Code 10x Faster With This CRAZY New AI Tool (GPT-3)"
        image="https://i.ytimg.com/vi/w4JYe-oY4HI/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDW0tOfPg62LFfMSqogyC-UOKI9SQ"
      />
    </div>
  );
}

export default SearchPage;
