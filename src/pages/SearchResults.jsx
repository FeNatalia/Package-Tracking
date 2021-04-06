// NPM Package
import { useState } from "react";

// Project files
import Packages from "../components/Packages";
import parcels from "../pages/Track";

export default function SearchResults({ match }) {
  // State
  const [sortKey, setSortKey] = useState("sender");

  // Consts
  const query = match.params.query.toUpperCase();
  const filteredResults = parcels.filter((item) =>
    item.title.toUpperCase().match(query)
  );
  const sortedResults = filteredResults.sort((a, b) =>
    a[sortKey] > b[sortKey] ? 1 : -1
  );

  // Components
  const CardsArray = sortedResults.map((item) => (
    <Packages key={item.id} parcels={item} />
  ));

  return (
    <div id="results" className="container">
      {/* Search options */}
      <section>
        Filter results by:
        <button onClick={() => setSortKey("sender")}>Sender</button>
        <button onClick={() => setSortKey("status")}>Status</button>
      </section>

      <hr />
      {/* Content */}
      <section className="grid">{CardsArray}</section>
    </div>
  );
}
