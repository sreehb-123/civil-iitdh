import { useEffect, useState } from "react";
import axios from "axios";

// ITEMS_PER_PAGE is number of heading groups to show per page
const ITEMS_PER_PAGE = 2;
const PUBS_PER_PAGE = 10;

const AltPub = () => {
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchPublications = async () => {
      try {
        // Replace with your actual Strapi endpoint!
        const res = await axios.get(
          "http://localhost:1337/api/faculties/xtbcl55dj7wi98zr1ey42vl2?populate[publications][populate][0]=list"
        );
        // Adjust this line according to your Strapi data structure
        // Example assumes: response.data.data = [{ heading, publications: [...] }, ...]
        const result = res.data?.data?.publications || [];
        setGroups(result);
      } catch (err) {
        setError("Could not fetch publications");
      } finally {
        setLoading(false);
      }
    };
    fetchPublications();
  }, []);

  let totalPages = 1;

  // Paginate
  let paginatedGroups = [];

  if(groups.length>1){
    totalPages = Math.ceil(groups.length / ITEMS_PER_PAGE);
    paginatedGroups = groups.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );
  }
  else if(groups.length===1){
    totalPages = Math.ceil(groups[0].list.length / PUBS_PER_PAGE);
    paginatedGroups = groups[0].list.slice((page - 1) * PUBS_PER_PAGE, page * PUBS_PER_PAGE);
    console.log(paginatedGroups);
  }

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-32 text-gray-600">
        Loading publications…
      </div>
    );
  if (error)
    return (
      <div className="flex justify-center items-center min-h-32 text-red-500">
        {error}
      </div>
    );
  if (!groups.length)
    return (
      <div className="flex justify-center items-center min-h-32 text-gray-600">
        No publications available.
      </div>
    );

  return (
    <section id="publications" className="my-10">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-primary-700 tracking-tight">
          Publications
        </h2>
        {groups.length > 1 ? (
            // Multiple groups
            paginatedGroups.map((group, idx) => (
                <div key={idx} className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-primary-800">{group.heading}</h3>
                <ul className="space-y-3">
                    {(group.list || []).map((item, pubIdx) => (
                    <li key={pubIdx} className="bg-white rounded-lg shadow p-4">
                        {item.string}
                    </li>
                    ))}
                </ul>
                </div>
            ))
            ) : groups.length === 1 ? (
            // One group, but many publications — paginate the publications
            <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-primary-800">{groups[0].heading}</h3>
                <ul className="space-y-3">
                {paginatedGroups.map((item, pubIdx) => (
                    <li key={pubIdx} className="bg-white rounded-lg shadow p-4">
                    {item.string}
                    </li>
                ))}
                </ul>
            </div>
            ) : null}


        {/* Pagination Controls */}
        {totalPages > 1 && (
            <div className="flex justify-center items-center space-x-4 mt-6">
                <button
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition text-primary-700 disabled:opacity-40"
                    disabled={page === 1}
                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                    aria-label="Previous page"
                >
                    {/* Left arrow Unicode or SVG */}
                    <span className="text-2xl">&#8592;</span>
                </button>
                <span className="font-semibold select-none">
                    Page {page} of {totalPages}
                </span>
                <button
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition text-primary-700 disabled:opacity-40"
                    disabled={page === totalPages}
                    onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                    aria-label="Next page"
                >
                    {/* Right arrow Unicode or SVG */}
                    <span className="text-2xl">&#8594;</span>
                </button>
            </div>
        )}

      </div>
    </section>
  );
};

export default AltPub;