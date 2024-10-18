const {
   getFlightsByOriginAndDestination,
   getHotelsByLocation,
   getSitesByLocation,
} = require('../controllers/iteneraryController');

const axiosInstance = require('../lib/axios.lib');

jest.mock('../lib/axios.lib.js', () => ({
   get: jest.fn(),
}));

describe('itinerary Controller Tests', () => {
   test('should fetch flights by origin and destination', async () => {
      const mockResponse = {
         flights: [
            {
               "id": 9,
               "origin": "varanasi",
               "destination": "mopa",
               "flight_number": "3795",
               "departure_time": "5/22/2025, 7:19:02 AM",
               "arrival_time": "5/22/2025, 1:19:02 PM",
               "price": 146.55
            },
         ],
      };
      axiosInstance.get.mockResolvedValue(mockResponse);
      const req = { query: { origin: 'varanasi', destination: 'mopa' } };
      const res = { json: jest.fn(), status: jest.fn(() => res) };
      await getFlightsByOriginAndDestination(req, res);

      expect(axiosInstance.get).toHaveBeenCalledWith(`/flights/search?origin=varanasi&destination=mopa`);
      expect(res.json).toHaveBeenCalledWith(mockResponse.data);
   });


   test('should fetch hotels by location', async () => {
      const mockResponse = {
         hotels: [
            {
               id: 207,
               name: 'Radisson Hotel Agra',
               location: 'Agra',
               price_per_night: 5716.00,
               available_rooms: 5,
            },
         ],
      };
      axiosInstance.get.mockResolvedValue(mockResponse);
      const req = { query: { location: 'Kanyakumari' } };
      const res = { json: jest.fn(), status: jest.fn(() => res) };
      await getHotelsByLocation(req, res);

      expect(axiosInstance.get).toHaveBeenCalledWith('/hotels/search?location=Kanyakumari');
      expect(res.json).toHaveBeenCalledWith(mockResponse.data);
   });


   test('should fetch sites by location', async () => {
      const mockResponse = {
         sites: [
            {
               id: 102,
               name: 'Taj Mahal',
               location: 'Agra',
               description: 'The Taj Mahal is a white marble mausoleum in Agra, India that was built by Mughal emperor Shah Jahan in memory of his wife, Mumtaz Mahal',
            },
            {
               id: 301,
               name: 'Agra Fort',
               location: 'Agra',
               description: 'A medieval complex and UNESCO World Heritage site that was the main residence of the Mughal emperors until 1638',
            },
         ],
      };
      axiosInstance.get.mockResolvedValue(mockResponse);
      const req = { query: { location: 'Jammu' } };
      const res = { json: jest.fn(), status: jest.fn(() => res) };
      await getSitesByLocation(req, res);

      expect(axiosInstance.get).toHaveBeenCalledWith('/sites/search?location=Jammu');
      expect(res.json).toHaveBeenCalledWith(mockResponse.data);
   });
});