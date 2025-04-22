const spiritIcons: Record<string, string> = {
    gin: '🍸',
    whiskey: '🥃',
    bourbon: '🥃',
    rum: '🍹',
    sparkling: '🥂',
    'non-alcoholic': '🌿',
};

export function getSpiritIcon(spirit: string | undefined): string {
    if (!spirit) return '🍶';
    return spiritIcons[spirit.toLowerCase()] ?? '🍶';
}

