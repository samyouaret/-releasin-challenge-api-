export function env(key: string, value?: string): any {
    if (value) {
        process.env[key] = value;
        return value;
    }
    return process.env[key] as string || undefined;
}