import { useEffect, useState } from 'react';
import { Stack, Box, Button, Grid, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import MainCard from 'components/MainCard';
import { PlusOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import TeachersActions from './components/TeachersActions';

const Teachers = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:9000/api/teachers');
        if (response.ok) {
          const data = await response.json();
          setRows(data);
        } else {
          throw new Error('Error getting the data');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <Stack spacing={3}>
      <Grid container direction="row-reverse">
        <Button size="small" variant="contained" component={Link} to="/teachers/create">
          <PlusOutlined style={{ marginRight: 5 }} /> Add Teacher
        </Button>
      </Grid>
      <MainCard title="Teachers">
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
                  <TableRow key={row._id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component="th" scope="row">
                      {row.numberDocument}
                    </TableCell>
                    <TableCell align="right">{row.name}</TableCell>
                    <TableCell align="right">{row.lastName}</TableCell>
                    <TableCell align="right">{row.address}</TableCell>
                    <TableCell align="right">{row.age}</TableCell>
                    <TableCell align="right">
                      <TeachersActions teachersId={row._id} />
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
