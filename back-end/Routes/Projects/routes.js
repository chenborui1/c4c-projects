import model from "./model.js";
import jwt from "jsonwebtoken";

export default function (server) {
  server.get("/api/projects/", async (req, res) => {
    const projects = await model.find();
    res.json(projects);
  });


  server.delete("/api/projects/delete", async (req, res) => {
    const secret = process.env.SECRET_KEY;
    const token = req.headers.authorization;

    jwt.verify(token, secret, (err, decoded) => {
      if (err) {
        console.error("Token verification failed:", err.message);
        return;
      }
    });

    try {
      const id = req.body.id;
      await model.findByIdAndDelete(id);
      res.json({ message: "Project deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: "Failed to delete project" });
    }
  });

  server.post("/api/projects/edit", async (req, res) => {
    const secret = process.env.SECRET_KEY;
    const token = req.body.headers.Authorization;
    jwt.verify(token, secret, async (err, decoded) => {
      if (err) {
        console.error("Token verification failed:", err.message);
        return;
      }

      try {
      const projectID = req.body.data.id
      const updatedDetails = req.body.data
      console.log(updatedDetails.title)
      await model.findByIdAndUpdate(projectID, {title: updatedDetails.title, header: updatedDetails.header, 
        description: updatedDetails.description, image_url: updatedDetails.img_url, active: updatedDetails.active})
      res.json({ message: "Project edited successfully" });
      } catch (error) {
        res.status(500).json({ error: "Failed to edit project" });
      }
    });
  })

  server.post("/api/projects/add", async (req, res) => {
    const secret = process.env.SECRET_KEY;
    const token = req.body.headers.Authorization;
    jwt.verify(token, secret, async (err, decoded) => {
      if (err) {
        console.error("Token verification failed:", err.message);
        return;
      }
    });
    const { title, header, description, img_url, active } = req.body.data;
    if (!title || !header || !description || !img_url) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    try {
      const newProject = new model({
        title: title,
        header: header,
        description: description,
        image_url: img_url,
        active: active
      });
      await newProject.save();

      res.json({ message: "Course added successfully"});
    } catch (error) {
      res.status(500).json({ error: "Failed to add course" });
    }
  });
}
