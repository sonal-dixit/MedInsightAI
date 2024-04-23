import { Table } from "antd";

const TableDisplayWithHeader = ({
  data,
  strippedTableModifierLight,
  pageSize,
}) => {
  let dataSource = data;
  let columns;
  if (Array.isArray(data)) {
    columns =
      data?.length > 0
        ? dataSource[0].map((header, index) => ({
            title: header,
            dataIndex: index.toString(),
            key: index.toString(),
            render: (text) => {
              return header === "Charge Holder" ? text.toUpperCase() : text;
            },
          }))
        : [];
  }
  return (
    <Table
      dataSource={dataSource?.slice(1)}
      columns={columns}
      rowClassName={strippedTableModifierLight}
      pagination={{
        pageSize: pageSize || 10,
      }}
    />
  );
};

export default TableDisplayWithHeader;
