import React from "react";

const RegistrarsOffice = () => {
  const data = [
    {
      id: 1,
      name: "Mr. Rishi Thapa",
      designation: "Registrar(i/c) & Assistant Registrar",
      email: "registrar@msu.edu.in",
    },
    {
      id: 2,
      name: "Dr. Siddhartha Shankar",
      designation: "Deputy Registrar",
      email: "deputy.registrar@msu.edu.in",
    },
    {
      id: 3,
      name: "Mr. Sagar Bhowmik",
      designation: "Assistant Registrar (Academics & QA)",
      email: "asregistrar.aqa@msu.edu.in",
    },
  ];

  return (
    <div className="flex flex-col items-center px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Registrar's Office</h1>
      <table className="table-auto border-collapse border border-gray-300 w-full md:w-3/4 text-left text-sm">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">Sr. No.</th>
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Designation</th>
            <th className="border border-gray-300 px-4 py-2">E-mail</th>
          </tr>
        </thead>
        <tbody>
          {data.map((person) => (
            <tr key={person.id} className="hover:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">{person.id}</td>
              <td className="border border-gray-300 px-4 py-2">{person.name}</td>
              <td className="border border-gray-300 px-4 py-2">{person.designation}</td>
              <td className="border border-gray-300 px-4 py-2">
                <a
                  href={`mailto:${person.email}`}
                  className="text-blue-500 hover:underline"
                >
                  {person.email}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="text-center font-semibold mt-4">
        More information about Administrative Offices - TO BE ADDED
      </p>
    </div>
  );
};

export default RegistrarsOffice;
