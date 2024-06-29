export function getRandomData<T>(data: { [key: string]: T }): T {
    const keys = Object.keys(data);
    const randomIndex = Math.floor(Math.random() * keys.length);
    const randomKey = keys[randomIndex];
    return data[randomKey];
  }