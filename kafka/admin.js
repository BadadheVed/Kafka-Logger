import { kafka } from "./kafka.js";
export const admin = async () => {
  const admin = kafka.admin();
  console.log("Admin Is Connecting");
  admin.connect();
  console.log("Admin Is Connected");
  console.log("Creating Topics");
  await admin.createTopics({
    topics: [
      {
        topic: "new-user",
        numPartitions: 2,
      },
      {
        topic: "existing-user",
        numPartitions: 2,
      },
    ],
  });
  console.log("Topics Created");
  console.log("Admin Disconnecting");
  await admin.disconnect();
  console.log("Admin Disconnected");
};
admin();
