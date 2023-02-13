import {Button, Modal, Popconfirm} from "antd";
import {EmployeeRegisterForm} from "./EmployeeRegisterForm";
import React, {useState} from "react";

export const EmployeeAddPopup = ({children, open, handleOk, handleCancel, confirmLoading}) => {

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
                    // loading={loading}
                    onClick={handleOk}
                >
                    Сохранить данные
                </Button>,
            ]}
        >
            {children}
{/*            <EmployeeRegisterForm
                fields={fields}
                onChange={(newFields) => {
                    setFields(newFields);
                }}
                sendForm={sendForm}
            />*/}
        </Modal>
    )
}
