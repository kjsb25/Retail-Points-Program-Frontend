import { useMemo, useState } from "react";
import { calcPointAmount } from "../lib/points";

function useMonthlyPoints(transactions) {
  const [isLoading, setIsLoading] = useState(true);
  const [uniqueUsers, setUniqueUsers] = useState([]);
  const [uniqueMonths, setUniqueMonths] = useState([]);

  const userMonthScores = useMemo(() => {
    setIsLoading(true);

    if (transactions === null || transactions === undefined) {
      return {};
    }

    let userMonthScores = transactions.reduce((acc, current) => {
      let currDate = new Date(current.date);
      let currDateString =
        currDate.toLocaleDateString("en-US", { month: "short" }) +
        "-" +
        currDate.toLocaleDateString("en-US", { year: "numeric" });
      if (
        acc &&
        acc.find(
          (obj) => obj.user === current.user && obj.month === currDateString,
        )
      ) {
        //only replace item that matches
        acc = acc.map((x) => {
          return x.user === current.user && x.month === currDateString
            ? createData(
                x.user,
                currDateString,
                x.points + calcPointAmount(current.amount),
              )
            : x;
        });
      } else {
        acc.push(
          createData(
            current.user,
            currDateString,
            calcPointAmount(current.amount),
          ),
        );
      }
      return acc;
    }, []);
    userMonthScores = validateData(userMonthScores);
    setIsLoading(false);

    return userMonthScores;
  }, [transactions]);

  return [userMonthScores, isLoading];
}

//function to fix empty spots in data. Wouldn't scale well.
function validateData(userMonthScores) {
  let uniqueMonths = [];
  let uniqueUsers = [];

  //find all unique months and users
  userMonthScores.forEach((item) => {
    if (!uniqueUsers.includes(item.user)) {
      uniqueUsers.push(item.user);
    }
    if (!uniqueMonths.includes(item.month)) {
      uniqueMonths.push(item.month);
    }

    //iterate and fill any gaps
    uniqueUsers.forEach((user) => {
      uniqueMonths.forEach((month) => {
        if (
          !userMonthScores.find(
            (obj) => obj.user === user && obj.month === month,
          )
        ) {
          userMonthScores.push(createData(user, month, 0));
        }
      });
    });
  });

  return userMonthScores;
}

function createData(user, month, points) {
  return { user, month, points };
}

export default useMonthlyPoints;
