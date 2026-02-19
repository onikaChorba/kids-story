import './schedule-main.css';
import { Table, ConfigProvider } from 'antd';

interface ScheduleItem {
  key: string;
  day: string;
  time: string;
  activity: string;
  rowSpan?: number;
}

const dataSource: ScheduleItem[] = [
  // Monday
  { key: '1', day: 'Mon', time: '8.30 - 9.00', activity: 'Psychologist observation', rowSpan: 4 },
  { key: '2', day: 'Mon', time: '9.15 - 9.35', activity: 'Music' },
  { key: '3', day: 'Mon', time: '9.40 - 10.00', activity: 'Mathematics' },
  { key: '4', day: 'Mon', time: '10.05 - 10.25', activity: 'Modeling/Applique' },
  // Tuesday
  { key: '5', day: 'Tue', time: '9.00 - 9.20', activity: 'Physical education (Gym)', rowSpan: 3 },
  { key: '6', day: 'Tue', time: '9.25 - 9.45', activity: 'Speech development' },
  { key: '7', day: 'Tue', time: '9.50 - 10.10', activity: 'Frontal game with psychologist' },
  // Wednesday
  { key: '8', day: 'Wed', time: '9.00 - 9.20', activity: 'Reading fiction and folklore', rowSpan: 4 },
  { key: '9', day: 'Wed', time: '9.25 - 9.45', activity: 'English language' },
  { key: '10', day: 'Wed', time: '9.50 - 10.10', activity: 'Music' },
  { key: '11', day: 'Wed', time: '10.15 - 10.35', activity: 'Drawing' },
  // Thursday
  { key: '12', day: 'Thu', time: '9.00 - 9.20', activity: 'Physical education (Gym)', rowSpan: 3 },
  { key: '13', day: 'Thu', time: '9.30 - 9.50', activity: 'World around us' },
  { key: '14', day: 'Thu', time: '9.55 - 10.15', activity: 'Frontal game with speech therapist' },
  // Friday
  { key: '15', day: 'Fri', time: '9.00 - 9.20', activity: 'Drawing', rowSpan: 3 },
  { key: '16', day: 'Fri', time: '9.25 - 9.45', activity: 'Rhythmics' },
  { key: '17', day: 'Fri', time: '11.10 - 11.30', activity: 'Physical education (Outdoor)' },
];

const columns = [
  {
    title: 'Day of the week',
    dataIndex: 'day',
    key: 'day',
    width: '20%',
    onCell: (record: ScheduleItem) => ({
      rowSpan: record.rowSpan || 0,
      className: 'day-column-cell',
    }),
  },
  {
    title: 'Time',
    dataIndex: 'time',
    key: 'time',
    width: '30%',
  },
  {
    title: 'Collaborative Play Activities',
    dataIndex: 'activity',
    key: 'activity',
    width: '50%',
  },
];

const ScheduleMain = () => {
  return (
    <section className="schedule-section">
      <ConfigProvider
        theme={{
          components: {
            Table: {
              headerBg: '#F6B31F',
              headerColor: '#ffffff',
              headerBorderRadius: 15,
            },
          },
        }}
      >
        <Table
          dataSource={dataSource}
          columns={columns}
          pagination={false}
          bordered
          className="custom-schedule-table"
        />
      </ConfigProvider>
    </section>
  );
};

export { ScheduleMain };