import { useMemo, useState } from "react";
import { calcPointAmount } from "../lib/points";

function useMonthlyUserPoints(transactions) {
    const [isLoading,setIsLoading]=useState(true)

  const userScores = useMemo(() => {
    setIsLoading(true)

    if (transactions === null || transactions === undefined) {
      return {};
    }

    const userScores = transactions.reduce((acc, current) => {
      if (acc && acc.find((obj) => obj.user === current.user)) {
        //only replace item that matches
        acc = acc.map((x) => {
          return x.user === current.user
            ? createData(x.user, x.points + calcPointAmount(current.amount))
            : x;
        });
      } else {
        acc.push(createData(current.user, calcPointAmount(current.amount)));
      }
      return acc;
    }, []);
    setIsLoading(false)

    return userScores;
  }, [transactions]);

  return [userScores, isLoading];
}

function createData(user, points) {
  return { user, points };
}


export default useMonthlyUserPoints;
