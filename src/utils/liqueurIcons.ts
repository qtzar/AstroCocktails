const liqueurIcons: Record<string, string> = {
    'amaretto': '🌰',           // Almondy, nutty
    'baileys': '🥛',            // Cream-based
    'campari': '🟥',            // Bold, bitter, red
    'cointreau': '🍊',          // Orange liqueur
    'coffee liqueur': '☕',     // Kahlúa, Mr Black, etc.
    'creme de cassis': '🫐',    // Blackcurrant
    'blackberry liqueur': '🫐',    // Blackcurrant
    'creme de menthe': '🌱',    // Minty
    'creme de violette': '💜',  // Floral
    'drambuie': '🍯',           // Honeyed scotch liqueur
    'frangelico': '🥜',         // Hazelnut
    'galliano': '🌼',           // Herbal, vanilla-heavy
    'kahlua': '☕',             // Same as coffee liqueur
    'limoncello': '🍋',         // Lemon
    'maraschino': '🍒',         // Cherry
    'midori': '🍈',             // Melon
    'orange liqueur': '🍊',     // Generic orange base
    'sambuca': '🌿',            // Herbal/aniseed
    'elderflower liqueur': '🌸',         // Elderflower
    'triple sec': '🍊',         // Often a generic stand-in for Cointreau
    'vermouth': '🍷',           // Fortified wine base
    'sweet vermouth': '🍷',           // Fortified wine base
    'chocolate liqueur': '🍫',
    'creme de cacao': '🍫',
};


export function getLiqueurIcon(spirit: string | undefined): string {
    if (!spirit) return '🍶';
    return liqueurIcons[spirit.toLowerCase()] ?? '🍶';
}

