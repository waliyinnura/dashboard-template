"use client";

import { useMemo, useState } from "react";
import TableToolbar from "./table-toolbar";
import Pagination from "./pagination";

type User = {
  id: number;
  name: string;
  email: string;
  role: string;
};

const PAGE_SIZE = 2;

export default function Table({ data }: { data: User[] }) {
  const [search, setSearch] = useState("");
  const [role, setRole] = useState("all");
  const [page, setPage] = useState(1);

  // 1️⃣ Filter + Search
  const filteredData = useMemo(() => {
    return data.filter((user) => {
      const matchSearch =
        user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase());

      const matchRole = role === "all" || user.role === role;

      return matchSearch && matchRole;
    });
  }, [data, search, role]);

  // 2️⃣ Pagination
  const totalPages = Math.ceil(filteredData.length / PAGE_SIZE);

  const paginatedData = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return filteredData.slice(start, start + PAGE_SIZE);
  }, [filteredData, page]);

  return (
    <div className="space-y-4">
      <TableToolbar
        search={search}
        onSearch={setSearch}
        role={role}
        onRoleChange={(val) => {
          setRole(val);
          setPage(1);
        }}
      />

      {/* TABLE */}
      <div className="overflow-x-auto rounded-lg text-neutral-300">
        <table className="min-w-full">
          <thead className="bg-neutral-800">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold">ID</th>
              <th className="px-4 py-3 text-left text-sm font-semibold">
                Name
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold">
                Email
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold">
                Role
              </th>
            </tr>
          </thead>

          <tbody>
            {paginatedData.map((user, i) => (
              <tr
                key={user.id}
                className={`${
                  i % 2 === 0 ? "bg-neutral-700" : "bg-neutral-800"
                }`}
              >
                <td className="px-4 py-3">{user.id}</td>
                <td className="px-4 py-3">{user.name}</td>
                <td className="px-4 py-3">{user.email}</td>
                <td className="px-4 py-3">
                  <span className="inline-flex min-w-22.5 justify-center rounded-full bg-blue-300 px-3 py-1 text-xs font-medium text-neutral-800">
                    {user.role}
                  </span>
                </td>
              </tr>
            ))}

            {paginatedData.length === 0 && (
              <tr>
                <td colSpan={4} className="py-6 text-center text-gray-500">
                  No data found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <Pagination page={page} totalPages={totalPages} onChange={setPage} />
    </div>
  );
}
