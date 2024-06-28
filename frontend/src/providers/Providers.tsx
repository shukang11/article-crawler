// provider.tsx
'use client';
import React from 'react';
import { ThemeProvider } from './ThemeProvider';
import { SessionProvider, SessionProviderProps } from 'next-auth/react';

export function Providers({
  session,
  children
}: {
  session?: SessionProviderProps['session'];
  children: React.ReactNode;
}) {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <SessionProvider session={session}>{children}</SessionProvider>
      </ThemeProvider>
    </>
  );
}
