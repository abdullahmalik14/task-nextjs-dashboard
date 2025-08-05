import { LuUsers } from 'react-icons/lu';
import { LiaFirstOrder } from 'react-icons/lia';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

// import { DashboardContent } from 'src/layouts/dashboard';
import OrdersChart from '../components/OrderChart';
import Container from '@mui/material/Container';

import { AnalyticsWidgetSummary } from '../components/analytics-widget-summary';

// ----------------------------------------------------------------------

export function DashboardOverview() {
  return (
    <Container maxWidth="xl">
      <Typography variant="h4">Дашборд</Typography>
      <p style={{ margin: 0, color: '#a0a4a7', marginBottom: '20px', fontWeight: 600 }}>
        Четверг, 14 Апреля 2025 . Добро пожаловать, Алексей
      </p>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <AnalyticsWidgetSummary
            title="Активных заказов"
            description="42"
            icon={<LiaFirstOrder size={50} color="#0b1839" />}
            background="linear-gradient(to right, #f5e2e7, #ebc9c7)"
            border="2px solid #a75e59"
            titleColor="#a75e59"
            descriptionColor="#a75e59"
            extraTextColor="#a75e59"
          />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <AnalyticsWidgetSummary
            title="Бригад на линии"
            description="15"
            icon={<LuUsers size={50} color="#0b1839" />}
            background="linear-gradient(to right, #e0effd, #c8e1fa)"
            border="2px solid #6492b8"
            titleColor="#6492b8"
            descriptionColor="#6492b8"
            extraTextColor="#6492b8"
          />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <AnalyticsWidgetSummary
            title="Доход за месяц"
            description="₪148,750"
            extraText="+12% к прошлому месяцу"
            icon
            background="linear-gradient(to right, #e4f4ea, #cdf3e2)"
            border="2px solid #7bbb8f"
            titleColor="#7bbb8f"
            descriptionColor="#7bbb8f"
            extraTextColor="#7bbb8f"
          />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <AnalyticsWidgetSummary
            title="Новых клиентов"
            description="189"
            extraText="За последние 30 дней"
            icon
            background="linear-gradient(to right, #fef0d3, #fddcae)"
            border="2px solid #dca652"
            titleColor="#dca652"
            descriptionColor="#dca652"
            extraTextColor="#dca652"
          />
        </Grid>
      </Grid>

      <Grid>
        <OrdersChart />
      </Grid>
    </Container>
  );
}
