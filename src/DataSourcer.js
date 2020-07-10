import React from "react";
import CSVImporter from "./CSVImporter";

const DataSourcer = (props) => {
  const { setData, setFields } = props;
  const handleOnDrop = (data) => {
    setData(data);
    if (data && data.length) setFields(data[0].meta.fields);
  };
  const handleOnRemoveFile = (data) => {
    setData([]);
    setFields([]);
  };
  return (
    <CSVImporter
      handleOnDrop={handleOnDrop}
      handleOnRemoveFile={handleOnRemoveFile}
    />
  );
};

export default DataSourcer;
