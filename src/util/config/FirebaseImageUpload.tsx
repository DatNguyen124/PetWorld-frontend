import React, { useState, useEffect } from "react";
import { ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";
import { v4 } from "uuid";
import { imageDb } from "./fbs.config"; // Adjust the import according to your firebase configuration file

const FirebaseImageUpload: React.FC = () => {
  const [img, setImg] = useState<File | null>(null);
  const [imgUrl, setImgUrl] = useState<string[]>([]);

  const handleClick = () => {
    if (img !== null) {
      const imgRef = ref(imageDb, `files/${v4()}`);
      uploadBytes(imgRef, img).then((value) => {
        console.log(value);
        getDownloadURL(value.ref).then((url) => {
          setImgUrl((data) => [...data, url]);
        });
      });
    }
  };

  useEffect(() => {
    listAll(ref(imageDb, "files")).then((imgs) => {
      console.log(imgs);
      imgs.items.forEach((val) => {
        getDownloadURL(val).then((url) => {
          setImgUrl((data) => [...data, url]);
        });
      });
    });
  }, []);

  return (
    <div className="App">
      <input
        type="file"
        onChange={(e) => setImg(e.target.files ? e.target.files[0] : null)}
      />
      <button onClick={handleClick}>Upload</button>
      <br />
      {imgUrl.map((dataVal) => (
        <div key={dataVal}>
          <img src={dataVal} height="200px" width="200px" alt="uploaded" />
          <br />
        </div>
      ))}
    </div>
  );
};

export default FirebaseImageUpload;
