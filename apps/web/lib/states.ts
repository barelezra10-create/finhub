export interface StateInfo {
  slug: string;
  name: string;
  abbr: string;
  population: number;
  medianIncome: number;
  topBanks: string[];
  taxNote: string;
}

export const states: StateInfo[] = [
  { slug: "alabama", name: "Alabama", abbr: "AL", population: 5024000, medianIncome: 56929, topBanks: ["Regions Bank", "PNC Bank", "ServisFirst Bank"], taxNote: "Interest taxed as ordinary income at state rate up to 5%" },
  { slug: "alaska", name: "Alaska", abbr: "AK", population: 733000, medianIncome: 80287, topBanks: ["First National Bank Alaska", "Northrim Bank", "Mt. McKinley Bank"], taxNote: "No state income tax — interest is federally taxed only" },
  { slug: "arizona", name: "Arizona", abbr: "AZ", population: 7359000, medianIncome: 65913, topBanks: ["JPMorgan Chase", "Wells Fargo", "Bank of America", "Western Alliance"], taxNote: "Interest taxed at flat 2.5% state rate" },
  { slug: "arkansas", name: "Arkansas", abbr: "AR", population: 3018000, medianIncome: 52123, topBanks: ["Arvest Bank", "Centennial Bank", "Bank OZK"], taxNote: "Interest taxed as ordinary income up to 4.4%" },
  { slug: "california", name: "California", abbr: "CA", population: 39200000, medianIncome: 84097, topBanks: ["Bank of America", "JPMorgan Chase", "Wells Fargo", "First Republic"], taxNote: "Interest taxed as ordinary income up to 13.3% — one of the highest in the U.S." },
  { slug: "colorado", name: "Colorado", abbr: "CO", population: 5811000, medianIncome: 80184, topBanks: ["FirstBank", "Wells Fargo", "U.S. Bank", "Alpine Bank"], taxNote: "Interest taxed at flat 4.4% state rate" },
  { slug: "connecticut", name: "Connecticut", abbr: "CT", population: 3626000, medianIncome: 79855, topBanks: ["Webster Bank", "People's United Bank", "Liberty Bank"], taxNote: "Interest taxed up to 6.99% state rate" },
  { slug: "delaware", name: "Delaware", abbr: "DE", population: 1018000, medianIncome: 72724, topBanks: ["WSFS Bank", "M&T Bank", "TD Bank"], taxNote: "Interest taxed up to 6.6% state rate" },
  { slug: "florida", name: "Florida", abbr: "FL", population: 22245000, medianIncome: 61777, topBanks: ["Bank of America", "Wells Fargo", "Truist", "Regions Bank"], taxNote: "No state income tax — interest is federally taxed only" },
  { slug: "georgia", name: "Georgia", abbr: "GA", population: 10912000, medianIncome: 65030, topBanks: ["Bank of America", "Truist", "SunTrust (now Truist)", "Synovus"], taxNote: "Interest taxed at flat 5.39% state rate" },
  { slug: "hawaii", name: "Hawaii", abbr: "HI", population: 1441000, medianIncome: 88005, topBanks: ["Bank of Hawaii", "First Hawaiian Bank", "Central Pacific Bank"], taxNote: "Interest taxed up to 11% state rate" },
  { slug: "idaho", name: "Idaho", abbr: "ID", population: 1939000, medianIncome: 63377, topBanks: ["Idaho Central Credit Union", "U.S. Bank", "Wells Fargo", "D.L. Evans Bank"], taxNote: "Interest taxed at flat 5.8% state rate" },
  { slug: "illinois", name: "Illinois", abbr: "IL", population: 12550000, medianIncome: 72205, topBanks: ["JPMorgan Chase", "BMO Harris", "Bank of America", "Northern Trust"], taxNote: "Interest taxed at flat 4.95% state rate" },
  { slug: "indiana", name: "Indiana", abbr: "IN", population: 6833000, medianIncome: 61944, topBanks: ["Old National Bank", "First Financial Bank", "Indiana University Credit Union"], taxNote: "Interest taxed at flat 3.05% state rate" },
  { slug: "iowa", name: "Iowa", abbr: "IA", population: 3193000, medianIncome: 65600, topBanks: ["Bankers Trust", "U.S. Bank", "West Bank", "First Citizens Bank"], taxNote: "Interest taxed up to 5.7% state rate (flat 3.8% from 2026)" },
  { slug: "kansas", name: "Kansas", abbr: "KS", population: 2940000, medianIncome: 65880, topBanks: ["Capitol Federal", "Commerce Bank", "Country Club Bank"], taxNote: "Interest taxed up to 5.7% state rate" },
  { slug: "kentucky", name: "Kentucky", abbr: "KY", population: 4506000, medianIncome: 55629, topBanks: ["Republic Bank", "Stock Yards Bank", "Forcht Bank"], taxNote: "Interest taxed at flat 4% state rate" },
  { slug: "louisiana", name: "Louisiana", abbr: "LA", population: 4574000, medianIncome: 53571, topBanks: ["Hancock Whitney", "Capital One", "Iberia Bank (now First Horizon)"], taxNote: "Interest taxed up to 4.25% state rate" },
  { slug: "maine", name: "Maine", abbr: "ME", population: 1395000, medianIncome: 68251, topBanks: ["Bangor Savings Bank", "Camden National Bank", "TD Bank"], taxNote: "Interest taxed up to 7.15% state rate" },
  { slug: "maryland", name: "Maryland", abbr: "MD", population: 6184000, medianIncome: 91431, topBanks: ["Sandy Spring Bank", "M&T Bank", "Truist", "PNC"], taxNote: "Interest taxed up to 5.75% state plus county piggyback up to 3.2%" },
  { slug: "massachusetts", name: "Massachusetts", abbr: "MA", population: 7029000, medianIncome: 96505, topBanks: ["Eastern Bank", "Citizens Bank", "Cambridge Savings", "Rockland Trust"], taxNote: "Interest taxed at flat 5% state rate (9% for income over $1M)" },
  { slug: "michigan", name: "Michigan", abbr: "MI", population: 10037000, medianIncome: 66986, topBanks: ["Comerica", "Huntington Bank", "JPMorgan Chase", "Flagstar"], taxNote: "Interest taxed at flat 4.25% state rate" },
  { slug: "minnesota", name: "Minnesota", abbr: "MN", population: 5737000, medianIncome: 84313, topBanks: ["U.S. Bank", "Wells Fargo", "Bremer Bank", "TCF (now Huntington)"], taxNote: "Interest taxed up to 9.85% state rate" },
  { slug: "mississippi", name: "Mississippi", abbr: "MS", population: 2940000, medianIncome: 52985, topBanks: ["Trustmark Bank", "Regions Bank", "BankPlus"], taxNote: "Interest taxed at flat 4.7% state rate" },
  { slug: "missouri", name: "Missouri", abbr: "MO", population: 6178000, medianIncome: 65920, topBanks: ["Commerce Bank", "Central Bank", "U.S. Bank", "Bank of America"], taxNote: "Interest taxed up to 4.7% state rate" },
  { slug: "montana", name: "Montana", abbr: "MT", population: 1132000, medianIncome: 66341, topBanks: ["First Interstate Bank", "Stockman Bank", "Glacier Bank"], taxNote: "Interest taxed up to 5.9% state rate" },
  { slug: "nebraska", name: "Nebraska", abbr: "NE", population: 1996000, medianIncome: 71722, topBanks: ["First National Bank of Omaha", "Mutual of Omaha Bank", "Pinnacle Bank"], taxNote: "Interest taxed up to 5.84% state rate" },
  { slug: "nevada", name: "Nevada", abbr: "NV", population: 3194000, medianIncome: 71646, topBanks: ["Bank of Nevada", "Nevada State Bank", "Wells Fargo"], taxNote: "No state income tax — interest is federally taxed only" },
  { slug: "new-hampshire", name: "New Hampshire", abbr: "NH", population: 1402000, medianIncome: 90845, topBanks: ["Citizens Bank", "Bank of New Hampshire", "TD Bank"], taxNote: "No general income tax (interest above $2,400 was taxed; phased out 2027)" },
  { slug: "new-jersey", name: "New Jersey", abbr: "NJ", population: 9261000, medianIncome: 97126, topBanks: ["Valley National Bank", "Investors Bank (Citizens)", "TD Bank", "Provident Bank"], taxNote: "Interest taxed up to 10.75% state rate" },
  { slug: "new-mexico", name: "New Mexico", abbr: "NM", population: 2114000, medianIncome: 58722, topBanks: ["Wells Fargo", "Bank of America", "Sunflower Bank", "Nusenda Credit Union"], taxNote: "Interest taxed up to 5.9% state rate" },
  { slug: "new-york", name: "New York", abbr: "NY", population: 19571000, medianIncome: 81386, topBanks: ["JPMorgan Chase", "Citibank", "Bank of America", "Capital One"], taxNote: "Interest taxed up to 10.9% state plus NYC adds up to 3.876%" },
  { slug: "north-carolina", name: "North Carolina", abbr: "NC", population: 10835000, medianIncome: 67481, topBanks: ["Bank of America", "Truist", "Wells Fargo", "First Citizens Bank"], taxNote: "Interest taxed at flat 4.25% state rate" },
  { slug: "north-dakota", name: "North Dakota", abbr: "ND", population: 783000, medianIncome: 73959, topBanks: ["Bank of North Dakota", "Gate City Bank", "First International Bank"], taxNote: "Interest taxed up to 2.5% state rate (lowest income state with tax)" },
  { slug: "ohio", name: "Ohio", abbr: "OH", population: 11785000, medianIncome: 66990, topBanks: ["Fifth Third Bank", "KeyBank", "Huntington Bank", "PNC"], taxNote: "Interest taxed up to 3.5% state rate" },
  { slug: "oklahoma", name: "Oklahoma", abbr: "OK", population: 4053000, medianIncome: 58407, topBanks: ["BOK Financial", "MidFirst Bank", "Arvest Bank"], taxNote: "Interest taxed up to 4.75% state rate" },
  { slug: "oregon", name: "Oregon", abbr: "OR", population: 4233000, medianIncome: 76362, topBanks: ["Umpqua Bank", "Wells Fargo", "U.S. Bank", "Bank of America"], taxNote: "Interest taxed up to 9.9% state rate" },
  { slug: "pennsylvania", name: "Pennsylvania", abbr: "PA", population: 12961000, medianIncome: 73824, topBanks: ["PNC Bank", "Citizens Bank", "Wells Fargo", "First National Bank"], taxNote: "Interest taxed at flat 3.07% state rate" },
  { slug: "rhode-island", name: "Rhode Island", abbr: "RI", population: 1097000, medianIncome: 81854, topBanks: ["Citizens Bank", "Bank Newport", "Washington Trust"], taxNote: "Interest taxed up to 5.99% state rate" },
  { slug: "south-carolina", name: "South Carolina", abbr: "SC", population: 5373000, medianIncome: 63623, topBanks: ["South State Bank", "Wells Fargo", "Bank of America", "Truist"], taxNote: "Interest taxed up to 6.4% state rate" },
  { slug: "south-dakota", name: "South Dakota", abbr: "SD", population: 919000, medianIncome: 72380, topBanks: ["First Bank & Trust", "Great Western Bank", "Wells Fargo"], taxNote: "No state income tax — interest is federally taxed only" },
  { slug: "tennessee", name: "Tennessee", abbr: "TN", population: 7126000, medianIncome: 64035, topBanks: ["First Horizon Bank", "Pinnacle Financial", "FirstBank", "Regions Bank"], taxNote: "No state income tax — interest is federally taxed only" },
  { slug: "texas", name: "Texas", abbr: "TX", population: 30503000, medianIncome: 73035, topBanks: ["JPMorgan Chase", "Bank of America", "Wells Fargo", "Frost Bank"], taxNote: "No state income tax — interest is federally taxed only" },
  { slug: "utah", name: "Utah", abbr: "UT", population: 3417000, medianIncome: 86833, topBanks: ["Zions Bancorporation", "America First Credit Union", "Mountain America Credit Union"], taxNote: "Interest taxed at flat 4.55% state rate" },
  { slug: "vermont", name: "Vermont", abbr: "VT", population: 647000, medianIncome: 72431, topBanks: ["VSECU (now NEFCU)", "Northfield Savings Bank", "Mascoma Bank"], taxNote: "Interest taxed up to 8.75% state rate" },
  { slug: "virginia", name: "Virginia", abbr: "VA", population: 8716000, medianIncome: 87249, topBanks: ["Atlantic Union Bank", "Truist", "Wells Fargo", "Capital One"], taxNote: "Interest taxed up to 5.75% state rate" },
  { slug: "washington", name: "Washington", abbr: "WA", population: 7812000, medianIncome: 90325, topBanks: ["Washington Federal", "Banner Bank", "U.S. Bank", "JPMorgan Chase"], taxNote: "No state income tax — interest is federally taxed only" },
  { slug: "west-virginia", name: "West Virginia", abbr: "WV", population: 1770000, medianIncome: 55217, topBanks: ["United Bank", "WesBanco", "City National Bank"], taxNote: "Interest taxed up to 5.12% state rate" },
  { slug: "wisconsin", name: "Wisconsin", abbr: "WI", population: 5910000, medianIncome: 72458, topBanks: ["Associated Bank", "Old National Bank", "U.S. Bank", "Johnson Financial"], taxNote: "Interest taxed up to 7.65% state rate" },
  { slug: "wyoming", name: "Wyoming", abbr: "WY", population: 584000, medianIncome: 72495, topBanks: ["First Interstate Bank", "Hilltop National Bank", "Jonah Bank"], taxNote: "No state income tax — interest is federally taxed only" },
];

export function getStateBySlug(slug: string): StateInfo | undefined {
  return states.find((s) => s.slug === slug);
}
