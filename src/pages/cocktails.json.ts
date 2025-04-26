import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import fs from 'node:fs';
import path from 'node:path';

export const prerender = true;

export const GET: APIRoute = async () => {
  const cocktails = await getCollection('cocktails');

  const data = cocktails.map((entry) => {
    const filePath = path.resolve('docs', `${entry.id}.md`);
    let createdAt = new Date();
    let updatedAt = new Date();
    try {
      const stats = fs.statSync(filePath);
      createdAt = stats.birthtime ?? new Date();
      updatedAt = stats.mtime ?? new Date();
    } catch (e) {
      console.warn(`Could not find file for ${entry.id}`, e);
    }

    return {
      id: entry.id,
      title: entry.data.title,
      description: entry.data.description,
      spirits: entry.data.spirits ?? [],
      liqueurs: entry.data.liqueurs ?? [],
      styles: entry.data.styles ?? [],
      glassware: entry.data.glassware ?? null,
      method: entry.data.method ?? null,
      image: entry.data.image ?? null,
      rating: entry.data.rating ?? null,
      source: entry.data.source ?? null,
      createdAt: createdAt.toISOString(), // ISO date format
      updatedAt: updatedAt.toISOString(), // ISO date format
    };
  });

  return new Response(JSON.stringify(data, null, 2), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
