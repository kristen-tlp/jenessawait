import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "../../keystatic.config";

// Shared Keystatic reader for the site's page content (singletons live as
// JSON in src/content/). Used by the home-page components so each section
// reads its own slice — edit it all at /keystatic.
const reader = createReader(process.cwd(), keystaticConfig);

export const getHome = () => reader.singletons.home.read();

// Keystatic image fields store just the filename; normalize to a src path.
export const img = (v?: string | null) =>
  !v ? "" : v.startsWith("/") || v.startsWith("http") ? v : `/assets/images/${v}`;
