export async function fetchCars() {
  const url = "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla";
  const headers = {
    "X-RapidAPI-Key": "4cb36a3beamsh383324decbb709bp1250a9jsneeb445d1f646",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(url, { headers: headers });
  const result = await response.json();

  return result;
}
