const methodIcons: Record<string, string> = {
    shaken: '🥶',
    stirred: '🧊',
    built: '🪜',
    swizzled: '🌪️',
    blended: '⚡',
};

export function getMethodIcon(method: string | undefined): string {
    if (!method) return '🍹';
    return methodIcons[method.toLowerCase()] ?? '🍹';
}

