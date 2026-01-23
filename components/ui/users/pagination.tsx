import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

type Props = {
  page: number;
  totalPages: number;
  onChange: (p: number) => void;
};

export default function Pagination({ page, totalPages, onChange }: Props) {
  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-end gap-2">
      <button
        disabled={page === 1}
        onClick={() => onChange(page - 1)}
        className="rounded bg-neutral-700 px-3 py-1 text-sm disabled:opacity-50"
      >
        <IconChevronLeft className="text-neutral-400" />
      </button>

      <span className="px-3 py-1 text-sm text-neutral-300">
        {page} / {totalPages}
      </span>

      <button
        disabled={page === totalPages}
        onClick={() => onChange(page + 1)}
        className="rounded bg-neutral-700 px-3 py-1 text-sm disabled:opacity-50"
      >
        <IconChevronRight className="text-neutral-400" />
      </button>
    </div>
  );
}
