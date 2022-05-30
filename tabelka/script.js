const data = [
  {
    date: "25 April 2014",
    city: "Bogota",
    country: "Colombia",
    venue: "Estadio El Campín",
    openingAct: "El Freaky",
    attendance: "40,935 / 40,935",
  },
  {
    date: "25 April 2014",
    city: "Bogota",
    country: "Colombia",
    venue: "Estadio El Campín",
    openingAct: "El Freaky",
    attendance: "40,935 / 40,935",
  },
  {
    date: "25 April 2014",
    city: "Bogota",
    country: "Colombia",
    venue: "Estadio El Campín",
    openingAct: "El Freaky",
    attendance: "40,935 / 40,935",
  },
  {
    date: "25 April 2014",
    city: "Bogota",
    country: "Colombia",
    venue: "Estadio El Campín",
    openingAct: "El Freaky",
    attendance: "40,935 / 40,935",
  },
  {
    date: "25 April 2014",
    city: "Bogota",
    country: "Colombia",
    venue: "Estadio El Campín",
    openingAct: "El Freaky",
    attendance: "40,935 / 40,935",
  },
  {
    date: "25 April 2014",
    city: "Bogota",
    country: "Colombia",
    venue: "Estadio El Campín",
    openingAct: "El Freaky",
    attendance: "40,935 / 40,935",
  },
  {
    date: "25 April 2014",
    city: "Bogota",
    country: "Colombia",
    venue: "Estadio El Campín",
    openingAct: "El Freaky",
    attendance: "40,935 / 40,935",
  },
  {
    date: "25 April 2014",
    city: "Bogota",
    country: "Colombia",
    venue: "Estadio El Campín",
    openingAct: "El Freaky",
    attendance: "40,935 / 40,935",
  },
  {
    date: "25 April 2014",
    city: "Bogota",
    country: "Colombia",
    venue: "Estadio El Campín",
    openingAct: "El Freaky",
    attendance: "40,935 / 40,935",
  },
  {
    date: "25 April 2014",
    city: "Bogota",
    country: "Colombia",
    venue: "Estadio El Campín",
    openingAct: "El Freaky",
    attendance: "40,935 / 40,935",
  },
  {
    date: "25 April 2014",
    city: "Bogota",
    country: "Colombia",
    venue: "Estadio El Campín",
    openingAct: "El Freaky",
    attendance: "40,935 / 40,935",
  },
  {
    date: "25 April 2014",
    city: "Bogota",
    country: "Colombia",
    venue: "Estadio El Campín",
    openingAct: "El Freaky",
    attendance: "40,935 / 40,935",
  },
  {
    date: "25 April 2014",
    city: "Bogota",
    country: "Colombia",
    venue: "Estadio El Campín",
    openingAct: "El Freaky",
    attendance: "40,935 / 40,935",
  },
  {
    date: "25 April 2014",
    city: "Bogota",
    country: "Colombia",
    venue: "Estadio El Campín",
    openingAct: "El Freaky",
    attendance: "40,935 / 40,935",
  },
  {
    date: "25 April 2014",
    city: "Bogota",
    country: "Colombia",
    venue: "Estadio El Campín",
    openingAct: "El Freaky",
    attendance: "40,935 / 40,935",
  },
];

function createTableRow(rowData) {
  const { date, city, country, venue, openingAct, attendance } = rowData;
  return ` <tr>
    <th scope="col" ">${date}</th>
    <th scope="col" ">${city}</th>
    <th scope="col" ">${country}</th>
    <th scope="col" ">${venue}</th>
    <th scope="col" ">${openingAct}</th>
    <th scope="col" ">${attendance}</th>
  </tr>`;
}

(() => {
  const table = document.querySelector("table");
  const tableContent = table.innerHTML;

  const tableRows = data.map((row) => createTableRow(row));

  table.innerHTML = tableContent + tableRows.join("");
})();
