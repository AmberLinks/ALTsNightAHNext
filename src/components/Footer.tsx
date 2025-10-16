export function Footer() {
  return (
    <footer className="bg-iron text-white text-center py-6">
      <div className="container mx-auto px-4">
        <div className="mb-4">
          <a
            href="https://amberlinks.github.io/Recruitment/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber hover:underline transition"
          >
            <i className="fas fa-user-plus mr-2"></i>求人情報
          </a>
        </div>
        <p className="text-sm text-gray-400">
          &copy; 2025 ALTs夜間動物病院. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
