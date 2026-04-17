/**
 * Dashboard Page
 * Protected page for managing todos
 * Server component that passes session to client component
 */

import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';
import { DashboardClient } from '@/components/DashboardClient';

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    redirect('/login');
  }

  return (
    <DashboardClient
      user={{
        id: session.user.id,
        name: session.user.name,
        email: session.user.email
      }}
    />
  );
}
