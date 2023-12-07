import mongoose, { Schema } from "mongoose";

const messagesSchema = new Schema({
      name: { type: String, required: true },
      email: { type: String, required: true },
      subject: { type: String, required: true },
      text: { type: String, required: true },
});

const Messages = mongoose.models.Messages || mongoose.model("Messages", messagesSchema);

export default Messages;