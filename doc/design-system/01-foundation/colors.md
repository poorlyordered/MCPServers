# Color System

Our color system is built using TailwindCSS with a focus on accessibility, consistency, and dark mode support.

## Primary Colors

The primary color palette defines our brand identity and is used for key interactive elements.

```css
/* Primary Scale */
--primary-50:  #f0f9ff;  /* Lightest */
--primary-500: #0ea5e9;  /* Base */
--primary-900: #0c4a6e;  /* Darkest */
```

### Usage

```vue
<!-- Primary Button -->
<button class="bg-primary-500 hover:bg-primary-600 text-white">
  Primary Action
</button>

<!-- Primary Text -->
<span class="text-primary-900 dark:text-primary-100">
  Important text
</span>
```

## Accent Colors

Used to communicate status and provide visual feedback.

```css
/* Success */
--success-500: #22c55e;

/* Error */
--error-500: #ef4444;

/* Warning */
--warning-500: #f59e0b;
```

### Usage

```vue
<!-- Success Message -->
<div class="bg-success-100 text-success-800 dark:bg-success-800 dark:text-success-100">
  Operation successful
</div>

<!-- Error Message -->
<div class="bg-error-100 text-error-800 dark:bg-error-800 dark:text-error-100">
  Error occurred
</div>
```

## Neutral Colors

Used for text, backgrounds, and subtle UI elements.

```css
/* Neutral Scale */
--neutral-50:  #f8fafc;  /* Background light */
--neutral-200: #e2e8f0;  /* Borders */
--neutral-600: #475569;  /* Body text */
--neutral-900: #0f172a;  /* Headings */
```

### Usage

```vue
<!-- Background -->
<div class="bg-neutral-50 dark:bg-neutral-900">
  <!-- Content -->
</div>

<!-- Text -->
<p class="text-neutral-600 dark:text-neutral-300">
  Body text
</p>
```

## Gradient Backgrounds

Custom gradients for visual interest and depth.

```vue
<!-- Primary Gradient -->
<div class="bg-gradient-to-r from-primary-50 to-primary-100">
  Subtle gradient background
</div>

<!-- Feature Gradient -->
<div class="bg-gradient-to-br from-primary-500 via-purple-500 to-pink-500">
  Feature section background
</div>
```

## Dark Mode

All colors support dark mode variants using the `dark:` prefix.

```vue
<!-- Dark Mode Aware Component -->
<div class="bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white">
  Content adapts to dark mode
</div>
```

## Accessibility

- All color combinations meet WCAG 2.1 AA contrast requirements
- Text colors are chosen to ensure readability
- Interactive elements have distinct hover and focus states
- Dark mode colors are carefully selected to reduce eye strain

## Best Practices

1. **Use Semantic Colors**
   - Use primary colors for main actions
   - Use accent colors for status and feedback
   - Use neutral colors for text and backgrounds

2. **Maintain Consistency**
   - Stick to defined color scales
   - Use consistent colors for similar elements
   - Follow dark mode patterns

3. **Consider Accessibility**
   - Test color contrast
   - Provide sufficient color difference for adjacent elements
   - Don't rely solely on color for conveying information
