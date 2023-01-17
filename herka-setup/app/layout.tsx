import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <body>
          <main>
            <nav>
              <Link href={"/"}>Home</Link>
              <Link href={"/files"}>files</Link>
            </nav>
            {children}
          </main>
        </body>
      </body>
    </html>
  );
}
