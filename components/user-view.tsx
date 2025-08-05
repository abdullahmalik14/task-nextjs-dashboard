// eslint-disable-next-line arrow-body-style

import React, { FC } from 'react';
import { FiEdit } from 'react-icons/fi';
import { GoPlusCircle } from 'react-icons/go';
import { IoCallOutline } from 'react-icons/io5';

import { Search, FilterList } from '@mui/icons-material';
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  Pagination,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from '@mui/material';

const clients = [
  {
    name: 'Анна Козн',
    phone: '+972 52-123-4567',
    status: 'Активный',
    statusColor: '#FFDADA',
    textColor: '#D14343',
  },
  {
    name: 'Давид Леви',
    phone: '+972 54-765-4321',
    status: 'Завершен',
    statusColor: '#D4F7D4',
    textColor: '#439A4A',
  },
  {
    name: 'Рут Гольдштейн',
    phone: '+972 50-987-6543',
    status: 'Планируется',
    statusColor: '#FFE9C7',
    textColor: '#C27D2B',
  },
  {
    name: 'Михаил Авербух',
    phone: '+972 53-456-7890',
    status: 'Запрос',
    statusColor: '#E6E6E6',
    textColor: '#888888',
  },
  {
    name: 'Сара Бергер',
    phone: '+972 58-234-5678',
    status: 'Новый',
    statusColor: '#D7E7FA',
    textColor: '#327DC4',
  },
];
interface StatusChipProps {
  text: string;
  color: string;
  textColor: string;
}

const StatusChip: FC<StatusChipProps> = ({ text, color, textColor }) => (
  <Box
    sx={{
      px: 1.5,
      py: 0.5,
      borderRadius: 2,
      backgroundColor: color,
      color: textColor,
      fontWeight: 500,
      fontSize: '0.875rem',
      textAlign: 'center',
      display: 'inline-block',
    }}
  >
    {text}
  </Box>
);

const UserView = () => (

 
    <Box>
      <Typography variant="h4" fontWeight={700}>
        Клиенты
      </Typography>

      <p style={{ margin: 0, color: '#a0a4a7', fontWeight: '600', marginBottom: '20px' }}>
        Управление клиентской базой
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '10px' }}>
        <TextField
          fullWidth={false}
          placeholder="Поиск клиентов..."
          variant="outlined"
          sx={{
            width: '300px',
            borderRadius: '12px',
            backgroundColor: '#ebf1f1',
            '& .MuiOutlinedInput-root': {
              borderRadius: '25px',
              backgroundColor: '#ebf1f1',
              height: '40px',
              '& fieldset': {
                border: '2px solid #d0d4d7',
              },
              '&:hover fieldset': {
                border: '2px solid #d0d4d7',
              },
              '&.Mui-focused fieldset': {
                border: '2px solid #d0d4d7',
              },
              '& input': {
                padding: '8px 14px',
                height: 'auto',
              },
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
        />

        <Button
          variant="outlined"
          startIcon={<FilterList />}
          sx={{
            whiteSpace: 'nowrap',
            border: '2px solid #d0d4d7',
            borderRadius: '25px',
            height: '40px',
            backgroundColor: '#ebf1f1',
            textTransform: 'none',
            color: '#aab1b3',
            '&:hover': {
              backgroundColor: '#ebf1f1',
              border: '2px solid #d0d4d7',
            },
          }}
        >
          Фильтры
        </Button>
        <Button
          variant="contained"
          sx={{
            background: 'linear-gradient(to right, #5194d3, #447fb6)',
            borderRadius: 999,
            whiteSpace: 'nowrap',
          }}
        >
          <GoPlusCircle color="black" size={20} /> &nbsp; Новый клиент
        </Button>
      </div>

          <div style={{ overflowX: 'auto'}}>
      <TableContainer component={Paper} sx={{ borderRadius: 2, mt: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ backgroundColor: '#bec2c7', fontWeight: 'bold', color: '#222222' }}>
                Имя
              </TableCell>
              <TableCell sx={{ backgroundColor: '#bec2c7', fontWeight: 'bold', color: '#222222' }}>
                Телефон
              </TableCell>
              <TableCell sx={{ backgroundColor: '#bec2c7', fontWeight: 'bold', color: '#222222' }}>
                Статус
              </TableCell>
              <TableCell sx={{ backgroundColor: '#bec2c7', fontWeight: 'bold', color: '#222222' }}>
                Действия
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {clients.map((client, index) => (
              <TableRow key={index}>
                <TableCell sx={{ color: '#7d8895', fontWeight: '600' }}>{client.name}</TableCell>
                <TableCell sx={{ color: '#7d8895', fontWeight: '600' }}>{client.phone}</TableCell>
                <TableCell>
                  <StatusChip
                    text={client.status}
                    color={client.statusColor}
                    textColor={client.textColor}
                  />
                </TableCell>
                <TableCell>
                  <Stack direction="row" spacing={1}>
                    <IconButton>
                      <FiEdit />
                    </IconButton>
                    <IconButton>
                      <IoCallOutline />
                    </IconButton>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </div>

      <Box mt={3} display="flex" justifyContent="center">
        <Pagination count={3} color="primary" />
      </Box>
    </Box>


)

export default UserView;
