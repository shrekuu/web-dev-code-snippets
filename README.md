# Web Dev Code Snippets

There are many ways to do one thing. I need the most proper way of doing it.

## Example
  
```typescript
const utils {
  getUrlParam(key: string): string | null {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(key);
  }
}

export default utils;
```
