import React from "react";
import VideoCard from "./VideoCard";
import "./RecommendedVideos.css";

function RecommendedVideos() {
  return (
    <div className="recommendedVideos">
      <h2>Recommended</h2>
      <div className="recommendedVideos__videos">
        <VideoCard
          title="🔴 Build a Spotify Clone with REACT JS for Beginners"
          views="97K views"
          timestamp="3 weeks ago"
          channelImage="https://yt3.ggpht.com/a-/AOh14GhOUP_9re93yOMdN4RLQLHl6Mbk6vmUS1524w=s68-c-k-c0x00ffffff-no-rj-mo"
          channel="Clever Programmer"
          image="https://i.ytimg.com/vi/pnkuI8KXW_8/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLADfoh5d3hfbtDN8xKmYeN8Xj2cSg"
        />
        <VideoCard
          title="Best Naruto OST - Beautiful and Emotional Anime Music 【BGM】"
          views="377K views"
          timestamp="2 years ago"
          channelImage="https://yt3.ggpht.com/a-/AOh14Gj8bF0mv08KE-UGnr5DyTlHMQXahPo5gQGHLw=s68-c-k-c0x00ffffff-no-rj-mo"
          channel="The Soul of Wind"
          image="https://i.ytimg.com/vi/dQjmZ7mx7yY/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLB1DVdGMNCmdiuU1Wxm_Qzq7NK6YA"
        />
        <VideoCard
          title="Steal It & I'll Buy You a Real Diamond!"
          views="7.9M views"
          timestamp="6 days ago"
          channelImage="https://yt3.ggpht.com/a-/AOh14GjFWfOrwDETAGPwewuffgSCchLIzo0s8LSuIw=s68-c-k-c0x00ffffff-no-rj-mo"
          channel="MrBeast Gaming"
          image="https://i.ytimg.com/vi/56bUgtG8Gzg/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDQWXeNMzaTAysyPWIpLq1GVoNOFA"
        />
        <VideoCard
          title="BB Ki Vines- | Business Call |"
          views="15M views"
          timestamp="5 months ago"
          channelImage="https://yt3.ggpht.com/a-/AOh14GgLYYiz0Y3nUxMlnmJtKEzwsbaLZidmSFdCUA=s68-c-k-c0x00ffffff-no-rj-mo"
          channel="BB Ki Vines"
          image="https://i.ytimg.com/vi/QQF4Uz4CZMg/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLB0GuF5mKYcbDV5ON5gHfZttmP1-Q"
        />
        <VideoCard
          title="2 Hour Beautiful Piano Music for Studying and Sleeping 【BGM】"
          views="46M views"
          timestamp="3 years ago"
          channelImage="https://yt3.ggpht.com/a-/AOh14Gj8bF0mv08KE-UGnr5DyTlHMQXahPo5gQGHLw=s68-c-k-c0x00ffffff-no-rj-mo"
          channel="The Soul of Wind"
          image="https://i.ytimg.com/vi/HSOtku1j600/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAc27SLZa5lXaAx_Ym7-4C8lh-rtQ"
        />
        <VideoCard
          title="Last to Stop Swinging Wins $1,000,000 (Part 2)"
          views="33M views"
          timestamp="8 months ago"
          channelImage="https://yt3.ggpht.com/a-/AOh14GivuiBq3tWPpHM0gKiN3RSpe6CgkcMGziRrRg=s68-c-k-c0x00ffffff-no-rj-mo"
          channel="MrBeast"
          image="https://i.ytimg.com/vi/RwnN2FVaHmw/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDaz9Hf7b-O8Ch6xOlA_3uxk4dv_A"
        />
        <VideoCard
          title="Learn Kotlin in 1 hour 🔥| Android development for beginners"
          views="19K views"
          timestamp="1 week ago"
          channelImage="https://yt3.ggpht.com/a-/AOh14GgOtsvwxVAGPs5yOqp_F5tVkigTfz2DmdG1aQ=s68-c-k-c0x00ffffff-no-rj-mo"
          channel="Anuj Bhaiya"
          image="https://i.ytimg.com/vi/mnkzx3TwbV8/hqdefault.jpg?sqp=-oaymwEZCOADEI4CSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDppecpw6Le5UNWnVR6DsiEg0RPaw"
        />
        <VideoCard
          title="GTA V with Ultra Realistic Graphics Mod!"
          views="10M views"
          timestamp="1 week ago"
          channelImage="https://yt3.ggpht.com/a-/AOh14GjFWfOrwDETAGPwewuffgSCchLIzo0s8LSuIw=s68-c-k-c0x00ffffff-no-rj-mo"
          channel="MrBeast Gaming"
          image="https://i.ytimg.com/vi/VFNR-wFvOns/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCgLbISjdthRt50fkLPcn9KnL52Vw"
        />
      </div>
    </div>
  );
}

export default RecommendedVideos;
