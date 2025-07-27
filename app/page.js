import { promises as fs } from 'fs';
import Md from 'components/Md';

export default async function Page() {
  const source = await fs.readFile('public/content/home.md', 'utf8');
  return <Md source={source} />;
}
