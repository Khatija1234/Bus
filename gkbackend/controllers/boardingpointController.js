const { BoardingPoints } = require('../db/boardingPoints');
const { sequelize } = require('../db/dbConnectionsModel'); 

// Get all boarding points
const getAllBoardingPoints = async (req, res) => {
  try {
    const boardings = await BoardingPoints.findAll();
    res.status(200).json(boardings);
  } catch (error) {
    console.error('Error fetching boarding points:', error);
    res.status(500).json({ error: 'An error occurred while fetching boarding points' });
  }
};

// Create a new boarding point
const createBoardingPoint = async (req, res) => {
    const { city, boardingPoints } = req.body;
  
    if (!city || !boardingPoints) {
      return res.status(400).json({ error: 'City and boarding points are required' });
    }
  
    try {
      const newBoardingPoint = await BoardingPoints.create({ city, boardingPoints });
      res.status(201).json(newBoardingPoint);
    } catch (error) {
      console.error('Error creating boarding point:', error);
      res.status(500).json({ error: 'An error occurred while creating the boarding point' });
    }
  };
// Get boarding points by city
const getBoardingPointsByCity = async (req, res) => {
  const { city } = req.params;

  try {
    const boardings = await BoardingPoints.findAll({ where: { city } });
    
    if (boardings.length === 0) {
      return res.status(404).json({ message: 'No boarding points found for this city' });
    }

    res.status(200).json(boardings);
  } catch (error) {
    console.error('Error fetching boarding points by city:', error);
    res.status(500).json({ error: 'An error occurred while fetching boarding points by city' });
  }
};

module.exports = {
  getAllBoardingPoints,
  createBoardingPoint,
  getBoardingPointsByCity
};
