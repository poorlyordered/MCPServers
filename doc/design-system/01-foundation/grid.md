# Grid System

Our grid system is built using TailwindCSS's flexible grid utilities, providing a responsive and consistent layout structure across the application.

## Breakpoints

Our grid system responds to these standard breakpoints:

```css
/* Breakpoint Scale */
--sm: 640px;   /* Small devices */
--md: 768px;   /* Medium devices */
--lg: 1024px;  /* Large devices */
--xl: 1280px;  /* Extra large devices */
--2xl: 1536px; /* 2X large devices */
```

## Basic Grid

### Simple Grid Layout

```vue
<!-- Basic 2-Column Grid -->
<div class="grid grid-cols-2 gap-4">
  <div>Column 1</div>
  <div>Column 2</div>
</div>

<!-- Basic 3-Column Grid -->
<div class="grid grid-cols-3 gap-4">
  <div>Column 1</div>
  <div>Column 2</div>
  <div>Column 3</div>
</div>
```

### Responsive Grid

```vue
<!-- Responsive Column Layout -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <div>Responsive column</div>
  <div>Responsive column</div>
  <div>Responsive column</div>
</div>
```

## Grid Features

### Column Spans

```vue
<!-- Variable Column Spans -->
<div class="grid grid-cols-12 gap-4">
  <div class="col-span-12 md:col-span-6 lg:col-span-4">
    Responsive column span
  </div>
  <div class="col-span-12 md:col-span-6 lg:col-span-8">
    Larger column span
  </div>
</div>
```

### Grid Areas

```vue
<!-- Named Grid Areas -->
<div class="grid grid-areas-layout gap-4">
  <header class="grid-in-header">Header</header>
  <nav class="grid-in-nav">Navigation</nav>
  <main class="grid-in-main">Main Content</main>
  <aside class="grid-in-sidebar">Sidebar</aside>
  <footer class="grid-in-footer">Footer</footer>
</div>

<style>
.grid-areas-layout {
  grid-template-areas:
    "header header"
    "nav main"
    "sidebar main"
    "footer footer";
}
</style>
```

## Common Layout Patterns

### Dashboard Grid

```vue
<!-- Dashboard Layout -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
  <!-- Dashboard Cards -->
  <div class="p-4 bg-white rounded shadow">Dashboard Card</div>
  <div class="p-4 bg-white rounded shadow">Dashboard Card</div>
  <div class="p-4 bg-white rounded shadow">Dashboard Card</div>
  <div class="p-4 bg-white rounded shadow">Dashboard Card</div>
</div>
```

### Content Grid

```vue
<!-- Content Layout with Sidebar -->
<div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
  <!-- Main Content -->
  <main class="lg:col-span-8">
    <div class="space-y-6">
      <article>Main content</article>
    </div>
  </main>
  
  <!-- Sidebar -->
  <aside class="lg:col-span-4">
    <div class="space-y-6">
      <div>Sidebar content</div>
    </div>
  </aside>
</div>
```

### Form Grid

```vue
<!-- Form Layout -->
<form class="grid grid-cols-1 md:grid-cols-2 gap-4">
  <div class="space-y-2">
    <label>First Name</label>
    <input type="text" class="w-full" />
  </div>
  <div class="space-y-2">
    <label>Last Name</label>
    <input type="text" class="w-full" />
  </div>
  <div class="md:col-span-2">
    <label>Email</label>
    <input type="email" class="w-full" />
  </div>
</form>
```

## Grid Utilities

### Auto-fit Columns

```vue
<!-- Auto-fit Grid -->
<div class="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4">
  <div>Auto-fit column</div>
  <div>Auto-fit column</div>
  <div>Auto-fit column</div>
</div>
```

### Grid Flow

```vue
<!-- Dense Grid Flow -->
<div class="grid grid-cols-3 grid-flow-dense gap-4">
  <div class="col-span-2">Wide item</div>
  <div>Normal item</div>
  <div>Normal item</div>
  <div class="col-span-2">Wide item</div>
</div>
```

## Best Practices

1. **Responsive Design**
   - Start with mobile layout
   - Add breakpoints progressively
   - Test at all viewport sizes

2. **Grid Structure**
   - Use semantic grid areas
   - Maintain consistent gaps
   - Consider content hierarchy

3. **Performance**
   - Avoid deeply nested grids
   - Use appropriate column spans
   - Consider layout shifts

4. **Accessibility**
   - Maintain logical content order
   - Use semantic HTML elements
   - Consider keyboard navigation

## Common Grid Combinations

### Feature Grid

```vue
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
  <div class="flex flex-col space-y-4">
    <div class="h-12 w-12 rounded-lg bg-primary-100">
      <icon-component />
    </div>
    <h3 class="text-xl font-semibold">Feature Title</h3>
    <p class="text-neutral-600">Feature description</p>
  </div>
  <!-- Repeat for other features -->
</div>
```

### Gallery Grid

```vue
<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
  <div class="aspect-square">
    <img class="object-cover w-full h-full" src="..." alt="..." />
  </div>
  <!-- Repeat for other images -->
</div>
