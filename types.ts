export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  isBonus?: boolean;
}

export interface SalesPitchResponse {
  pitch: string;
  talkingPoints: string[];
}