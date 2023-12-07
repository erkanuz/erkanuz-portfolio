import mongoose, { Schema } from "mongoose";

const projectsSchema = new Schema({
      title: String,
      description: String,
      image: String,
      url: String,
      link: String,
      number: Number,
});

const Projects = mongoose.models.Projects || mongoose.model("Projects", projectsSchema);

export default Projects;