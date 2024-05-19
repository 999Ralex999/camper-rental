// src/components/FilterSidebar.js
import React, { useState } from "react";

const FilterSidebar = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    location: "",
    equipment: [],
    type: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFilters((prevFilters) => {
      let newEquipment = [...prevFilters.equipment];
      if (checked) {
        newEquipment.push(name);
      } else {
        newEquipment = newEquipment.filter((eq) => eq !== name);
      }
      return { ...prevFilters, equipment: newEquipment };
    });
  };

  const handleFilterSubmit = (e) => {
    e.preventDefault();
    onFilterChange(filters);
  };

  return (
    <div className="w-1/4 p-4">
      <h2 className="text-2xl font-bold mb-4">Filters</h2>
      <form onSubmit={handleFilterSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Location</label>
          <input
            type="text"
            name="location"
            value={filters.location}
            onChange={handleInputChange}
            className="input"
            placeholder="e.g. Kyiv, Ukraine"
          />
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Vehicle equipment</h3>
          <div className="flex flex-wrap">
            {["airConditioner", "automatic", "kitchen", "TV", "shower"].map(
              (equip) => (
                <label key={equip} className="mr-2">
                  <input
                    type="checkbox"
                    name={equip}
                    checked={filters.equipment.includes(equip)}
                    onChange={handleCheckboxChange}
                    className="mr-1"
                  />
                  {equip}
                </label>
              )
            )}
          </div>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Vehicle type</h3>
          <div>
            {["van", "fullyIntegrated", "alcove"].map((type) => (
              <label key={type} className="block">
                <input
                  type="radio"
                  name="type"
                  value={type}
                  checked={filters.type === type}
                  onChange={handleInputChange}
                  className="mr-1"
                />
                {type}
              </label>
            ))}
          </div>
        </div>
        <button type="submit" className="button">
          Search
        </button>
      </form>
    </div>
  );
};

export default FilterSidebar;
