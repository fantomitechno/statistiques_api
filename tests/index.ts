// to do
const logs = async (res: Response) => {
  console.log(res.status);
  console.log(await res.json());
};

const main = async () => {
  await fetch("http://localhost:3000").then(logs);
};

main();
