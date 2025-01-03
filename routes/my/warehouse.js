const express = require('express');
const router = express.Router();
const Warehouse = require('../my/warehousem'); // Ensure this path is correct

// Create a new warehouse
router.post('/', async (req, res) => {
    try {
        const warehouse = new Warehouse(req.body);
        await warehouse.save();
        res.status(201).json(warehouse);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Get all warehouses
router.get('/', async (req, res) => {
    try {
        const warehouses = await Warehouse.find();
        res.status(200).json(warehouses);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get a warehouse by ID
router.get('/:id', async (req, res) => {
    try {
        const warehouse = await Warehouse.findById(req.params.id);
        if (!warehouse) {
            return res.status(404).json({ error: 'Warehouse not found' });
        }
        res.status(200).json(warehouse);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update a warehouse by ID
router.put('/:id', async (req, res) => {
    try {
        const warehouse = await Warehouse.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!warehouse) {
            return res.status(404).json({ error: 'Warehouse not found' });
        }
        res.status(200).json(warehouse);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Delete a warehouse by ID
router.delete('/:id', async (req, res) => {
    try {
        const warehouse = await Warehouse.findByIdAndDelete(req.params.id);
        if (!warehouse) {
            return res.status(404).json({ error: 'Warehouse not found' });
        }
        res.status(200).json({ message: 'Warehouse deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
