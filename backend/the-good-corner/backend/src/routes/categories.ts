import { Router } from "express";
import { Category } from "../entities/Category";

const categoriesRouter = Router();

categoriesRouter.get("/", async (req, res) => {
  try {
    const categories = await Category.find();
    if (!categories.length) return res.status(404).send("No Categories found");
    return res.json(categories);
  } catch (err) {
    return res.status(500).send(err);
  }
});
export default categoriesRouter;
