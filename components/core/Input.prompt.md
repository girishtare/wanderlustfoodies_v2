Single-line text field with optional uppercase label, helper / error text and a leading icon. Use in newsletter forms, search and settings.

```jsx
<Input label="Email" type="email" placeholder="you@trailmail.com" helper="We send one story a week." />
<Input label="First name" placeholder="Girish" />
<Input label="Email" error="That address looks off." defaultValue="bad@" />
```

Focus shows a turmeric ring; `error` turns the border brick-red and replaces helper text.
