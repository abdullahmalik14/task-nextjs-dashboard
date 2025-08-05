import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

type Props = {
  title: string;
  description: string;
  icon: React.ReactNode;
  background?: string;
  border?: string;
  extraText?: string;
  titleColor?: string;
  descriptionColor?: string;
  extraTextColor?: string;
};

export function AnalyticsWidgetSummary({
  title,
  description,
  icon,
  background = '#fff',
  border = 'none',
  extraText,
  titleColor = 'text.secondary',
  descriptionColor = 'text.primary',
  extraTextColor = 'text.secondary',
}: Props) {
  return (
    <Card
      sx={{
        p: 3,
        height: '100%',
        borderRadius: 2,
        background,
        border,
        boxShadow: 'none',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: {
            xs: 'column-reverse',
            md: 'row', 
          },
        }}
      >
        <div>
          <Typography variant="h4" sx={{ fontWeight: 'bold', color: descriptionColor,textAlign:{xs :'center', sm:"start"} }}>
            {description}
          </Typography>
          <p style={{ color: titleColor, fontWeight: '600', margin: 0 }}>{title}</p>
        </div>

        <div>{icon}</div>
      </Box>

      {extraText && (
        <Typography variant="caption" sx={{ pt: 1, color: extraTextColor, fontWeight: 600,textAlign:{xs :'center', sm:"start"}  }}>
          {extraText}
        </Typography>
      )}
    </Card>
  );
}
