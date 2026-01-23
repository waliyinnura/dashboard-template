type Props = {
  search: string;
  onSearch: (v: string) => void;
  role: string;
  onRoleChange: (v: string) => void;
};

export default function TableToolbar({
  search,
  onSearch,
  role,
  onRoleChange,
}: Props) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      {/* SEARCH */}
      <input
        value={search}
        onChange={(e) => onSearch(e.target.value)}
        placeholder="Search name or email..."
        className="w-full sm:w-64 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-neutral-500 bg-neutral-800"
      />

      {/* FILTER */}
      <select
        value={role}
        onChange={(e) => onRoleChange(e.target.value)}
        className="w-full sm:w-40 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-neutral-500 bg-neutral-800 text-neutral-400"
      >
        <option value="all">All Roles</option>
        <option value="Admin">Admin</option>
        <option value="User">User</option>
        <option value="Editor">Editor</option>
      </select>
    </div>
  );
}
