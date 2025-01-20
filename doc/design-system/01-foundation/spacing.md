# Spacing System

Our spacing system is built on a consistent 4px (0.25rem) base unit, providing a harmonious vertical rhythm across all components and layouts.

## Base Unit

All spacing values are multiples of our base unit:

```css
/* Base Unit: 4px (0.25rem) */
--space-1: 0.25rem;  /* 4px */
--space-2: 0.5rem;   /* 8px */
--space-3: 0.75rem;  /* 12px */
--space-4: 1rem;     /* 16px */
--space-6: 1.5rem;   /* 24px */
--space-8: 2rem;     /* 32px */
--space-12: 3rem;    /* 48px */
--space-16: 4rem;    /* 64px */
```

## Spacing Scale

### Component Spacing

```vue
<!-- Internal Component Spacing -->
<div class="p-4">
  <h2 class="mb-2">Header</h2>
  <p class="mb-4">Content with standard spacing</p>
  <button class="px-4 py-2">Action</button>
</div>

<!-- Component Gaps -->
<div class="space-y-4">
  <div>First item</div>
  <div>Second item</div>
  <div>Third item</div>
</div>
```

### Layout Spacing

```vue
<!-- Section Spacing -->
<section class="py-12 px-4 md:px-6 lg:px-8">
  <div class="max-w-7xl mx-auto">
    Content with responsive horizontal padding
  </div>
</section>

<!-- Grid Gaps -->
<div class="grid gap-4 md:gap-6 lg:gap-8">
  <div>Grid item</div>
  <div>Grid item</div>
</div>
```

## Responsive Spacing

Our spacing adapts to different screen sizes:

```vue
<!-- Responsive Padding Example -->
<div class="p-4 md:p-6 lg:p-8">
  Content with increasing padding on larger screens
</div>

<!-- Responsive Margin Example -->
<div class="my-8 md:my-12 lg:my-16">
  Content with increasing vertical margins
</div>
```

## Common Patterns

### Card Spacing

```vue
<div class="p-4 space-y-4">
  <h3 class="mb-2">Card Title</h3>
  <p>Card content with consistent spacing</p>
  <div class="pt-4 border-t">
    <button class="px-4 py-2">Action</button>
  </div>
</div>
```

### Form Spacing

```vue
<form class="space-y-6">
  <div class="space-y-2">
    <label>Field Label</label>
    <input class="px-4 py-2" />
    <span class="text-sm">Helper text</span>
  </div>
  <button class="px-6 py-2">Submit</button>
</form>
```

### Navigation Spacing

```vue
<nav class="px-4 py-3">
  <ul class="flex space-x-4">
    <li>Nav Item</li>
    <li>Nav Item</li>
  </ul>
</nav>
```

## Spacing Utilities

### Margin Utilities

```vue
<!-- Margin Examples -->
<div class="m-4">All sides</div>
<div class="mx-4">Horizontal</div>
<div class="my-4">Vertical</div>
<div class="mt-4">Top</div>
<div class="mb-4">Bottom</div>
<div class="ml-4">Left</div>
<div class="mr-4">Right</div>
```

### Padding Utilities

```vue
<!-- Padding Examples -->
<div class="p-4">All sides</div>
<div class="px-4">Horizontal</div>
<div class="py-4">Vertical</div>
<div class="pt-4">Top</div>
<div class="pb-4">Bottom</div>
<div class="pl-4">Left</div>
<div class="pr-4">Right</div>
```

### Gap Utilities

```vue
<!-- Flex Gap -->
<div class="flex gap-4">
  <div>Item</div>
  <div>Item</div>
</div>

<!-- Grid Gap -->
<div class="grid gap-x-4 gap-y-6">
  <div>Item</div>
  <div>Item</div>
</div>
```

## Best Practices

1. **Consistency**
   - Use the spacing scale consistently
   - Avoid custom values outside the scale
   - Maintain vertical rhythm with consistent spacing

2. **Responsive Design**
   - Use responsive spacing utilities
   - Increase spacing proportionally on larger screens
   - Consider content density at different breakpoints

3. **Component Spacing**
   - Use consistent internal padding
   - Maintain consistent gaps between elements
   - Consider component hierarchy in spacing

4. **Layout Spacing**
   - Use larger spacing values for major sections
   - Maintain consistent content width
   - Use appropriate padding for different screen sizes

## Common Spacing Combinations

### Content Sections

```vue
<section class="py-12 md:py-16 lg:py-20">
  <div class="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
    <h2 class="mb-6 md:mb-8">Section Title</h2>
    <div class="space-y-4 md:space-y-6">
      Content blocks
    </div>
  </div>
</section>
```

### Interactive Elements

```vue
<button class="px-4 py-2 space-x-2">
  <span>Icon</span>
  <span>Label</span>
</button>
```

### List Patterns

```vue
<ul class="space-y-2">
  <li class="p-4">List item with internal padding</li>
  <li class="p-4">List item with internal padding</li>
</ul>
