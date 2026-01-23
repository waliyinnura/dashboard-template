import Table from "@/components/ui/users/table";

const users = [
  { id: 1, name: "Andi", email: "andi@mail.com", role: "Admin" },
  { id: 2, name: "Budi", email: "budi@mail.com", role: "User" },
  { id: 3, name: "Siti", email: "siti@mail.com", role: "Editor" },
];

export default function UsersPage() {
  return (
    <div className="flex flex-1">
      <div className="flex h-full w-full flex-1 flex-col gap-2 rounded-tl-2xl border border-neutral-200 bg-white p-2 md:p-10 dark:border-neutral-700 dark:bg-neutral-900">
        <h1 className="text-2xl font-semibold mb-4">Users</h1>
        <Table data={users} />
      </div>
    </div>
  );
}
