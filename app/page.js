'use client'
import BlogList from "./Components/BlogList";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { SessionProvider } from "next-auth/react";
export default function Home() {
  return (
    <SessionProvider>
      <Header />
      <BlogList />
      <Footer />
    </SessionProvider>
  );
}
