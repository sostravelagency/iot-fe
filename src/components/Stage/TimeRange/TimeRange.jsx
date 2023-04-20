import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { Space, TimePicker } from 'antd';
import Switch from '@mui/material/Switch';
import { Typography } from '@mui/material';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function TimeRange() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(null);
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const onChange = (time) => {
    setValue(time);
  };
  const handleClose = () => {
    setOpen(false);
  };
  
  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Thêm thời gian
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Chọn thời gian"}</DialogTitle>
        <DialogContent>
            <TimePicker.RangePicker value={value} onChange={onChange} />
            <br />
            <br />
            <div className={"c-flex-center"} style={{justifyContent: "flex-start", gap: 10}}>
                <Typography>Tắt</Typography>
                <Switch
                    checked={checked}
                    onChange={handleChange}
                    inputProps={{ 'aria-label': 'controlled' }}

                />
                <Typography>Bật</Typography>
            </div>

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Đóng</Button>
          <Button onClick={handleClose}>Tạo</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}