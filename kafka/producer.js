import { kafka } from "./client.js";

export const init = async (contains) => {
  const producer = kafka.producer();
  console.log("Connecting Producer .. ");
  await producer.connect();
  console.log("Producer Is Conneted");

  contains
    ? await producer.send({
        topic: "existing-user",
        messages: [
          {
            partition: 1,
            key: "check-update",
            value: JSON.stringify({ name: "Ayush Khairnar" }),
          },
        ],
      })
    : await producer.send({
        topic: "new-user",
        messages: [
          {
            value: JSON.stringify({ name: "Ayush Khairnar" }),
          },
        ],
      });

  console.log("Producer has sent the data");
  console.log("disconnecting Producer");
  await producer.disconnect();
  console.log("Producer Disconnected");
};
