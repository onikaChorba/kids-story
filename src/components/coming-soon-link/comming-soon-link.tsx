import { Tooltip, message } from 'antd';

type Props = {
  children: React.ReactNode;
};

const ComingSoonLink = ({ children }: Props) => {
  const onClick = () => {
    message.info('This page is coming soon 🚧');
  };

  return (
    <Tooltip title="Coming soon">
      <span
        onClick={onClick}
        style={{
          cursor: 'not-allowed',
          opacity: 0.5,
          userSelect: 'none',
        }}
      >
        {children}
      </span>
    </Tooltip>
  );
};

export default ComingSoonLink;
