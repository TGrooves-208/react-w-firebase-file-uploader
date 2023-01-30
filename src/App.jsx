import "./App.css";
import { useEffect, useState } from "react";
import { storage } from "./firebase";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { v4} from "uuid";


function App() {
  const [fileUpload, setFileUpload] = useState(null);
  const [fileList, setFileList] = useState([]);

  const fileListRef = ref(storage, "images/")

  const uploadImageOrFile = () => {
    if (fileUpload == null) return;
    const imageRef = ref(storage, `images/${fileUpload.name + v4()}`);
    uploadBytes(imageRef, fileUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setFileList((prev) => [...prev, url])
      });
    });
  };

  useEffect(() => {
    listAll(fileListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setFileList((prev) => [...prev, url]);
        });
      });
    });
  }, [])

  return (
    <div className="App">
      <h1>React | Fileuploader | Firebase</h1>
      <input
        key="fileId"
        type="file"
        placeholder="File can be an image or text"
        onChange={(event) => {
          setFileUpload(event.target.files[0]);
        }}
      />
      
      <button onClick={uploadImageOrFile}>Select file for upload</button>

      {fileList.map((url, item) => {
        return <img src={url} key={item}/>
      })}
    </div>
  );
}

export default App;
