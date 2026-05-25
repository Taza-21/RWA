export type BrandMode = 'tether' | 'teeth' | 'tteh';

export interface WaitlistUser {
  email: string;
  name?: string;
  network?: string;
  submittedAt: string;
}

export interface Fund {
  id: string;
  name: string;
  manager: string;
  description: string;
  minInvestment: string;
  tvl: string;
  liquidity: string;
  category: string;
  tagColor: string;
  cardBg: 'dark' | 'cream' | 'blue';
}

export interface PortfolioAsset {
  id: string;
  name: string;
  symbol: string;
  shares: string;
  value: number;
  unrealizedGains: string;
  weight: string;
}
