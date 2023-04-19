export function Heading1(props) {
  return (
    <h1
      {...props}
      className="text-4xl md:text-5xl font-bold tracking-tighter leading-tight md:pr-8 my-6"
    />
  );
}

export function Heading2(props) {
  return (
    <h2
      {...props}
      className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 text-left my-6"
    />
  );
}

export function Heading3(props) {
  return (
    <h3
      {...props}
      className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 text-left my-6"
    />
  );
}

export function Heading4(props) {
  return (
    <h4
      {...props}
      className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900 text-left my-6"
    />
  );
}

export function Heading5(props) {
  return (
    <h5
      {...props}
      className="text-lg sm:text-xl font-bold tracking-tight text-gray-900 text-left my-6"
    />
  );
}

export function Heading6(props) {
  return (
    <h6
      {...props}
      className="text-base sm:text-lg font-bold tracking-tight text-gray-900 text-left my-6"
    />
  );
}
