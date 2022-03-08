// instantiate cloudinary to set config
const cloudinaryCld = cloudinary.Cloudinary.new({ cloud_name: "jen-brissman" });

// wait for the player id element to load
document.addEventListener("DOMContentLoaded", e => {
  const options = {
    sourceTypes: ["mp4"],
    muted: true,
    controls: true,
    width: 800,
    sourceTransformation: {
    //   hls: [{ streaming_profile: "hd" }],
      mp4: [{ quality: "auto" }],
      mp4: [{ format: "auto" }],
    },
    playbackRates: [0.5, 1, 1.5, 2],
  };
  const media = cloudinaryCld.videoPlayer("player", options);
  media.source("Upload_Presets_Tutorial_qicpyo");
})
