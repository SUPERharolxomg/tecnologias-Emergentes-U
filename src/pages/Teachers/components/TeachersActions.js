import PropTypes from 'prop-types';
import { Fragment, useState } from 'react';

// mui-material
import { IconButton, Menu, MenuItem } from '@mui/material';

import { MoreOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';

//react-router-dom
import { Link } from 'react-router-dom';

const ITEM_HEIGHT = 48;

const TeachersActions = ({ teachersId }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const deleteTeacher = async () => {
    try {
      const response = await fetch(`http://localhost:9000/api/teachers/${teachersId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const result = await response.json();
      console.log(result);
      // Refrescar la página
      window.location.reload();
    } catch (error) {
      console.error('Error:', error);
    }
    handleClose();
  };

  return (
    <Fragment>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreOutlined />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button'
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch'
          }
        }}
      >
        <MenuItem disableRipple component={Link} to={`/teachers/edit/${teachersId}`}>
          <EditOutlined style={{ marginRight: 10 }} />
          Edit
        </MenuItem>

        <MenuItem onClick={deleteTeacher} disableRipple>
          <DeleteOutlined style={{ marginRight: 10 }} />
          Delete
        </MenuItem>
      </Menu>
    </Fragment>
  );
};

TeachersActions.propTypes = {
  teachersId: PropTypes.string
};

export default TeachersActions;
