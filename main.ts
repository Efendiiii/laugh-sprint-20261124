import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "My printer only jams when I'm already late, so I apologise to it before I press print now — and honestly, it has been behaving.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
