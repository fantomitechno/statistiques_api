// to do
const logs = async (res: Response) => {
  console.log(res.status);
  console.log(await res.json());
};

const main = async () => {
  await fetch("http://localhost:3000").then(logs);

  await fetch("http://localhost:3000/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: "test" }),
  }).then(logs);

  await fetch("http://localhost:3000/stats/test").then(logs);

  await fetch("http://localhost:3000/incremente/test/1", {
    method: "POST",
  }).then(logs);

  await fetch("http://localhost:3000/stats/test?choice_id=1").then(logs);
};

main();
