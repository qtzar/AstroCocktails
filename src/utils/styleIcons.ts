const styleIcons: Record<string, string> = {
    'spirit forward': '🧊',
    'refreshing': '🌿',
    'tropical': '🍍',
    'dessert': '🍰',
    'aperitif': '🍷',
    'digestif': '🧉',
    'classic': '🎩',
    'seasonal': '🍁',
    'fruity': '🍓',
    'bubbly': '🥂',
    'sour': '🍋',
    'creamy': '🥛',
    'egg white': '🥚',
};

export function getStyleIcon(style: string | undefined): string {
    if (!style) return '🍸';
    return styleIcons[style.toLowerCase()] ?? '🍸';
}

