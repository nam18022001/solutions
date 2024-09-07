// Solution 1
const sol1 = (num = 10) => {
  for (let i = 1; i <= num; i++) {
    console.log(i);
  }
};

// Solution 2
const sol2 = (num = 10) => {
  for (let i = 1; i <= num; i++) {
    if (i % 2 === 0) {
      console.log("a");
    } else {
      console.log(i);
    }
  }
};

//solution 3
const sol3 = (num = 10) => {
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0) {
      console.log("b");
    } else if (i % 2 === 0) {
      console.log("a");
    } else {
      console.log(i);
    }
  }
};

//solution 4
const sol4 = (num = 10) => {
  for (let i = 1; i <= num; i++) {
    if (i % 2 === 0 && i % 3 === 0) {
      console.log("ab");
    } else if (i % 3 === 0) {
      console.log("b");
    } else if (i % 2 === 0) {
      console.log("a");
    } else {
      console.log(i);
    }
  }
};

//solution 5
const sol5 = (time = "15:30") => {
  let [hour, minute] = time.split(":").map(Number);

  let m = hour >= 12 ? "PM" : "AM";

  hour = hour % 12;
  hour = hour === 0 ? 12 : hour;

  minute = minute < 10 ? "0" + minute : minute;

  console.log(hour + ":" + minute + m);
  return hour + ":" + minute + m;
};
