import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "../../keystatic.config";

// Shared Keystatic reader for the site's page content (singletons live as
// JSON in src/content/). Used by the home-page components so each section
// reads its own slice — edit it all at /keystatic.
const reader = createReader(process.cwd(), keystaticConfig);

export const getHome = () => reader.singletons.home.read();

// Keystatic image fields store the full public path (publicPath + filename),
// e.g. "/assets/images/hero.jpg" — that prefix is required, because Keystatic
// strips it by length (value.slice(publicPath.length)) when parsing. A bare
// filename makes it parse to an empty filename and breaks saving in the CMS.
// The bare-filename branch below is a fallback for any value that slips through.
export const img = (v?: string | null) =>
  !v ? "" : v.startsWith("/") || v.startsWith("http") ? v : `/assets/images/${v}`;
