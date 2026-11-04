https://github.com/Climbzzz/WEBD3100/tree/main/Website

https://www.figma.com/design/i7TSBHrgAyPpIWI55wgjXP/Workshop-03A-%E2%80%93-Colour-Systems?node-id=0-1&t=SghBw7ELktPByLBl-1

## Part 3.
- Orange, dark gray, and light blue
- Light blue
- Important actions and links are highlighted using brighter colours and stronger contrast.
- Yes, the colours are used consistently throughout the website.
- The overall layout could be improved, although the website is easy to navigate.

## Part 4.
- Using multiple shades of the same colour creates visual hierarchy, depth, and balance. Different shades can be assigned to buttons, backgrounds, borders, and text, making the interface more organized and easier to understand without introducing too many unrelated colours.

## Part 5.
- Design tokens are reusable named values that help maintain consistency throughout a website. Instead of manually entering the same colour values repeatedly, a token can be defined once and reused across multiple components.
- Foundation tokens represent actual colour values, such as a specific shade of blue (#004780).
- Semantic tokens describe the purpose of a colour rather than the colour itself, such as `--color-primary`, `--color-background`, or `--color-text`.
- Using design tokens makes updates easier because changing one foundational value can automatically update all connected semantic roles throughout the interface.

# Workshop 03A Checkpoints and Reflection

## 21A. Understand the Five Colour Families

### NSCC Checkpoint

- A primary registration button would use the **Primary/Brand** family because it represents the most important action available to users.

- A page background would use the **Neutral** family because neutral colours improve readability and allow content to remain the focus.

- A successful registration message would use the **Success Feedback** family because users commonly associate green with successful actions and confirmations.

- A small promotional highlight would use the **Accent** family because accent colours are intended to draw attention to important content without dominating the interface.

---

## 21B. Supporting and Accent Colour Selection

### Colour Harmony Exploration

**Secondary Candidate:** #2AC2C1

- Supports the primary colour while maintaining a similar visual feel.
- Can be used for categories, section highlights, and supporting interface elements.

**Accent Candidate:** #136672

- Provides stronger contrast against the primary colour.
- Useful for badges, featured content, and promotional highlights.

### Selected Colours

**Secondary:** #2AC2C1

- Chosen because it complements the primary colour and helps organize content without competing for attention.

**Accent:** #136672

- Chosen because it creates emphasis and visual interest while remaining consistent with the overall palette.

### Reflection

The secondary colour provides structure and support, while the accent colour is reserved for special attention areas. This creates a balanced visual hierarchy and prevents users from becoming overwhelmed by competing colours.

---

## 21C. Neutrals and Feedback Colours

### Reflection

Neutrals are essential because they support the interface without distracting from the content. They improve readability and create clear separation between interface elements.

Feedback colours should never communicate information through colour alone. Text labels and icons should also be included to ensure accessibility for all users.

Success, warning, error, and information colours should maintain sufficient contrast in both light and dark themes.

---

## 21D. Generator Checkpoint

Each colour family was generated and tested individually to ensure consistent ramp behaviour and readability.

RGB Mix provides predictable light and dark shades by blending toward white or black.

OKLCH produces more visually balanced colour ramps because it adjusts perceptual lightness rather than simply changing RGB values.

The final palette combines visual consistency, accessibility, and project branding requirements.

---

## 21E. Complete Colour System Design Rationale

This colour system was designed to create a clean, professional, and modern visual appearance.

The primary colour establishes the overall identity and supports important actions.

The secondary colour helps organize supporting information and content sections.

The accent colour is used sparingly for emphasis and visual highlights.

Neutral colours provide readable backgrounds, text, and borders.

Feedback colours communicate system status and user actions consistently across the interface.

---

## 21F. Implementation Checkpoint

### Reflection

Using semantic tokens makes future maintenance easier because individual colour values only need to be changed once.

When a foundation colour is adjusted, all related components automatically update through their semantic roles.

This improves consistency and reduces the chances of colour mismatches throughout the project.

---

## 21G. Accessibility Validation

### Reflection

Accessibility testing confirmed that visual appearance alone is not enough to determine readability.

Several colour combinations that initially looked acceptable required adjustment after contrast testing.

Testing ensured that body text, button labels, and interface components remained readable in both light and dark themes.

Accessibility verification improved the overall usability of the colour system.

---

# 21H. Project Design Brief

### What does your project do?

The project provides users with an organized and user-friendly website experience while improving navigation, accessibility, and visual hierarchy.

### Who is its audience?

The audience includes both new and returning users who need quick access to information and services.

### What three adjectives describe its visual identity?

- Professional
- Modern
- Accessible

### Does it have an existing brand guideline?

The project follows existing branding where appropriate while improving usability and consistency.

### What is your primary HEX and why?

Primary HEX: #2FA490

This colour was selected because it feels modern, trustworthy, and visually distinctive while maintaining strong readability.

### What should feel prominent, calm, or cautionary?

- Prominent: Primary actions and important navigation elements
- Calm: Backgrounds, content areas, and supporting sections
- Cautionary: Warnings, errors, and important system feedback

---

# 21I. Project Decision Log

| Decision | Selected Value | Alternatives Considered | Why This Choice Works |
|-----------|---------------|-------------------------|----------------------|
| Primary | #2FA490 | #2AC2C1 | Strong brand colour with excellent usability |
| Secondary | #2AC2C1 | #136672 | Supports content organization without competing with primary actions |
| Accent | #136672 | #105761 | Creates visual emphasis while remaining consistent |
| Neutral Direction | #F8FAFC - #0F172A | Pure grayscale options | Readable and versatile for light and dark themes |
| Success | #15803D | Alternate greens | Familiar positive feedback colour |
| Warning | #B45309 | Alternate oranges | Clearly communicates caution |
| Error | #B91C1C | Alternate reds | Universally recognized error indication |
| Information | #0369A1 | Alternate blues | Consistent informational messaging |
| Light Theme | Light backgrounds with dark text | N/A | Maximizes readability |
| Dark Theme | Dark backgrounds with light text | N/A | Supports low-light viewing conditions |

---

# Reflection Questions

## Before this workshop, how did you normally choose colours for a website?

Before this workshop, I usually selected colours based on appearance and personal preference. I focused more on whether colours looked good together than on accessibility or design systems.

---

## What is the difference between choosing a colour and creating a colour system?

Choosing a colour is a single design decision, while creating a colour system establishes a structured set of colours with defined roles and relationships that can be used consistently throughout a project.

---

## What did building a colour ramp teach you?

Building a colour ramp demonstrated how multiple shades of the same colour can create hierarchy, depth, and visual organization while maintaining consistency.

---

## Why is it useful to separate foundation tokens from semantic tokens?

Foundation tokens define actual colour values, while semantic tokens define how those colours are used. This separation improves flexibility and simplifies future updates.

---

## What happened when you switched your CSS between light and dark themes?

The component structure remained unchanged while only the semantic token values changed. This allowed the interface to adapt to different themes efficiently.

---

## What did contrast testing reveal about your colour choices?

Contrast testing identified combinations that appeared visually acceptable but did not provide sufficient readability. Adjustments improved accessibility and usability.

---

## What colour did you select for your project and what was your reasoning?

I selected #2FA490 because it creates a modern and professional appearance while remaining readable and visually distinctive.

---

## Show one HEX-to-decimal conversion.

Hexadecimal 4A:

4 × 16 + 10 = 74

---

## Explain RGB Mix calculations.

RGB Mix creates lighter colours by blending toward white and darker colours by blending toward black while maintaining the original colour family.

---

## Explain one OKLCH target-lightness calculation.

OKLCH adjusts perceptual lightness while attempting to preserve colour appearance, creating more visually balanced ramps than traditional RGB blending.

---

## How do RGB Mix and OKLCH differ?

RGB Mix adjusts colour channels numerically, while OKLCH adjusts colours based on perceived lightness and chroma. OKLCH generally produces smoother visual transitions.

---

## Why can the OKLCH target and final HEX differ after gamut mapping?

The final HEX value may differ because colours must be converted back to the RGB colour space and adjusted to remain displayable on standard screens.

---

## What did you change after checking your project's light and dark themes?

I adjusted several text and background colour combinations to improve readability and ensure adequate contrast in both themes.

---

## How will you preserve and improve this work for future milestones?

I will continue refining the colour system through usability testing, accessibility reviews, and iterative design improvements as the project develops.