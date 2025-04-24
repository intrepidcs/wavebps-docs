// import React from "react";

// const fileIcons = {
//   default: "/img/default-icon.png", // A fallback icon
// };

// const getFileExtension = (filename) => {
//   return filename.split(".").pop().toLowerCase();
// };

// const DownloadFile = ({ fileName, fileSize, filePath }) => {
//   const fileExt = getFileExtension(fileName);
//   const icon = fileIcons[fileExt] || fileIcons.default;

//   return (
//     <div style={{ border: "1px solid #ddd", padding: "10px", borderRadius: "5px", display: "flex", alignItems: "center", gap: "10px" }}>
//       <img src={icon} alt={`${fileExt} Icon`} width="60" />
//       <div>
//         <strong>
//           <a href={filePath} download>{fileName}</a>
//         </strong><br />
//         <small>{fileSize}</small>
//       </div>
//     </div>
//   );
// };

// export default DownloadFile;

// import React from "react";

// const fileIcons = {
//   default: "/img/default-icon.png", // A fallback icon
// };

// const getFileExtension = (filename) => {
//   return filename.split(".").pop().toLowerCase();
// };

// const DownloadFile = ({ fileName, fileSize, filePath }) => {
//   const fileExt = getFileExtension(fileName);
//   const icon = fileIcons[fileExt] || fileIcons.default;

//   return (
//     <a
//       href={filePath}
//       download
//       style={{
//         textDecoration: "none",
//         color: "inherit",
//         display: "block",
//         border: "1px solid #ddd",
//         padding: "10px",
//         borderRadius: "5px",
//         display: "flex",
//         alignItems: "center",
//         gap: "10px",
//         cursor: "pointer",
//       }}
//     >
//       <img src={icon} alt={`${fileExt} Icon`} width="60" />
//       <div>
//         <strong>{fileName}</strong>
//         <br />
//         <small>{fileSize}</small>
//       </div>
//     </a>
//   );
// };

// export default DownloadFile;

import React from "react";
import styles from "./DownloadFile.module.css"; // Import the CSS module

const fileIcons = {
  default: "/wavebps/img/default-icon.png",
};

const getFileExtension = (filename) => {
  return filename.split(".").pop().toLowerCase();
};

const DownloadFile = ({ fileName, fileSize, filePath }) => {
  const fileExt = getFileExtension(fileName);
  const icon = fileIcons[fileExt] || fileIcons.default;

  return (
    <a href={filePath} download className={styles.downloadFile}>
      <img src={icon} alt={`${fileExt} Icon`} className={styles.icon} />
      <div>
        <strong>{fileName}</strong>
        <br />
        <small>{fileSize}</small>
      </div>
    </a>
  );
};

export default DownloadFile;
