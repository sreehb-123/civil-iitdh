import { useEffect, useState } from "react";
import axios from "axios";

const AltTeach = (data) => {

//   useEffect(() => {
//     const fetchActivities = async () => {
//       try {
//         // Replace with your actual Strapi endpoint!
//         const res = await axios.get(
//           "http://localhost:1337/api/faculties/xtbcl55dj7wi98zr1ey42vl2?populate[teaching][populate][0]=activities"
//         );
//         // Adjust this line according to your Strapi data structure
//         // Example assumes: response.data.data = [{ heading, publications: [...] }, ...]
//         const result = res.data?.data?.professionalActivities || [];
//         setGroups(result);
//       } catch (err) {
//         setError("Could not fetch publications");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchActivities();
//   }, []);

//   if (loading)
//     return (
//       <div className="flex justify-center items-center min-h-32 text-gray-600">
//         Loading data…
//       </div>
//     );
//   if (error)
//     return (
//       <div className="flex justify-center items-center min-h-32 text-red-500">
//         {error}
//       </div>
//     );

    // console.log(data);

  if (!data.data.length)
    return (
      <div className="flex justify-center items-center min-h-32 text-gray-600">
        No info available.
      </div>
    );

  return (
    <section id="publications" className="my-10">
      <div className="max-w-6xl mx-auto px-4">
        {/* <h2 className="text-3xl font-bold mb-8 text-center text-primary-700 tracking-tight">
          Professional Activities
        </h2> */}
                <ul className="space-y-3">
                    {data.data.map((item, actIdx) => (
                    <li key={actIdx} className="bg-white rounded-lg shadow p-4">
                        {item.string}
                    </li>
                    ))}
                </ul>
      </div>
    </section>
  );
};

export default AltTeach;