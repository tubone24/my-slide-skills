# my-slide-skills

A [Claude Code](https://docs.anthropic.com/en/docs/claude-code) custom skill for creating rich, animated presentations using [Slidev](https://sli.dev/).

Simply tell Claude Code to "make a presentation" and it will guide you through a structured workflow — from brainstorming to a polished slide deck with pop animations, sound effects, and export-ready output.

![Demo](docs/images/demo.gif)

## What This Skill Does

This skill turns Claude Code into a presentation assistant. It includes:

- **Pop Azusa Template** — A colorful, pop-style theme with 11 layouts, 7 custom components, and 8 transition effects
- **Sound Effects** — Web Audio API-powered slide transition sounds (dramatic, pop, whoosh, chime, boom, sparkle, click) with no external audio files needed
- **Guided Workflow** — A 7-phase process: hearing your goals → proposing structure → setting up the project → generating slides → previewing → reviewing → exporting
- **Multiple Export Formats** — PDF, PPTX, PNG via Slidev's built-in export

## Getting Started

### Prerequisites

- [Claude Code](https://docs.anthropic.com/en/docs/claude-code) installed
- Node.js 18+

### Installation

1. Clone this repository:

```bash
git clone https://github.com/tubone24/my-slide-skills.git
```

2. Add the skill to your Claude Code project by copying `.claude/skills/slidev-presentation/` into your own project's `.claude/skills/` directory, or use this repository directly.

3. That's it. Start Claude Code and ask it to create a presentation.

### Usage

Start Claude Code in the project directory and use natural language:

```
> Make a presentation about our Q4 results
> Create slides for a tech talk on WebAssembly
> Build a 10-minute pitch deck for my startup
```

Claude will ask you three rounds of questions to understand:
1. **Audience & purpose** — Who is it for? How long? What's the goal?
2. **Content & key points** — Core message, must-have data, what to skip
3. **Style preferences** — Color theme, tone, animation level

Then it generates a complete Slidev project with slides, layouts, components, and styles.

### Preview & Export

Once the slides are generated:

```bash
# Preview in browser
npm run dev

# Export to PDF
npm run export:pdf

# Export with click animations expanded
npm run export:pdf-clicks

# Export to PowerPoint
npm run export:pptx

# Export to PNG images
npm run export:png
```

## Template Features

### Layouts (11 types)

| Layout | Purpose | Key Props |
|--------|---------|-----------|
| `cover` | Title slide | `background`, `subtitle` |
| `section` | Section divider | `color`: pink / yellow / cyan / green / candy |
| `statement` | Single message | `color`: dark / green / pink / coral / cyan / warm / light |
| `default` | General content | — |
| `two-cols` | Two columns | Uses `::right::` slot |
| `center` | Centered content | — |
| `quote` | Quotation | `author` |
| `fact` | Key number / stat | — |
| `image-right` | Image on right | `image` |
| `image-left` | Image on left | `image` |
| `end` | Closing slide | — |

### Transitions (8 types)

`pop-fade` · `pop-slide` · `pop-bounce` · `pop-zoom` · `pop-flip` · `pop-swirl` · `fade` · `slide-left`

### Custom Components

| Component | Description |
|-----------|-------------|
| `<PopCard>` | Colorful content card (pink / yellow / mint / green / cyan) |
| `<GradientHeading>` | Gradient text heading (main / warm / cool / candy / sunset / dream) |
| `<ProgressBar>` | Animated progress bar |
| `<StepList>` | Step-by-step list with v-click animation |
| `<PopTimeline>` | Timeline visualization |
| `<FloatingEmoji>` | Decorative floating emoji particles |
| `<CountUp>` | Animated number counter |

### Sound Effects

Slide transition sounds powered by Web Audio API synthesis — no audio files required.

| Preset | Sound | Suggested Use |
|--------|-------|---------------|
| `dramatic` | Bold chord | Title slides, big reveals |
| `pop` | Short bounce | Default transitions |
| `whoosh` | Swoosh | Section changes |
| `chime` | Harmonic sequence | Quotes, good news |
| `boom` | Low impact | Surprising stats |
| `sparkle` | Shimmering tones | Endings, summaries |
| `click` | Subtle click | Light transitions |

Configure globally in frontmatter:

```yaml
soundEffects: true
soundVolume: 0.3
soundDefault: 'pop'
```

Or per-slide:

```yaml
sound: 'dramatic'
soundVolume: 0.5
```

## Demo

The `template-demo/` directory contains a working example showcasing all layouts, components, transitions, and sound effects.

```bash
cd template-demo
npm install
npm run dev
```

## License

MIT
