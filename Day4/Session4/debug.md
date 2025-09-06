# Session 4 – Debugging: DevTools & VS Code

## Overview
This session focuses on learning how to debug JavaScript using **Chrome DevTools** and **Visual Studio Code**.  
The goal was to set breakpoints, inspect variables, step through code execution, and practice using the watch panel and call stack.  
Later, source maps can be explored when working with bundled or transpiled code (e.g., TypeScript, Webpack).

---

## Tasks Completed
- Opened the sample DOM manipulation project in the browser using **Live Server**.
- Used **Chrome DevTools** to:
  - Set and trigger breakpoints inside `script.js`.
  - Inspect variables in the **Scope** panel.
  - View and navigate the **Call Stack**.
  - Add **Watch** expressions for dynamic values.
  - Use **Conditional Breakpoints** and **Logpoints**.
- Used **VS Code Debugger** with a custom `launch.json` configuration to:
  - Launch Chrome and attach the debugger.
  - Set breakpoints directly in VS Code.
  - Step through code execution using Debug Console, Watch, and Call Stack.
- Practiced enabling **Pause on Exceptions** in DevTools.


---

## Tools Used
- **Google Chrome** (DevTools: Sources, Console, Debugger panels)
- **Visual Studio Code** with:
  - Live Server extension
  - Debugger (pwa-chrome)


---

## Deliverables
- 📹 `session4-debug.mp4` – Recorded debugging session  
- 📝 `README.md` – This documentation  
- (Optional) `.vscode/launch.json` – VS Code debug configuration used  

---

## How to Reproduce
1. Clone the repo and open the folder in VS Code.  
2. Install the **Live Server** extension.  
3. Right-click `index.html` → *Open with Live Server*.  
4. Open Chrome DevTools (`F12`) and experiment with breakpoints, call stack, and watch.  
5. To debug with VS Code, add the following `launch.json` inside `.vscode` folder:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Launch Chrome (Live Server)",
      "type": "pwa-chrome",
      "request": "launch",
      "url": "http://127.0.0.1:5500/index.html",
      "webRoot": "${workspaceFolder}"
    }
  ]
}
