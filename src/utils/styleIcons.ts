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

    'fizzy': '🫧',         // Bubbly feeling, light foam bubbles
    'minty': '🌱',         // Mint leaf
    'strong': '💪',        // Bold and punchy
    'spicy': '🌶️',        // Chili pepper
    'tangy': '🌀',         // Twisting/swirling effect
    'coffee': '☕',        // Espresso martini vibes
    'bitter': '🍊',        // Often associated with orange bitters
    'citrusy': '🍋',       // Shared with bitter — feel free to split if needed
    'sweet': '🍭',         // Candy emoji — feels light and fun
    'tart': '🫐',          // Blueberry for sharp fruitiness (could also use 🍋 if not taken)
    'chocolatey': '🍫',    // Classic chocolate bar

};

export function getStyleIcon(style: string | undefined): string {
    if (!style) return '🍸';
    return styleIcons[style.toLowerCase()] ?? '🍸';
}

