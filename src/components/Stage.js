import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./Stage.css";
import NewStage from "./Stage/NewStage";
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
              listStage?.map((item, key)=>  <Accordion key={key}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Giai đoạn {parseInt(key+ 1)} (Từ ngày 17/04/2023 - 20/04/2023)</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  
                </Typography>
              </AccordionDetails>
            </Accordion>)
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stage;
