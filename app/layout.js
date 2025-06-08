import { Noto_Kufi_Arabic } from "next/font/google";
import "./globals.css";

const notoKufiArabic = Noto_Kufi_Arabic({
  variable: "--font-noto-kufi",
  subsets: ["arabic"],
  weight: ["400", "700"],
  display: "swap",
});

import { AppLayout } from '@/app/components/layout';

export const metadata = {
  title: "JeelTech",
  description: "منصة التعلم الإلكتروني",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${notoKufiArabic.variable} antialiased`}>
        <AppLayout>
          {children}
        </AppLayout>
      </body>
    </html>
  );
}
