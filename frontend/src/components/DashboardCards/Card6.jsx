import { Table, Modal } from "antd";
import { useState } from "react";
import TableDisplayWithHeader from "../TableDisplayWithHeader";
import { strippedTableModifierLight } from "../../utils/utils.js";

const Card6 = ({ data, heading }) => {
  const [matchingDirector, setMatchingDirector] = useState(null);
  const [selectedDirector, setSelectedDirector] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleDirectorClick = (record) => {
    const directorDIN = record["Director DIN"];
    setSelectedDirector(record);
    setMatchingDirector(data[1][directorDIN]);
    showModal();
  };
  const directorsData = data?.[0] ?? [];
  let columns =
    directorsData?.length > 0
      ? Object.keys(directorsData[0]).map((key) => ({
          title: key,
          dataIndex: key,
          key: key,
          render: (text, record) => {
            if (key === "Director Name") {
              return (
                <span
                  style={{ cursor: "pointer" }}
                  className="text-[#4846b3] underline"
                  onClick={() => handleDirectorClick(record)}
                >
                  {text}
                </span>
              );
            }
            return text;
          },
        }))
      : [];

  return (
    <div className="bg-white shadow-sm rounded-xl flex flex-col gap-4 p-8">
      <h1 className="text-2xl font-bold text-[#040354]">{heading}</h1>
      <Table
        dataSource={directorsData}
        columns={columns}
        rowClassName={strippedTableModifierLight}
      />
      <Modal
        keyboard
        width={"90%"}
        title={
          "Other Directorships of " +
          selectedDirector["Director Name"] +
          " (DIN: " +
          selectedDirector["Director DIN"] +
          ")"
        }
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <TableDisplayWithHeader
          key={selectedDirector["Director DIN"]}
          data={matchingDirector}
          strippedTableModifierLight={strippedTableModifierLight}
          pageSize={5}
        />
      </Modal>
    </div>
  );
};

export default Card6;
