module.exports = {
  "*.{js,jsx,ts,tsx}": ["eslint --fix", "eslint"],
  "**/*.ts?(x)": () => "pnpm run typecheck",
  "*.{json,yaml}": ["prettier --write"],
};
