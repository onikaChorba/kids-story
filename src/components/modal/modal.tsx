import './index.css';
import { Modal } from "antd";
import type { ReactNode } from "react";

type CustomModalProps = {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
};

const CustomModal = ({ open, onClose, children }: CustomModalProps) => {
  return (
    <Modal
      open={open}
      onCancel={onClose}
      footer={null}
      centered
      className="team-modal-wrapper"
    >
      {children}
    </Modal>
  );
};

export { CustomModal }
