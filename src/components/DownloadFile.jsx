
// import React from "react";
// import styles from "./DownloadFile.module.css"; // Import the CSS module

// const fileIcons = {
//   default: ".././img/default-icon.png",
// };

// const getFileExtension = (filename) => {
//   return filename.split(".").pop().toLowerCase();
// };

// const DownloadFile = ({ fileName, fileSize, filePath }) => {
//   const fileExt = getFileExtension(fileName);
//   const icon = fileIcons[fileExt] || fileIcons.default;

//   return (
//     <a href={filePath} download className={styles.downloadFile}>
//       <img src={icon} alt={`${fileExt} Icon`} className={styles.icon} />
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
import useBaseUrl from "@docusaurus/useBaseUrl";

// Function to get file extension
const getFileExtension = (fileName) => {
  return fileName.split(".").pop().toLowerCase();
};

const DownloadBox = ({ fileName, fileSize, filePath }) => {
  const fileExt = getFileExtension(fileName);

  // Define icons inside the component
  const icons = {
    zip: "img/zip-icon.png",
    py: "img/py-icon.png",
    txt: "img/txt-icon.png",
    pdf: "img/pdf-icon.png",
    docx: "img/docx-icon.png",
    default: "img/default-icon.png",
  };

  const icon = useBaseUrl(icons[fileExt] || icons.default);
  const resolvedFilePath = useBaseUrl(filePath);

  return (
    <div style={{
      border: "1px solid #ddd",
      padding: "10px",
      borderRadius: "5px",
      display: "flex",
      alignItems: "center",
      gap: "10px"
    }}>
      <img src={icon} alt={`${fileExt} icon`} width="50" />
      <div>
        <strong>
          <a href={resolvedFilePath} download>{fileName}</a>
        </strong>
        <br />
        <small>{fileSize}</small>
      </div>
    </div>
  );
};

export default DownloadBox;