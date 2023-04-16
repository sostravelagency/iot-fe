import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./Stage.css";
import NewStage from "./Stage/NewStage";
const Stage = () => {
  
  return (
    <div>
      <div className="form-input">
        <div className={"wrap-stage-parent"}>
          <NewStage />
          <div className={"wrap-stage"}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Giai đoạn 1 (Từ ngày 17/04/2023 - 20/04/2023)</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>Giai đoạn 2 (Từ ngày 20/4/2023 - 30/4/2023)</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stage;
