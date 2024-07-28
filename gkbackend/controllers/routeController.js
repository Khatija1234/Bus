const { Route } = require('../db/route_Model'); // Adjust the path as necessary
const { sequelize } = require('../db/dbConnectionsModel'); // Ensure this path is correct
// Function to fetch routes based on partial input
const getRoutes = async (req, res) => {
    try {
      const { searchTerm } = req.query;
  
      if (!searchTerm) {
        return res.status(400).json({ error: 'searchTerm query parameter is required' });
      }
  
      // Use raw SQL to filter array elements with CTE
      const filteredRoutes = await sequelize.query(
        `WITH unnested_routes AS (
           SELECT unnest("busRoute") as route
           FROM "Routes"
         )
         SELECT DISTINCT route
         FROM unnested_routes
         WHERE route ILIKE :searchTerm`,
        {
          replacements: { searchTerm: `%${searchTerm}%` },
          type: sequelize.QueryTypes.SELECT,
        }
      );
  
      // Map the results to extract the route values
      const routes = filteredRoutes.map(r => r.route);
  
      // Return the filtered routes
      return res.status(200).json(routes);
    } catch (err) {
      console.error('Error fetching routes:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }
  };
  
  module.exports = { getRoutes };
  