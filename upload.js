require("dotenv").config();
const cloudinary = require("cloudinary").v2;

// eager async upload to create derived optimization transformations
// asynchronously to avoid delays with on the fly transformations

cloudinary.uploader
  .explicit("Upload_Presets_Tutorial_qicpyo", {
    type: "upload",
    resource_type: "video",
    eager: [
      { raw_transformation: "f_webm,vc_vp9,q_auto/mp4" },
      { raw_transformation: "f_mp4,vc_h265,q_auto/mp4" },
      { raw_transformation: "f_mp4,vc_h264,q_auto/mp4" },
    ],
    eager_async: true,
    eager_notification_url:
      "https://webhook.site/1a0678f1-afc3-4077-8666-e232a5fe8c2d",
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });