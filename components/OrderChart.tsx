
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer
} from 'recharts';

import { Card, Typography, Box } from '@mui/material';

const data = [
  { name: 'Апр', value: 30 },
  { name: 'Май', value: 35 },
  { name: 'Июн', value: 25 },
  { name: 'Июл', value: 45 },
  { name: 'Авг', value: 50 },
  { name: 'Сен', value: 40 },
  { name: 'Окт', value: 45 },
  { name: 'Ноя', value: 50 },
  { name: 'Дек', value: 55 },
  { name: 'Янв', value: 52 },
  { name: 'Фев', value: 60 },
];

export default function OrdersChart() {
  return (
    <Card
      sx={{
        p: 2,
        borderRadius: 2,
        border: '2px solid #e0e0e0',
        boxShadow: 'none',
        marginTop:"20px"
      }}
    >
      <Typography
        variant="subtitle1"
        sx={{
          fontWeight: 700,
          mb: 2,
          fontSize:"20px"
        }}
      >
        Динамика заказов
      </Typography>

      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="0" vertical={false} stroke="#eee" />
          <XAxis dataKey="name" tick={{ fontSize: 12 }} />
          <YAxis hide />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#3498db"
            strokeWidth={2}
            dot={{ r: 4, fill: '#3498db' }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
}
