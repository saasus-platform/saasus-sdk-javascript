export class Masker {
  private sensitiveKeys = [
    'api_key', 'apikey', 'api-key',
    'secret', 'secret_key', 'secretkey', 'secret-key',
    'password', 'passwd', 'pwd',
    'token', 'access_token', 'refresh_token',
    'authorization', 'auth',
    'stripe_key', 'stripe_secret',
    'saasus_api_key', 'saasus_secret_key'
  ];

  mask(data: any): any {
    if (data === null || data === undefined) return data;
    if (typeof data === 'string') return this.maskString(data);
    if (typeof data !== 'object') return data;
    if (Array.isArray(data)) return data.map(item => this.mask(item));

    const masked: any = {};
    for (const [key, value] of Object.entries(data)) {
      masked[key] = this.isSensitiveKey(key) ? this.maskValue(value) : this.mask(value);
    }
    return masked;
  }

  private isSensitiveKey(key: string): boolean {
    const normalized = key.toLowerCase().replace(/[_-]/g, '');
    return this.sensitiveKeys.some(sk => normalized.includes(sk.replace(/[_-]/g, '')));
  }

  private maskValue(value: any): string {
    if (typeof value !== 'string') return '***MASKED***';
    if (value.length <= 8) return '***';
    return `${value.substring(0, 4)}...${value.substring(value.length - 4)}`;
  }

  private maskString(str: string): string {
    // Mask JWT tokens
    if (/^eyJ[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/.test(str)) {
      return this.maskValue(str);
    }
    // Mask API keys (long alphanumeric strings)
    if (/^[A-Za-z0-9]{32,}$/.test(str)) {
      return this.maskValue(str);
    }
    return str;
  }
}
