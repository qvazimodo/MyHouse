import { Button, Modal } from 'antd';
import { useState } from 'react';
export const AddClientModal = ({open, confirmLoading, modalText, showModal, handleOk, handleCancel}) => {
    return (
        <>
            <Button type="primary" onClick={showModal}>
                Open Modal with async logic
            </Button>
            <Modal
                title="Title"
                open={open}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
            >
                <p>{modalText}</p>
            </Modal>
        </>
    );
};
