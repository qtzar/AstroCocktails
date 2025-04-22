const glasswareIcons: Record<string, string> = {
    coupe: '🥂',
    rocks: '🥃',
    highball: '🥤',
    martini: '🍸',
    flute: '🍾',
};

export function getGlasswareIcon(glassware: string | undefined): string {
    if (!glassware) return '🍹';
    return glasswareIcons[glassware.toLowerCase()] ?? '🍹';
}

