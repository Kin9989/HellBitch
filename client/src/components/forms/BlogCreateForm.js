import React from "react";
import { Button, Form, Input } from 'antd';
// import { CKEditor } from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import CKEditor from "@ckeditor/ckeditor5-react";
import DecoupledEditor from "@ckeditor/ckeditor5-build-decoupled-document";


const BlogCreateForm = ({
  handleSubmit,
  handleChange,
  values,
}) => {
  // destructure
  const {
    title,
    content,
    description,
    images,
  } = values;

  const { TextArea } = Input;

  const onFinish = async () => {
    await handleSubmit();
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const handleEditorChange = (event, editor) => {
    const data = editor.getData();
    handleChange('content', data);
  };

  return (
    <Form
      name="basic"
      labelCol={{
        span: 2,
      }}
      wrapperCol={{
        span: 600,
      }}
      style={{
        maxWidth: 9000,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Tiêu đề"
        name="title"
        rules={[
          {
            required: true,
            message: "Vui lòng nhập tiêu đề!",
          },
        ]}
      >
        <Input
          value={title}
          onChange={(e) => handleChange('title', e.target.value)}
        />
      </Form.Item>

      <Form.Item
        label="Mô tả ngắn"
        name="description"
        rules={[
          {
            required: true,
            message: "Vui lòng nhập mô tả ngắn!",
          },
        ]}
      >
        <TextArea
          rows={3}
          value={description}
          onChange={(e) => handleChange('description', e.target.value)}
        />
      </Form.Item>

      <Form.Item
        label="Nội dung"
        name="content"
        rules={[
          {
            required: true,
            message: "Vui lòng nhập nội dung cho blog!",
          },
        ]}
      >
        <CKEditor

          editor={DecoupledEditor}
          onInit={(editor) => {
            console.log("Editor is ready to use!", editor);

            // Insert the toolbar before the editable area.
            editor.ui
              .getEditableElement()
              .parentElement.insertBefore(
                editor.ui.view.toolbar.element,
                editor.ui.getEditableElement()
              );
          }}

          // editor={ClassicEditor}
          data={content}
          onChange={handleEditorChange}
        />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 2, span: 16 }}>
        <Button type="primary" htmlType="submit" className="ant-btn ant-btn-primary ant-btn-lg ant-btn-hover">
          Lưu
        </Button>
      </Form.Item>
    </Form>
  );
};

export default BlogCreateForm;
