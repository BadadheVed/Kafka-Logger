import { kafka } from "./kafka.js";

export const consumers = async () => {
  const consumer = kafka.consumer({ groupId: "users-1" }); // add the gropuname in which you want to assign the user
  console.log("Connection The Consumer");
  await consumer.connect();
  console.log("Consumer is Connected");
  await consumer.subscribe({ topic: "new-user", fromBeginning: true });
  await consumer.subscribe({ topic: "existing-user", fromBeginning: true });
  await consumer.run({
    eachMessage: async ({ topic, partition, message, heartbeat, pause }) => {
      console.log(
        `New Messaage on ${topic}, And On Partition: ${partition}`,
        message.value.toString()
      );
    },
  });
};

consumers();
