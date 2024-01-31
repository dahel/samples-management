export const fetchRacks = async () => {
  // todo handle errors
  const response  = await fetch('/api/racks');

  return response.json();
}
