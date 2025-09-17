import express from "express";
import { Kafka } from "kafkajs";

export const kafka = new Kafka({
  clientId: "Logger-App",
  brokers: ["localhost:9092"], // here paste the 127.0.0.1 for windows for the for mac/linux keepit as it is
});
