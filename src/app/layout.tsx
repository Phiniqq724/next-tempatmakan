import "./globals.css";

export const metadata = {
  title: "Nyamakan",
  description: "Delicious meals, shared by a food-loving community.",
};

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
