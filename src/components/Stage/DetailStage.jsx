import { Divider } from '@mui/material'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import EditDateStage from './EditDateStage';
import DeleteIcon from '@mui/icons-material/Delete';

const DetailStage = (props) => {
  const [stage, setStage]= useState([])

  useEffect(()=> {
    setStage(props?.stage)
  }, [props?.stage])
  const renderDevice= (device)=> {
    if(device=== 1) {
        return "Bơm"
    }
    else if(device=== 2) {
        return "Quạt"
    }
    else if(device=== 3) {
        return "Đèn"
    }
  }
  const renderMode= (mode)=> {
    if(mode=== 1) {
        return "Độ ẩm"
    }
    else if(mode=== 2) {
        return "Nhiệt độ"
    }
    else if(mode=== 3) {
        return "Ánh sáng"
    }
  }
  const renderUnitMode= (mode)=> {
    if(mode=== 1) {
        return "%"
    }
    else if(mode=== 2) {
        return "C"
    }
    else if(mode=== 3) {
        return "Lux"
    }
  }
  const renderDate= (date, index)=> {
    return moment(date, "DD/MM/YYYY").add(parseInt(index), "days").format("DD/MM/YYYY")
  }
  const renderStatus= (status)=> {
    if(status=== true) {
        return "Bật"
    }
    else if(status=== false) {
        return "Tắt"
    }
  }
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
        <div style={{width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center"}}>
            <div>Ngày {renderDate(props?.startDate, props?.index)}</div>
            <div style={{display: "flex", justifyContent: "center" , alignItems: "center"}}>
            <div title={"Xóa"} style={{display: "flex", justifyContent: "center", alignItems: "center", cursor: "pointer"}}>
                  <DeleteIcon />
              </div>
              <div title={"Sửa"} style={{display: "flex", justifyContent: "center", alignItems: "center", cursor: "pointer"}}>
                  <EditIcon onClick={handleClickOpen} />
              </div>
            </div>
        </div>
        <br />
        {
            stage?.map((item, key)=> <div key={key}>
                <div style={{width: "100%", borderBottom: "1px dashed #000"}}>
                </div>
                <div>
                    Thiết bị: <strong>{renderDevice(item?.device)}</strong>
                </div>
                <div>
                    Điều kiện: <strong>{renderMode(item?.mode)}</strong>
                </div>
                <div>Giới hạn: {item?.startPoint} - {item?.endPoint} {renderUnitMode(item?.mode)}</div>
                <div>Thời gian áp dụng: {item?.time?.timeStart} - {item?.time?.timeEnd}</div>
                <div>Trạng thái: {renderStatus(item?.state)}</div>
            </div>)
        }
        <br />
        <Divider  sx={{ bgcolor: "#e7e7e7" }} />
        <br />
        <EditDateStage open={open} handleClose={handleClose} stage={stage} date={renderDate(props?.startDate, props?.index) } />
    </div>
  )
}

export default DetailStage