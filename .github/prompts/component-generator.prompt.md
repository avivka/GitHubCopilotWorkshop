# Next.js Component Generator

Generate a new Next.js page component following the project conventions.

## Project Conventions

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with shadcn/ui components
- **Data fetching**: Client-side fetch to `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080'}`
- **State**: React hooks (`useState`, `useEffect`) or React Query
- **Directory**: New pages go in `frontend/src/app/(dashboard)/<page-name>/page.tsx`

## Template

```tsx
"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080";

interface <ResourceType> {
  // Define fields here
}

export default function <PageName>Page() {
  const [data, setData] = useState<<ResourceType>[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`${API_URL}/api/<endpoint>`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((json) => setData(json))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="p-4">Loading...</div>;
  if (error) return <div className="p-4 text-red-500">Error: {error}</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4"><Page Title></h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((item) => (
          <Card key={item.id}>
            <CardHeader>
              <CardTitle>{item.name}</CardTitle>
            </CardHeader>
            <CardContent>
              {/* Render item fields */}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
```

## Instructions

When using this prompt file, specify:
1. The page name and route
2. The API endpoint to fetch from
3. The TypeScript interface fields
4. How each card should display the data
