import cable from "actioncable";

let consumer;

function createChannel(...args) {
  if (!consumer) {
    consumer = cable.createChannel();
  }

  return consumer.subsciptions.create(...args);
}
export default createChannel;
