const glasswareIcons: Record<string, string> = {
    coupe: '🥂',
    rocks: '🥃',
    highball: '🥤',
    martini: '🍸',
    flute: '🍾',
    tiki: '🍹',
    hurricane: '🌪️',
};

export function getGlasswareIcon(glassware: string | undefined): string {
    if (!glassware) return '🍹';
    return glasswareIcons[glassware.toLowerCase()] ?? '🍹';
}

