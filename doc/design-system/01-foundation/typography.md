# Typography System

Our typography system is built for readability and consistency across all screen sizes, using TailwindCSS for responsive scaling.

## Font Family

We use the Inter font family as our system default for its excellent readability and modern appearance.

```css
/* Font Family Configuration */
--font-sans: 'Inter', system-ui, -apple-system, sans-serif;
```

## Type Scale

Our type scale is designed to be responsive and maintain proper visual hierarchy.

### Headings

```vue
<!-- H1 - Main Page Titles -->
<h1 class="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
  Page Title
</h1>

<!-- H2 - Section Headers -->
<h2 class="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-normal">
  Section Header
</h2>

<!-- H3 - Subsection Headers -->
<h3 class="text-2xl md:text-3xl lg:text-4xl font-medium tracking-normal">
  Subsection Header
</h3>
```

### Body Text

```vue
<!-- Large Body - Featured Content -->
<p class="text-lg md:text-xl leading-relaxed">
  Featured content uses larger text for emphasis and improved readability.
</p>

<!-- Regular Body - Main Content -->
<p class="text-base leading-relaxed">
  Main content uses the base size for optimal reading experience.
</p>

<!-- Small Text - Supporting Content -->
<p class="text-sm leading-normal">
  Supporting content and metadata use smaller text.
</p>
```

## Line Heights

We use consistent line heights to maintain vertical rhythm:

```css
/* Line Height Scale */
--leading-none: 1;      /* Headlines */
--leading-tight: 1.25;  /* Short text */
--leading-normal: 1.5;  /* Body text */
--leading-relaxed: 1.625; /* Long-form content */
--leading-loose: 2;     /* Spacious content */
```

## Font Weights

```vue
<!-- Font Weight Examples -->
<p class="font-light">Light: 300</p>
<p class="font-normal">Regular: 400</p>
<p class="font-medium">Medium: 500</p>
<p class="font-semibold">Semibold: 600</p>
<p class="font-bold">Bold: 700</p>
```

## Responsive Behavior

Our typography automatically adjusts based on screen size:

```vue
<!-- Responsive Text Example -->
<p class="text-sm md:text-base lg:text-lg xl:text-xl">
  This text scales up as the viewport size increases
</p>
```

## Dark Mode Typography

Text colors automatically adjust for dark mode:

```vue
<!-- Dark Mode Aware Typography -->
<p class="text-neutral-900 dark:text-neutral-100">
  This text maintains readability in both light and dark modes
</p>

<p class="text-neutral-600 dark:text-neutral-300">
  Secondary text with appropriate contrast
</p>
```

## Best Practices

1. **Hierarchy**
   - Use appropriate heading levels (h1-h6)
   - Maintain consistent sizing patterns
   - Use weight and size to establish hierarchy

2. **Readability**
   - Keep line lengths between 45-75 characters
   - Use appropriate line height for content length
   - Ensure sufficient contrast ratios

3. **Responsive Design**
   - Test text at all breakpoints
   - Adjust line height for readability
   - Consider mobile-first typography

4. **Accessibility**
   - Use semantic HTML elements
   - Maintain minimum font sizes (14px)
   - Ensure sufficient color contrast
   - Consider dyslexic-friendly line heights

## Common Patterns

### Article Typography

```vue
<article class="prose dark:prose-invert lg:prose-xl">
  <h1>Article Title</h1>
  <p>Lead paragraph with engaging content...</p>
  <h2>Section Title</h2>
  <p>Regular content with good readability...</p>
</article>
```

### Form Typography

```vue
<form>
  <label class="text-sm font-medium text-neutral-700 dark:text-neutral-200">
    Field Label
  </label>
  <input class="text-base" />
  <span class="text-xs text-neutral-500 dark:text-neutral-400">
    Helper text
  </span>
</form>
```

### Navigation Typography

```vue
<nav>
  <a class="text-base font-medium hover:text-primary-500">
    Navigation Link
  </a>
  <span class="text-sm text-neutral-500">
    Secondary Nav
  </span>
</nav>
