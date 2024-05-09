const express = require("express");
const router = express.Router();
const Item = require('../item'); 
console.log(Item); 

router.get("/", (req, res, next) => {
    try {
        const items = Item.findAll();
        res.json({ items });
    } catch (err) {
        next(err);
    }
});

router.get("/:name", (req, res, next) => {
    try {
        const item = Item.find(req.params.name);
        res.json({ item });
    } catch (err) {
        next(err);
    }
});

router.post("/", (req, res, next) => {
    try {
        const newItem = new Item(req.body.name, req.body.price);
        res.status(201).json({ item: newItem });
    } catch (err) {
        next(err);
    }
});

router.patch("/:name", (req, res, next) => {
    try {
        const updatedItem = Item.update(req.params.name, req.body);
        res.json({ item: updatedItem });
    } catch (err) {
        next(err);
    }
});

router.delete("/:name", (req, res, next) => {
    try {
        Item.remove(req.params.name);
        res.json({ message: "Deleted" });
    } catch (err) {
        next(err);
    }
});

module.exports = router;
