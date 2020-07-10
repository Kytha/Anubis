import React from "react";
import { CSVReader } from "react-papaparse";

const handleOnError = (e) => {
  console.log(e);
};

const CSVImporter = (props) => {
  const { handleOnDrop, handleOnRemoveFile } = props;
  return (
    <CSVReader
      onDrop={handleOnDrop}
      onError={handleOnError}
      style={{ color: "#FC5185" }}
      config={{ header: true, worker: true }}
      addRemoveButton
      onRemoveFile={handleOnRemoveFile}
    >
      <span>Drop CSV file here or click to upload.</span>
    </CSVReader>
  );
};

export default CSVImporter;
