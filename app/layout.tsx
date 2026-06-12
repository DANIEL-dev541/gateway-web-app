export const metadata = {
  title: "Gateway Web & App Development | Nairobi Kenya",
  description: "Professional web & app development, custom systems & IT solutions",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{margin:0, padding:0, boxSizing:'border-box'}}>
        {children}
      </body>
    </html>
  );
}