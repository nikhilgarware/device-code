import React from "react";
import {
  activeDevices,
  inActiveDevices,
  blankDevice,
} from "./DeviceStatus.utilities";
import { Table, Input, Button, Form } from "antd";
import { myFunc } from "./DeviceStatus.utilities";

const { TextArea } = Input;
function DeviceStatus() {
  const onFinish = (data) => {
    myFunc(data.json);
  };
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Auth User",
      dataIndex: "authUser",
      key: "authUser",
    },
    {
      title: "Latest Timestamp",
      dataIndex: "latestTimeStamp",
      key: "latestTimeStamp",
    },
  ];
  return (
    <div>
      <Form name="Form" onFinish={onFinish}>
        <Form.Item name="json">
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item name="button">
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <Table
        style={{ margin: "50px" }}
        columns={columns}
        dataSource={activeDevices}
      />
    </div>
  );
}

export default DeviceStatus;
