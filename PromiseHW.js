const returnPromise = async () => {
  const date = new Date();
  const randomTime = Math.floor(Math.random() * 15000) + 5000;
  console.log("Commit time", date);
  console.log("Appear time: " + randomTime / 1000 + " Seconds");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(date);
    }, randomTime);
  })
    .then((date) => {
      const endDate = new Date();
      if (date.getMinutes() !== endDate.getMinutes()) {
        throw new Error("Minutes were changed");
      }
      console.log("Returned", endDate);
    })
    .catch((err) => {
      console.log("Error:", err.message);
    });
};

returnPromise();
