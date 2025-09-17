import { kafka } from "./kafka.js";

export const producers = async (contains) => {
  const producer = kafka.producer();
  console.log("Connecting Producer .. ");
  await producer.connect();
  console.log("Producer Is Conneted");

  contains
    ? await producer.send({
        topic: "existing-user",
        messages: [
          {
            value: JSON.stringify({ name: "Ayush Khairnar existing" }),
          },
        ],
      })
    : await producer.send({
        topic: "new-user",
        messages: [
          {
            value: JSON.stringify({ name: "Ayush Khairnar new" }),
          },
        ],
      });

  console.log("Producer has sent the data");
  console.log("disconnecting Producer");
  await producer.disconnect();
  console.log("Producer Disconnected");
};
