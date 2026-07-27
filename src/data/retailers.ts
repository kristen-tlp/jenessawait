export interface Retailer {
  key: string;
  label: string;
  url: string | null;
}

// Order matches the Figma layout. `url: null` = no link provided yet.
export const retailers: Record<string, Retailer> = {
  amazon: { key: "amazon", label: "Amazon", url: "https://a.co/d/0aN1ynB3" },
  bn: {
    key: "bn",
    label: "Barnes & Noble",
    url: "https://www.barnesandnoble.com/w/moving-with-god-jenessa-wait/1149136975?ean=9780593602942",
  },
  bam: {
    key: "bam",
    label: "Books-A-Million",
    url: "https://www.booksamillion.com/p/9780593602942?AID=10747236&PID=8373827&SID=--9780593602942",
  },
  bookshop: {
    key: "bookshop",
    label: "Bookshop.org",
    url: "https://bookshop.org/p/books/moving-with-god-nine-keys-to-getting-unstuck-and-stepping-boldly-into-his-promises-for-your-life-jenessa-wait/a3f2da10997d9efc?ean=9780593602942&affiliate=2186",
  },
  christianbook: {
    key: "christianbook",
    label: "Christianbook",
    url: "https://www.christianbook.com/moving-getting-unstuck-stepping-boldly-promises/9780593602942/pd/602949",
  },
  cokesbury: {
    key: "cokesbury",
    label: "Cokesbury",
    url: "https://www.cokesbury.com/9780593602942-Moving-with-God",
  },
  powells: {
    key: "powells",
    label: "Powell's City of Books",
    url: "https://www.powells.com/book/moving-with-god-nine-keys-to-getting-unstuck-and-stepping-boldly-into-his-promises-for-your-life-9780593602942",
  },
  target: {
    key: "target",
    label: "Target",
    url: "https://www.target.com/s?searchTerm=9780593602942",
  },
  walmart: {
    key: "walmart",
    label: "Walmart",
    url: "https://www.walmart.com/search?query=9780593602942",
  },
  // No affiliate URL supplied yet — rendered but not linked.
  parable: { key: "parable", label: "Parable Christian Stores", url: null },
  lifeway: { key: "lifeway", label: "Lifeway", url: null },
  mardel: { key: "mardel", label: "Mardel", url: null },
};

// Press bar (9 retailers, as in the Figma design)
export const pressKeys = [
  "amazon", "bn", "bam", "bookshop", "christianbook",
  "cokesbury", "powells", "target", "walmart",
];

// How It Works step 1 (12 retailers)
export const howItWorksKeys = [
  "amazon", "bn", "bam", "bookshop", "christianbook", "cokesbury",
  "powells", "target", "walmart", "parable", "lifeway", "mardel",
];
