import Logo from "../ui/Logo";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-[6px] bg-[rgba(255,248,242,0.9)] shadow-[0px_32px_64px_-15px_rgba(31,27,21,0.06)]">
      <div className="max-w-[1280px] mx-auto flex items-center justify-center py-2.5 px-6">
        <Logo />
      </div>
    </header>
  );
}
