function superbowlWin(records) {
    const result = records.find(record =>record.result === "W")
      console.log(result);
      if (result) {
          return result.year;
      }
 }
 