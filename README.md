# 🧱 Dev Stack Builder

Dev Stack Builder is a browser tool for developers who are starting a new
project and can't decide what to build it with. It lists popular frontend,
backend, database, language, styling, and DevOps technologies as cards you
can browse, compare at a glance, and collect into a personal "stack" —
without hardcoding a single line of that data into a component.

## 🔧 Technology Used

- **React** + **TypeScript** — component structure and type safety
- **Vite** — dev server and build tool
- **Tailwind CSS v4** — utility-first styling, gradient brand theme
- **React-Toastify** — toast notifications for stack actions
- **JSON** — technology catalog, loaded at runtime instead of hardcoded

## ✨ 3 Features

1. **Build-your-own stack** — browse technology cards by category, add any
   of them to a "Your Stack" panel with one click, and see the running
   count update live.
2. **Duplicate-safe selection** — a technology can only be added once; the
   card flips to a disabled "✓ Added to Stack" state so it can't be added
   twice.
3. **Fully responsive, sticky navigation** — a sticky navbar that collapses
   into a hamburger menu on mobile, plus a gradient brand theme (orange →
   pink → violet) defined in one shared constant so the whole UI can be
   re-themed by changing a single value.

## 🗂️ Project Structure

\`\`\`
src/
  components/   UI building blocks (Navbar, Hero, TechnologyCard, ...)
  data/         technologies.json — the technology catalog
  hooks/        useStack.ts — stack add/remove/clear logic
  types/        technology.ts — shared TypeScript types
  constants.ts  shared brand gradient class
\`\`\`

---

## 📖 React Q&A

**1. What is JSX, and why is it used in React?**
JSX hocche emon ekta syntax jekhane amra JavaScript othoba TypeScript file er bhitorei
HTML er moto dekhte code likhte pari. React e eta use kori karon UI ta kemon
dekhabe r UI kivabe kaj korbe duto jinis ekshathe ek e
jaygay rakha jay, alada alada file e khujte hoy na.

**2. What is the difference between props and state?**
Props hocche emon data ja ekta parent component tar child component k pathay child eta shudhu read korte pare, nijer theke change korte pare na. State
hocche emon data ja component nijei malik, nije rakhe ar nije change kore,
ar eta change hole component abar rerender hoy.

**3. What does the `useState` hook do, and where did you use it in this
project?**
useState ekta function component k ekta value mone rakhte sahajjo kore
jeta render er poreo thake, ar oi value change hole component notun kore
render hoy. Ei project e eta use hoyeche useStack hook e stack er data
rakhar jonno, App.tsx e loaded technology list ar loading state rakhar
jonno, ar Navbar.tsx e mobile menu ar active link track korar jonno.

**4. What does the `useEffect` hook do, and why did you need it to load the
JSON data?**
useEffect component render howar por ekta side effect chalay. jemon data
fetch kora, timer set kora.
App.tsx e eta use kora hoyeche technology data ekbar load korar jonno jokhon
app prothombar mount hoy.

**5. Why does every item in a `.map()` list need a unique `key` prop?**
React key use kore protita item k alada kore chinte, jate eta bujhte pare
konta notun add hoyeche, konta remove hoyeche, ba konta reorder hoyeche. Jno pura list abar notun kore render na kore. Unique key na thakle React item
mix up kore felte pare, jeta bug toiri korbe.

**6. What is conditional rendering? Show one place you used it (example:
the empty stack message).**
Conditional rendering mane hocche kono ekta condition er upor bhitti kore
alada alada UI dekhano. YourStack.tsx e (stack.length === 0) check kora
hoy. true hole ekta empty message ("No technologies selected yet…")
dekhay, na hole selected technology gulor list dekhay.

**7. How do you pass data from a parent component to a child component, and
how does a child send something back to the parent?**
Parent component child k props diye data pathay. Child theke kichu
"ferot" pathate hole, parent ekta function props hishebe pathay (jemon
onAdd), ar child shudhu oi function ta call kore (jemon button click hole) jarfole parent er nijer state update hoy.

---

## 📤 Submission

- GitHub Repository Link: https://github.com/VusanDebnath/A05_dev-stack-builder
- Live Site Link: 