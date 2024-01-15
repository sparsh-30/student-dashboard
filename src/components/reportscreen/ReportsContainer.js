import { View } from 'react-native';
import Report from './Report';

export default function ReportsContainer() {
  const allReports = [
    { reportName: 'Mid-terms9324.pdf', reportLink: '' },
    { reportName: 'Unit-test1_9324.pdf', reportLink: '' },
    { reportName: 'Unit-test2_9324.pdf', reportLink: '' },
  ];

  return (
    <View>
      {allReports.map((reportObject, index) => {
        return <Report key={index} reportName={reportObject.reportName} />;
      })}
    </View>
  );
}
