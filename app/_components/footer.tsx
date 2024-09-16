export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="flex text-center justify-center gap-2  py-3 w-full shrink-0 items-center px-4 md:px-6 ">
      <p className="text-md text-gray-500 dark:text-gray-400">
        © {currentYear} Bartosz Sobina. All rights reserved.
      </p>
    </footer>
  );
}
