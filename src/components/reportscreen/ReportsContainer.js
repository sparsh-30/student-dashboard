import { View } from 'react-native';
import Report from './Report';
import { useSelector } from 'react-redux';

export default function ReportsContainer() {
  const allReports = useSelector((state) => state.studentDetails.reports);

  return (
    <View>
      {allReports.map((reportObject, index) => {
        return <Report key={index} reportName={reportObject.reportName} />;
      })}
    </View>
  );
}
