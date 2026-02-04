import fs from 'fs/promises';
import path from 'path';
import { PortfolioData } from '@/types/portfolio';

export async function getPortfolioData(): Promise<PortfolioData> {
  const filePath = path.join(process.cwd(), 'data', 'portfolio.json');
  
  const jsonData = await fs.readFile(filePath, 'utf-8');
  
  const data: PortfolioData = JSON.parse(jsonData);
  
  return data;
}