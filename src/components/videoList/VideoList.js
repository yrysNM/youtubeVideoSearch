import VideoItem from "../videoItem/VideoItem";
import useBreakpoint from "use-breakpoint";
import { useEffect, useState } from "react";
import { UIBreakPoints } from "../responsiveUI/UIBreakPoint";
import youtubeStatistics from "../../apis/youtubeStatistics";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/pagination";


const VideoList = ({ videos, handleVideoSelect }) => {

    const { breakpoint, maxWidth, minWidth } = useBreakpoint(UIBreakPoints, "");

    const [breakPointSize, setBreakPointSize] = useState(false);

    useEffect(() => {
        setBreakPointSize(breakpoint === "tablet" || breakpoint === "phablet" || breakpoint === "mobile");
    }, [minWidth]);

    /**
     * @param {modiled} videoViews for future if i back this petproject
     */
    // const [videoViews, setVideoViews] = useState([]);
    // async function metadata(videoId) {
    //     console.log("render");
    //     const response = await youtubeStatistics.get("/videos", {
    //         params: {
    //             id: videoId,
    //         }
    //     });

    //     setVideoViews(videoViews => [...videoViews, response.data.items]);
    // }

    // useEffect(() => {
    //     videos.map((video) => {
    //         return metadata(video.id.videoId);
    //     })

    // }, [videos]);

    const renderredVideos = videos.map((video) => {

        return <VideoItem
            video={video}
            key={video.id.videoId}
            handleVideoSelect={handleVideoSelect} />;
    });

    const slideRender = () => {

        return (
            <Swiper
                slidesPerView={2}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}>

                {videos.map(video => {
                    return (
                        <SwiperSlide key={video.id.videoId}>
                            <VideoItem
                                video={video}
                                handleVideoSelect={handleVideoSelect} />
                        </SwiperSlide>

                    );
                })}
            </Swiper>

        );

    };


    return (

        <div className="videoList__block">
            {breakPointSize ? slideRender() : renderredVideos}
        </div>
    );


};

export default VideoList;