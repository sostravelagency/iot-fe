import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./Stage.css";
import NewStage from "./Stage/NewStage";
import moment from "moment";
import DetailStage from "./Stage/DetailStage";
const Stage = () => {
  const [listStage, setListStage]= React.useState([])
  React.useEffect(()=> {

  }, [])
  return (
    <div>
      <div className="form-input">
        <div className={"wrap-stage-parent"}>
          <NewStage setListStage={setListStage} listStage={listStage} />
          <div className={"wrap-stage"}>
            {
              listStage?.map((item, key)=>  <React.Fragment key={key}>
              <Accordion >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Giai đoạn {parseInt(key+ 1)} (Từ ngày {item?.startDate} - {item?.endDate})</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  {
                    console.log(moment(item?.endDate, "DD/MM/YYYY").diff(moment(item?.startDate, "DD/MM/YYYY"), "days"))
                  }
                  {
                    Array.from(Array(parseInt(1)+  moment(item?.endDate, "DD/MM/YYYY").diff(moment(item?.startDate, "DD/MM/YYYY"), "days")).keys())?.map((item2, key)=> <DetailStage key={key} index={parseInt(key)} {...item} />)
                  }
                </Typography>
              </AccordionDetails>
            </Accordion>
            <br />
              </React.Fragment>)
            }
          </div>
        </div>
      </div>
    </div>
  );
};


export default Stage;
