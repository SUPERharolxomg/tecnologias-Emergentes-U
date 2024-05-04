import { Stack, Box, Button, Grid, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

// project import
import MainCard from 'components/MainCard';

// ant-design/icons
import { PlusOutlined } from '@ant-design/icons';

// react-router-dom
import { Link } from 'react-router-dom';

import TeachersActions from './components/TeachersActions';

const createData = (document, name, lastName, address, age) => {
  return { document, name, lastName, address, age };
};

const rows = [
  createData(3456789012, 'Juan de', 'Dios', 'Avenida Circunvalar # 12-34, Conjunto Residencial Los Rosales, Cali', 39),
  createData(5678901234, 'Catalina', 'Lugo Hernandez', 'Calle 60 # 12-34, Conjunto Residencial El Bosque, Cartagena', 42),
  createData(1234567890, 'Juliana', 'Sánchez Álvarez', 'Calle 23 # 45-67, Barrio El Poblado, Medellín', 31),
  createData(4567890123, 'Luis Hernesto', 'González Valdes', 'Carrera 8 # 23-45, Barrio La Floresta, Barranquilla', 40),
  createData(6789012345, 'Diego Alejandro', 'Pico Marin', 'Carrera 50 # 30-45, Barrio Alameda, Bucaramanga', 36),
  createData(2345678901, 'Luisa', 'Ramírez Pérez', 'Carrera 14 # 9-87, Barrio La Paz, Bogotá', 30)
];

const Teachers = () => {
  return (
    <Stack spacing={3}>
      <Grid container direction="row-reverse">
        <Button size="small" variant="contained" component={Link} to="/teachers/create">
          <PlusOutlined style={{ marginRight: 5 }} /> Add Teacher
        </Button>
      </Grid>
      <MainCard title="Students">
        <Stack spacing={0.75} sx={{ mt: -1.5 }}>
          <Box sx={{ height: 'auto', width: '100%' }}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Document</TableCell>
                  <TableCell align="right">Name</TableCell>
                  <TableCell align="right">Last name</TableCell>
                  <TableCell align="right">Address</TableCell>
                  <TableCell align="right">Age</TableCell>
                  <TableCell align="right">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.document} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component="th" scope="row">
                      {row.document}
                    </TableCell>
                    <TableCell align="right">{row.name}</TableCell>
                    <TableCell align="right">{row.lastName}</TableCell>
                    <TableCell align="right">{row.address}</TableCell>
                    <TableCell align="right">{row.age}</TableCell>
                    <TableCell align="right">
                      <TeachersActions teachersId={row.document} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
        </Stack>
      </MainCard>
    </Stack>
  );
};

export default Teachers;
