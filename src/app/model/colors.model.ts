export interface ColorsResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: Color[];
}

export interface ColorResponse {
  data: Color;
}

export interface Color {
  id: number;
  name: string;
  year: number;
  color: string;
  pantone_value: string;
}
