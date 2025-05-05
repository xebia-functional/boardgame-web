export function snakeToCamel<T>(obj: any): T {
    if (typeof obj !== 'object' || obj === null) return obj;
    if (Array.isArray(obj)) return obj.map(snakeToCamel) as any;

    return Object.fromEntries(
        Object.entries(obj).map(([key, value]) => [
            key.replace(/([-_][a-z])/g, group =>
                group.toUpperCase().replace('-', '').replace('_', '')
            ),
            snakeToCamel(value)
        ])
    ) as T;
}
