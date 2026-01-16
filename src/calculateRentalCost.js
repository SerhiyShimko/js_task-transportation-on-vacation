/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const costPerDay = 40;
  const totalPrice = days * costPerDay;
  const longTermRentalDays = 7;
  const averageTermRentalDays = 3;
  const discountForLongTermRental = 50;
  const discountForAverageTermRental = 20;

  if (days >= longTermRentalDays) {
    return totalPrice - discountForLongTermRental;
  }

  if (days >= averageTermRentalDays) {
    return totalPrice - discountForAverageTermRental;
  }

  return totalPrice;
}

module.exports = calculateRentalCost;
