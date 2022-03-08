import { PropsWithChildren } from 'react';
interface YearContentProps {
    startDate: string;
    endDate?: string;
    currentYear?: boolean;
    fromLabel?: boolean;
}
declare const YearContent: ({ startDate, endDate, currentYear, fromLabel, }: PropsWithChildren<YearContentProps>) => JSX.Element;
export default YearContent;
