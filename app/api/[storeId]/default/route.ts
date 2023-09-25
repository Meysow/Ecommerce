import { NextResponse } from 'next/server';
import prismadb from '@/lib/prismadb';

export async function GET(req: Request) {
  try {
    // Retrieve the default billboard (e.g., the first one) from the database
    const billboard = await prismadb.billboard.findFirst();

    if (!billboard) {
      console.log('[API_DEFAULT_BILLBOARD_GET] Default billboard not found');
      return new NextResponse('Default billboard not found', { status: 404 });
    }

    console.log('[API_DEFAULT_BILLBOARD_GET] Default billboard retrieved:', billboard);

    return NextResponse.json(billboard);
  } catch (error) {
    console.log('[API_DEFAULT_BILLBOARD_GET] Error:', error);
    return new NextResponse('Internal error', { status: 500 });
  }
}
