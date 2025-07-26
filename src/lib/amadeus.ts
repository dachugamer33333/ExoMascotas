// Amadeus API client
class AmadeusClient {
  private clientId: string;
  private clientSecret: string;
  private baseUrl: string;
  private accessToken: string | null = null;
  private tokenExpiry: number = 0;

  constructor() {
    this.clientId = process.env.AMADEUS_CLIENT_ID || '';
    this.clientSecret = process.env.AMADEUS_CLIENT_SECRET || '';
    this.baseUrl = process.env.AMADEUS_BASE_URL || 'https://test.api.amadeus.com';
  }

  private async getAccessToken(): Promise<string> {
    // Return cached token if still valid
    if (this.accessToken && Date.now() < this.tokenExpiry) {
      return this.accessToken;
    }

    const tokenUrl = `${this.baseUrl}/v1/security/oauth2/token`;
    
    const response = await fetch(tokenUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'client_credentials',
        client_id: this.clientId,
        client_secret: this.clientSecret,
      }),
    });

    if (!response.ok) {
      throw new Error(`Failed to get access token: ${response.statusText}`);
    }

    const data = await response.json();
    this.accessToken = data.access_token;
    // Set expiry to 95% of actual expiry time for safety
    this.tokenExpiry = Date.now() + (data.expires_in * 1000 * 0.95);
    
    return this.accessToken;
  }

  async searchHotels(params: {
    cityCode?: string;
    latitude?: number;
    longitude?: number;
    radius?: number;
    radiusUnit?: 'KM' | 'MILE';
    chainCodes?: string[];
    amenities?: string[];
    ratings?: string[];
    hotelSource?: string;
    checkInDate?: string;
    checkOutDate?: string;
  }) {
    const token = await this.getAccessToken();
    
    const searchParams = new URLSearchParams();
    
    if (params.cityCode) searchParams.append('cityCode', params.cityCode);
    if (params.latitude) searchParams.append('latitude', params.latitude.toString());
    if (params.longitude) searchParams.append('longitude', params.longitude.toString());
    if (params.radius) searchParams.append('radius', params.radius.toString());
    if (params.radiusUnit) searchParams.append('radiusUnit', params.radiusUnit);
    if (params.chainCodes) searchParams.append('chainCodes', params.chainCodes.join(','));
    if (params.amenities) searchParams.append('amenities', params.amenities.join(','));
    if (params.ratings) searchParams.append('ratings', params.ratings.join(','));
    if (params.hotelSource) searchParams.append('hotelSource', params.hotelSource);
    if (params.checkInDate) searchParams.append('checkInDate', params.checkInDate);
    if (params.checkOutDate) searchParams.append('checkOutDate', params.checkOutDate);

    const url = `${this.baseUrl}/v1/reference-data/locations/hotels/by-city?${searchParams}`;

    const response = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/vnd.amadeus+json',
      },
    });

    if (!response.ok) {
      throw new Error(`Hotel search failed: ${response.statusText}`);
    }

    return response.json();
  }

  async getHotelOffers(params: {
    hotelIds: string[];
    adults: number;
    checkInDate: string;
    checkOutDate: string;
    roomQuantity?: number;
    currency?: string;
    lang?: string;
  }) {
    const token = await this.getAccessToken();
    
    const searchParams = new URLSearchParams();
    searchParams.append('hotelIds', params.hotelIds.join(','));
    searchParams.append('adults', params.adults.toString());
    searchParams.append('checkInDate', params.checkInDate);
    searchParams.append('checkOutDate', params.checkOutDate);
    
    if (params.roomQuantity) searchParams.append('roomQuantity', params.roomQuantity.toString());
    if (params.currency) searchParams.append('currency', params.currency);
    if (params.lang) searchParams.append('lang', params.lang);

    const url = `${this.baseUrl}/v3/shopping/hotel-offers?${searchParams}`;

    const response = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/vnd.amadeus+json',
      },
    });

    if (!response.ok) {
      throw new Error(`Hotel offers search failed: ${response.statusText}`);
    }

    return response.json();
  }

  async getCityCode(cityName: string) {
    const token = await this.getAccessToken();
    
    const searchParams = new URLSearchParams();
    searchParams.append('keyword', cityName);
    searchParams.append('subType', 'CITY');

    const url = `${this.baseUrl}/v1/reference-data/locations?${searchParams}`;

    const response = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/vnd.amadeus+json',
      },
    });

    if (!response.ok) {
      throw new Error(`City search failed: ${response.statusText}`);
    }

    return response.json();
  }
}

export const amadeus = new AmadeusClient();