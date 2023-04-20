const technologyService = require("../services/technology.service");

const gettAllTechnologies = async (req, res, next) => {
  try {
    const technologies = await technologyService.gettAllTechnologies();
    res.status(200).json({ success: true, technologies });
  } catch (error) {
    next(error);
  }
};

const searchTechnology = async (req, res, next) => {
  try {
    const term = req.params.term;
    const technology = await technologyService.searchTechnology(term);
    res.status(200).json({ success: true, technology });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  gettAllTechnologies,
  searchTechnology,
};
