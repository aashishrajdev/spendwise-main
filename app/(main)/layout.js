export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="">
        {/* Global background glow */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-purple-600/30 blur-[120px]" />
          <div className="absolute top-1/3 -right-40 h-[500px] w-[500px] rounded-full bg-indigo-500/30 blur-[120px]" />
        </div>

        {children}
      </body>
    </html>
  );
}
