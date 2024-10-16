const validateFlightQueryParams = (query) => {
   const errors = [];
   if (!query.origin || !query.destination) {
      errors.push("Origin and destination are required.");
   }
   return errors;
};

const validateHotelsQueryParams = (query) => {
   const errors = [];
   if (!query.location) {
      errors.push("Location is required for searching hotels.");
   }
   return errors;
};

const validateSitesQueryParams = (query) => {
   const errors = [];
   if (!query.location) {
      errors.push("Location is required for searching sites.");
   }
   return errors;
};

module.exports = { validateFlightQueryParams, validateHotelsQueryParams, validateSitesQueryParams };
