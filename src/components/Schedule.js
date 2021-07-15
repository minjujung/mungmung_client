import React, { useState } from "react";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import { NormalBtnColor } from "../common_css/style";
import styled from "styled-components";

const Schedule = ({ setSchedule }) => {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [show, setShow] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const save = () => {
    setSchedule(date + time);
    setShow(true);
  };
  const handleDateChange = (date, e) => {
    setSelectedDate(date);
    setDate(e);
  };

  const handleChange = (event) => {
    setTime(event.target.value);
  };

  const useStyles = makeStyles({
    root: {
      width: 200,
      fontSize: "13px",
      "& .MuiInputLabel-root.Mui-focused": {
        color: "black",
      },
      "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "black",
      },
    },
  });

  const classes = useStyles();

  return (
    <>
      <label id="date-picker-inline">예약 일정</label>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          disableToolbar
          disablePast
          inputVariant="outlined"
          format="yyyy년 MM월 dd일"
          margin="normal"
          id="date-picker-inline"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            "aria-label": "change date",
          }}
          emptyLabel="날짜 선택"
          style={{ border: "0.5px solid lightgray", borderRadius: "5px" }}
        />
      </MuiPickersUtilsProvider>
      <TimeContainer>
        <TextField
          className={classes.root}
          id="outlined-select-currency"
          select
          label="시간 선택"
          value={time}
          onChange={handleChange}
          variant="outlined"
          size="small"
          style={timeStyles}
        >
          <MenuItem value="오전 10시 ~ 오전 11시">
            오전 9시 ~ 오전 10시
          </MenuItem>
          <MenuItem value="오전 10시 ~ 오전 11시">
            오전 10시 ~ 오전 11시
          </MenuItem>
          <MenuItem value="오전 11시 ~ 오후 12시">
            오전 11시 ~ 오후 12시
          </MenuItem>
          <MenuItem value="오후 12시 ~ 오후 1시">오후 12시 ~ 오후 1시</MenuItem>
          <MenuItem value="오후 1시 ~ 오후 2시">오후 1시 ~ 오후 2시</MenuItem>
          <MenuItem value="오후 2시 ~ 오후 3시">오후 2시 ~ 오후 3시</MenuItem>
          <MenuItem value="오후 3시 ~ 오후 4시">오후 3시 ~ 오후 4시</MenuItem>
          <MenuItem value="오후 4시 ~ 오후 5시">오후 4시 ~ 오후 5시</MenuItem>
          <MenuItem value="오후 5시 ~ 오후 6시">오후 5시 ~ 오후 6시</MenuItem>
        </TextField>
        <SaveBtn onClick={save}>저장</SaveBtn>
      </TimeContainer>
      {show ? <ScheduleInfo>{date + " " + time}</ScheduleInfo> : null}
    </>
  );
};

const timeStyles = {
  width: "70%",
};

const TimeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

const SaveBtn = styled.div`
  ${NormalBtnColor}
`;

const ScheduleInfo = styled.p`
  font-size: 14px;
`;

export default Schedule;
