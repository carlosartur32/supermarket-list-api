const express = require("express");
const ListItem = require("../models/ListItem");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.get("/list-item", async (req, res) => {
  try {
    const { username } = req.headers;
    if (!username) {
      return res.status(401).json({ error: "User is required." });
    }
    const items = await ListItem.find();
    return res.json(items);
  } catch (error) {
    return res.status(500).json({ error });
  }
});

router.post("/list-item", async (req, res) => {
  try {
    const { username } = req.headers;
    if (!username) {
      return res.status(401).json({ error: "User is required." });
    }
    const { name, quantity, checked } = req.body;
    if (!name || name.length < 3) {
      return res.status(400).json({
        error: "Name is mandatory and needs to have more than 3 characters.",
      });
    }
    if (!quantity || typeof quantity !== "number") {
      return res
        .status(400)
        .json({ error: "Quantity is mandatory and needs to be a number." });
    }
    const newItem = await ListItem.create({
      name,
      quantity,
      checked: checked || false,
      username,
    });

    return res.json(newItem);
  } catch (error) {
    return res.status(500).json({ error });
  }
});

router.delete("/list-item/:id", async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(400).json({ error: "Id is mandatory." });
    }
    const itemDeleted = await ListItem.findByIdAndDelete(id);
    return res.json(itemDeleted);
  } catch (error) {
    return res.status(500).json({ error });
  }
});

router.put("/list-item/:id", async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(400).json({ error: "Id is mandatory." });
    }
    const { name, quantity, checked } = req.body;
    if (!name || name.length < 3) {
      return res.status(400).json({
        error: "Name is mandatory and needs to have more than 3 characters.",
      });
    }
    if (!quantity || typeof quantity !== "number") {
      return res
        .status(400)
        .json({ error: "Quantity is mandatory and needs to be a number." });
    }
    const itemUpdated = await ListItem.findByIdAndUpdate(
      id,
      {
        name,
        quantity,
        checked: checked || false,
      },
      {
        new: true,
      }
    );
    return res.json(itemUpdated);
  } catch (error) {
    return res.status(500).json({ error });
  }
});

module.exports = router;
