import Link from "next/link";

const Subbar: React.RC = () => {
  return (
    <nav>
      <Link href="/">Home-sub</Link> | <Link href="/about">About-sub</Link>
    </nav>
  );
};

export default Subbar;
