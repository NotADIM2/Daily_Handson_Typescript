# TypeScript Daily ⚡

A little TypeScript every day.

This repository documents my journey of learning TypeScript through small daily coding exercises, experiments and practical examples.

## 🎯 Goal

- Practice TypeScript for at least 5 minutes daily.
- Understand concepts instead of memorising syntax.
- Build a strong foundation for React and frontend development.
- Maintain consistency through daily commits.

## 📚 Topics

- Variables and Data Types
- Functions and Arrow Functions
- Arrays and Objects
- Interfaces and Type Aliases
- Union and Intersection Types
- Generics
- DOM Manipulation
- Practical Exercises

## 🗂️ Programs

| File | Program | Concept |
|---|---|---|
| [pgm1.ts](src/pgm1.ts) | Student profile | Variables and data types |
| [pgm2.ts](src/pgm2.ts) | Simple calculator | Arithmetic operators |
| [pgm3.ts](src/pgm3.ts) | Even or odd | `if` / `else` |
| [pgm4.ts](src/pgm4.ts) | Compare two numbers | `if` / `else if` / `else` |

## 📁 Structure

Each day contains a small ".ts" file covering a concept or coding exercise.

```
typescript-daily/
├── src/            ← my TypeScript programs (pgm1.ts, pgm2.ts, ...)  — tracked by Git
├── dist/           ← compiled JavaScript (pgm1.js, pgm2.js, ...)    — generated, ignored by Git
├── package.json    ← npm scripts and dependencies
├── tsconfig.json   ← compiler settings: src/ → dist/
└── README.md
```

## 🛠️ Setup (once, after cloning)

Requires [Node.js](https://nodejs.org/) (v24 or newer).

```powershell
git clone https://github.com/NotADIM2/Daily_Handson_Typescript.git
cd Daily_Handson_Typescript
npm install
```

## 🔁 Daily Workflow

```powershell
# 1. Create the next program, e.g. src/pgm5.ts, and write the code

# 2. Compile everything in src/ into dist/
npm run build

# 3. Run the compiled program (same name, .js instead of .ts)
node dist/pgm5.js

# 4. Check only the new program shows up
git status

# 5. Commit and push it
git add src/pgm5.ts
git commit -m "Add pgm5 - <topic>"
git push
```

## ⌨️ Commands

| Command | What it does |
|---|---|
| `npm run build` | Compile all of `src/` into `dist/` |
| `npm run watch` | Recompile automatically on every save (leave it running in a second terminal) |
| `npm run clean` | Delete the `dist/` folder |
| `npm run rebuild` | `clean` + `build` — use after renaming or deleting a program |
| `node dist/pgmN.js` | Run program N |

## 🩺 Troubleshooting

| Problem | Fix |
|---|---|
| `Cannot find module ...dist/pgmN.js` | Check the `npm run build` output. If any file has a type error, no `.js` files are written — fix the errors and build again. Also check the name matches the `.ts` file exactly. |
| `error TS5112: tsconfig.json is present but will not be loaded...` | You ran `tsc` on a single file (e.g. `npx tsc src/pgm5.ts`). Don't add `--ignoreConfig` — that writes `.js` files into `src/`. Always use `npm run build`. |
| An old program still appears in `dist/` | Run `npm run rebuild`. |
| `git push` is rejected | GitHub has changes you don't have (e.g. an edit made on the website). Run `git pull`, then `git push`. |
| `EPERM` / "file is locked" errors | OneDrive may be syncing the folder — pause OneDrive and try again. |

## 🚀 Progress

Learning in public, one commit at a time.

Current focus: TypeScript → React → Frontend Engineering.
