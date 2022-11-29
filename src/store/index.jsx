import { createGlobalState } from "react-hooks-global-state";

const { setGlobalState, useGlobalState, getGlobalState } = createGlobalState({
  users: [
    {
      id: 1,
      wallet: "0xd7v8d97v8d97v8d97v8df7v8d9",
      ticketNum:"x1",
      time:"3:29pm",
      matches:"1",
      prices:"+ $0.584",
    },
    {
      id: 2,
      wallet: "0xd7v8d97v8d97v8d97v8d95ujp9",
      ticketNum:"x2",
      time:"2:25pm",
      matches:"3",
      prices:"+ $2",
    },
    {
      id: 3,
      wallet: "0xd7v8d97v8d97v8d97v8df7ek9f",
      ticketNum:"x1",
      time:"1:05am",
      matches:"2",
      prices:"+ $1",

    },
    {
      id: 4,
      wallet: "0xd7v8d97v8d97v8d97v8df7ef9f",
      ticketNum:"x2",
      time:"12:0am",
      matches:"4",
      prices:"+ $5",
    },
    {
      id: 5,
      wallet: "0xd7v8d97v8d97v8d97v8df7ef9f",
      ticketNum:"x1",
      time:"6:0pm",
      matches:"5",
      prices:"+ $0.035",
    },
  ],
});

const truncate = (text, startChars, endChars, maxLength) => {
  if (text.length > maxLength) {
    let start = text.substring(0, startChars);
    let end = text.substring(text.length - endChars, text.length);
    while (start.length + end.length < maxLength) {
      start = start + ".";
    }
    return start + end;
  }
  return text;
};

export { setGlobalState, useGlobalState, getGlobalState, truncate };
