import "@/assets/styles/index.scss"
import { Inter } from "next/font/google";
import { Box } from "@mui/material";
import Header from "@/components/Header";
import Providers from "@/redux/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Media Downloader",
  description: "Media Downloader App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Box sx={{ display: 'flex' }}>
            <Header />
            <Box component="div" className="body-content-div"  >
              {children}
            </Box>
          </Box>
        </Providers>
      </body>
    </html>
  );
}
