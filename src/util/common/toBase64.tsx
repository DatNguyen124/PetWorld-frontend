// Base64 type :
//'data:image/jpeg;base64, LzlqLzRBQ.......
// we only get data after "," : LzlqLzRBQ.......

type FileLike = Blob | File; // Union type for both Blob and File
const FiletoBase64 = (file: FileLike): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    // Type guard to ensure 'reader.result' is a string
    reader.onload = () => {
      if (typeof reader.result === "string") {
        resolve(reader.result.split(",")[1]);
      } else {
        reject(new Error("Unexpected result type from FileReader"));
      }
    };

    reader.onerror = (error) => reject(error);

    reader.readAsDataURL(file);
  });
};

export default FiletoBase64; // Export for reusability
