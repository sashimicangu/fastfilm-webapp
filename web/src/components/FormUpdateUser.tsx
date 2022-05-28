import { Button, Form, Input, Modal, Row, DatePicker, Space } from 'antd';
import React, { useEffect } from 'react';
// import { RadiusSelection } from "../../../component/Inputs";
// import { FORM_ITEM_LAYOUT_STAFF, RANK, SEX } from "../../../config/constants";
// import reactotron from "../../../ReactotronConfig";

interface Props {
  visible: boolean;
  onCancel: () => void;
  handleUpdate: (item?: any) => void;
  title: string;
  dataInfoStaff: object | undefined | any;
}

const TITLE_INFO_STAFF = {
  name: 'Họ tên',
  address: 'Địa chỉ',
  code: 'Mã sinh viên',
  phone: 'Số điện thoại',
  email: 'Email',
  identification: 'Căn cước công dân',
  specialize: 'Chuyên môn',
};
function convertDataToFrom(data: any) {
  return {
    ...data,
    code: data.code,
    name: data.name,
    address: data.address,
    phone: data.phone,
  };
}

export default function FormUpdateUser(props: Props) {
  const [form] = Form.useForm();
  const { visible, onCancel, title, dataInfoStaff, handleUpdate } = props;

  const initialValues = convertDataToFrom(dataInfoStaff);

  useEffect(() => {}, []);

  return (
    <div>
      <Modal
        onCancel={() => {
          form.resetFields();
          onCancel();
        }}
        maskClosable={false}
        footer={null}
        title={title}
        visible={visible}
        children={
          <div>
            <Form
              labelCol={{
                xs: { span: 24 },
                sm: { span: 8 },
              }}
              wrapperCol={{
                xs: { span: 24 },
                sm: { span: 16 },
              }}
              form={form}
              name="register"
              labelAlign="left"
              onFinish={(values: any) => {}}
              initialValues={initialValues}
              scrollToFirstError
              children={
                <>
                  <FormItem label={TITLE_INFO_STAFF.code} name="code" />
                  <FormItem label={TITLE_INFO_STAFF.name} name="name" />
                  <FormItem label={TITLE_INFO_STAFF.address} name="address" />
                  <FormItem label={TITLE_INFO_STAFF.phone} name="phone" />
                  <FormItem label={TITLE_INFO_STAFF.email} name="email" />
                  <FormItem
                    label={TITLE_INFO_STAFF.identification}
                    name="identification"
                  />
                  <FormItem
                    label={TITLE_INFO_STAFF.specialize}
                    name="specialize"
                  />
                </>
              }
            />
            <Row justify="end">
              <Button
                style={{
                  fontWeight: 800,
                  borderRadius: '3px',
                  marginRight: 10,
                }}
                danger
                type="primary"
                children={'Huỷ'}
                onClick={onCancel}
              />
              <Button
                style={{
                  fontWeight: 800,
                  borderRadius: '3px',
                }}
                type="primary"
                children={'Cập nhật'}
                onClick={() => {
                  // reactotron.logImportant!(infoStaffUpdate);
                }}
              />
            </Row>
          </div>
        }
      />
    </div>
  );
}

export const FormItem = ({ label, name }: { label: string; name: string }) => (
  <Form.Item
    label={label}
    name={name}
    rules={[
      {
        required: true,
        message: `Vui lòng nhập ${label.toLowerCase()}`,
      },
      {
        whitespace: true,
        message: 'Không được nhập khoảng trắng!',
      },
      {
        max: 55,
        message: 'Vui lòng không nhập quá 55 ký tự!',
      },
    ]}
  >
    <Input placeholder={`Nhập ${label.toLowerCase()}`} />
  </Form.Item>
);
