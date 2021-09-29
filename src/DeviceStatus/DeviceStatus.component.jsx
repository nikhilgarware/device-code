import React, { useState } from "react";
import { Table, Input, Button, Form, Row, Col } from "antd";
import { modifiedJson } from "./DeviceStatus.utilities";
import { StatusCircle } from "./DeviceStatus.styled";

const { TextArea } = Input;

function DeviceStatus() {
  const [form] = Form.useForm();
  const [deviceStatus, setDeviceStatus] = useState(null);
  const onFinish = (data) => {
    let tempDeviceStatus = modifiedJson(data.json);
    setDeviceStatus(tempDeviceStatus);
  };
  function onReset() {
    form.resetFields();
    setDeviceStatus(null);
  }
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Auth User",
      dataIndex: "deviceAuthUser",
      key: "deviceAuthUser",
      align: "center",
    },
    {
      title: "Latest Timestamp",
      dataIndex: "timStamp",
      key: "timStamp",
      align: "center",
    },
    {
      title: "Device Status",
      dataIndex: "status",
      key: "status",
      render: (status) => {
        return <StatusCircle color={status === "true" ? "green" : "red"} />;
      },
      align: "center",
    },
  ];
  return (
    <div>
      <Form name="Form" form={form} onFinish={onFinish}>
        <Form.Item name="json" style={{ margin: "20px" }}>
          <TextArea rows={5} />
        </Form.Item>
        <Row align="center">
          <Form.Item name="button" style={{ margin: "20px" }}>
            <Button type="primary" htmlType="submit">
              View Devices
            </Button>
          </Form.Item>
          <Form.Item name="reset-button" style={{ margin: "20px" }}>
            <Button htmlType="button" onClick={onReset}>
              Reset
            </Button>
          </Form.Item>
        </Row>
      </Form>
      <Table
        style={{ margin: "50px" }}
        columns={columns}
        dataSource={deviceStatus}
      />
    </div>
  );
}

export default DeviceStatus;
