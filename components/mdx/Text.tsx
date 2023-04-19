import Link from "next/link";

export function Text(props) {
  return (
    <p
      {...props}
      className="text-base sm:text-lg font-normal tracking-tight text-gray-900 text-left my-6"
    />
  );
}

export function MDXLink(props) {
  return (
    <Link
      {...props}
      className="text-sky-500 hover:underline"
    />
  );
}


export function CodeInline(props) {
  return (
    <code
      {...props}
      className="font-bold before:content-['`'] after:content-['`']"
    />
  );
}