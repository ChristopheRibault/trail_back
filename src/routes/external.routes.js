export default [
  {
    method: 'GET',
    path: '/itineraries',
    validators: [],
    handler: controllers.external.getItineraries,
  }
];
