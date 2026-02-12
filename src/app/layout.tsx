import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My Page Title',
  description: 'My Page Description',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}