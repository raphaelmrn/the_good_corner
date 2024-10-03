import { Router } from "express";
import { Tag } from "../entities/Tag";

const tagsRouter = Router();

tagsRouter.get("/", async (req, res) => {
  try {
    const tags = await Tag.find();
    if (!tags.length) return res.status(404).send("No Tags found");
    return res.json(tags);
  } catch (err) {
    return res.status(500).send(err);
  }
});

tagsRouter.post("/tags", async (req, res) => {
  const { name } = req.body;
  try {
    const tag = new Tag();
    tag.name = name;
    tag.save();
    return res.status(201).send();
  } catch (err) {
    return res.status(500).send(err);
  }
});

export default tagsRouter;
