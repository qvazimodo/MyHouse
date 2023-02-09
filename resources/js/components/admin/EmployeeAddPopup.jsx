import {Button, Modal, Popconfirm} from "antd";
import {EmployeeRegisterForm} from "./EmployeeRegisterForm";
import React from "react";

export const EmployeeAddPopup = () => {
    return (
        <Modal
            width={620}
            title="Title"
            open={open}
            // onOk={handleOk}
            confirmLoading={confirmLoading}
            onCancel={handleCancel}
            footer={[
                <Popconfirm title="Уверены, что хотите отменить сохранение данных?" onConfirm={handleCancel}>
                    <Button key="back">
                        Отмена
                    </Button>
                </Popconfirm>,

                <Button
                    type="primary"
                    key="submit"
                    loading={loading}
                    onClick={handleOk}
                >
                    Сохранить данные
                </Button>,
            ]}
        >
            <EmployeeRegisterForm
                fields={fields}
                onChange={(newFields) => {
                    setFields(newFields);
                }}
                sendForm={sendForm}
            />
        </Modal>
    )
}
