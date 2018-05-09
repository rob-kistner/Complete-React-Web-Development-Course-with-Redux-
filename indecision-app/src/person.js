export const isAdult = age => parseInt(age) >= 18 ? true : false;
export const canDrink = age => parseInt(age) >= 21 ? true : false;
export default age => parseInt(age) >= 65 ? true : false;