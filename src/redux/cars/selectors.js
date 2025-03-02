export const selectCarsData = state => state.carsData.cars;
export const selectCarsLoading = state => state.carsData.loading;
export const selectCarsError = state => state.carsData.error;
export const selectSelectedCar = state => state.carsData.selectedCar;
export const selectTotalCars = state => state.carsData.totalCars;
export const selectTotalPages = state => state.carsData.totalPages || 1;
export const selectCurrentPage = state => state.carsData.currentPage;
