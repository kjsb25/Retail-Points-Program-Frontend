import { useState, useEffect } from "react";

function useTransactionData(fakeDataToggle) {
  const [rows, setRows] = useState(null);

  function createData(date, user, amount) {
    return { date, user, amount };
  }

  function createRandomRow() {
    const year = 2023;
    const randomDate = new Date(
      year,
      Math.floor(Math.random() * 12) - 1,
      Math.floor(Math.random() * 31),
    );
    const randomUser = "user" + Math.floor(Math.random() * 10);
    const randomCost = Math.random() * 200;
    setRows([...rows, createData(randomDate, randomUser, randomCost)]);
  }

  useEffect(() => {
    if (fakeDataToggle) {
      const fakeRows = [
        createData(new Date("01-01-2023"), "user1", 25.4),
        createData(new Date("02-02-2023"), "user2", 50.2),
        createData(new Date("01-03-2023"), "user3", 79.14),
        createData(new Date("02-03-2023"), "user4", 8.9),
        createData(new Date("01-01-2023"), "user1", 95.25),
        createData(new Date("01-02-2023"), "user2", 97.09),
        createData(new Date("01-03-2023"), "user3", 68.27),
        createData(new Date("01-03-2023"), "user4", 106.5),
        createData(new Date("03-01-2023"), "user1", 103.35),
        createData(new Date("02-02-2023"), "user2", 46.75),
        createData(new Date("01-03-2023"), "user3", 67.9),
        createData(new Date("02-03-2023"), "user4", 40.83),
        createData(new Date("01-01-2023"), "user1", 51.9),
        createData(new Date("01-02-2023"), "user2", 53.58),
        createData(new Date("03-03-2023"), "user3", 20.77),
        createData(new Date("02-03-2023"), "user4", 63.42),
        createData(new Date("01-01-2023"), "user1", 32.47),
        createData(new Date("03-02-2023"), "user2", 68.95),
        createData(new Date("03-03-2023"), "user3", 21.94),
        createData(new Date("03-03-2023"), "user4", 51.32),
        createData(new Date("03-03-2023"), "user1", 101.32),
      ];

      setRows(fakeRows);
    }
    //async api call would be here in an else
  }, [fakeDataToggle]);

  return [rows, createRandomRow];
}

export default useTransactionData;
