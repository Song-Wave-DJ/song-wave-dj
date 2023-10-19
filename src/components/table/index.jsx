import { Table } from "antd";
import { useState } from "react";
import { ReloadOutlined } from "@ant-design/icons";
import { EmptyIcon } from "../../assets";
import "./style.css";

const stub = () => {};

const TableComponent = ({
  columns,
  dataSource = [],
  loading,
  pageSize = 10,
  total,
  onChange = stub,
  showPagination = true,
  showHeader = true,
  noDataAction = undefined,
  rowKey = "id",
  showTotal = true,
  onRowClick = () => {},
  scroll = true,
}) => {
  let locale = {
    emptyText: (
      <div className="flex p-10 h-[60vh] justify-center flex-col items-center x ">
        <div>
          <img src={EmptyIcon} className="w-36 object-contain" />
          <span className="text-lg">No data available!</span>
        </div>
        {noDataAction && !loading && (
          <div className="pt-2">
            <ReloadOutlined className="text-sm text-grey-90" />
          </div>
        )}
      </div>
    ),
  };

  const [currentPage, setCurrentPage] = useState(1);

  const changeHandler = (pageNum, pageSize) => {
    setCurrentPage(pageNum);
    onChange(pageNum, pageSize);
  };

  const paginationOptions = {
    pageSize: pageSize,
    total: total || dataSource?.length,
    showSizeChanger: false,
    onChange: changeHandler,
    showTotal: () =>
      showTotal ? (
        <p>
          Showing{" "}
          {Math.min(currentPage * pageSize, total || dataSource?.length)} out of{" "}
          {total || dataSource?.length} results
        </p>
      ) : null,
  };

  return (
    <section className="grid gap-5">
      <div className="overflow-x-auto">
        <Table
          scroll={scroll}
          rowKey={rowKey}
          locale={locale}
          loading={loading}
          columns={columns}
          dataSource={dataSource}
          pagination={showPagination && paginationOptions}
          showHeader={showHeader}
          onRow={(row, index) => {
            return {
              onClick: () => {
                if (onRowClick) return onRowClick(row, index);
              },
            };
          }}
        />
      </div>
    </section>
  );
};
export default TableComponent;
