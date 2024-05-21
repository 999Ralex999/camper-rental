// src/utilities/filterList.js
export default function filterList(list, filter) {
  let filteredCampers = list;

  if (filter.location) {
    filteredCampers = filteredCampers.filter((camper) => {
      return camper.location
        .toLowerCase()
        .includes(filter.location.toLowerCase());
    });
  }

  if (filter.ac) {
    filteredCampers = filteredCampers.filter((camper) => {
      return camper.details.airConditioner > 0;
    });
  }

  if (filter.transmission) {
    filteredCampers = filteredCampers.filter((camper) => {
      return camper.transmission.localeCompare(
        filter.transmission.toLowerCase()
      );
    });
  }

  if (filter.kitchen) {
    filteredCampers = filteredCampers.filter((camper) => {
      return camper.details.kitchen > 0;
    });
  }

  if (filter.TV) {
    filteredCampers = filteredCampers.filter((camper) => {
      return camper.details.TV > 0;
    });
  }

  if (filter.shower) {
    filteredCampers = filteredCampers.filter((camper) => {
      return camper.details.shower > 0 || camper.details.toilet;
    });
  }

  if (filter.form) {
    filteredCampers = filteredCampers.filter((camper) => {
      return camper.form.localeCompare(filter.form.toLowerCase());
    });
  }

  return filteredCampers;
}
