
## this below command to run the confluentin container in your local
# -----------------> Run This Xookeeper image first <------------------- 
docker run -p 2181:2181 zookeeper
#<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>
# confluentin image 
docker run -p 9092:9092 \
-e KAFKA_ZOOKEEPER_CONNECT=<YOUR_PRIVATE_IP>:2181 \
-e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://<YOUR_PRIVATE_IP>:9092 \
-e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 \
confluentinc/cp-kafka


# -------------> For Safe Side Use this (Specific Version) <------------------

docker run -p 9092:9092 \
  -e KAFKA_ZOOKEEPER_CONNECT=10.122.139.67:2181 \
  -e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://10.122.139.67:9092 \
  -e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 \
  -e KAFKA_BROKER_ID=1 \
  confluentinc/cp-kafka:6.2.1