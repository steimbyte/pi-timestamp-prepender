[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/steimerbyte)

> ⭐ If you find this useful, consider [supporting me on Ko-fi](https://ko-fi.com/steimerbyte)!

<img src="https://storage.ko-fi.com/cdn/generated/fhfuc7slzawvi/2026-04-23_rest-162bec27f642a562eb8401eb0ceb3940-onjpojl8.jpg" alt="steimerbyte" style="border-radius: 5%; margin: 16px 0; max-width: 100%;"/>

# pi-timestamp-prepender

A [pi](https://github.com/badlogic/pi-mono) extension that automatically prepends the current date and time to every user prompt.

![pi](https://img.shields.io/badge/pi-coding--agent-v1.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)

## Format

```
YYYY-MM-DD - HH:mm | Your prompt
```

Example:
```
2026-04-21 - 14:30 | Hello, how are you?
```

## Installation

### Automatic

```bash
pi install git:github.com:alephtex/pi-timestamp-prepender
```

### Manual

Copy `index.ts` to your extensions folder:
```bash
cp index.ts ~/.pi/agent/extensions/
```

## Commands

| Command | Description |
|---------|-------------|
| `/timestamp-on` | Enable timestamp prepender |
| `/timestamp-off` | Disable timestamp prepender |
| `/timestamp-toggle` | Toggle timestamp prepender on/off |

## Requirements

- [pi coding agent](https://www.npmjs.com/package/@mariozechner/pi-coding-agent)

## License

MIT
