import ArticleSection from "@/components/ArtcileSection";
import Articles from "@/components/Articles";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProductSection from "@/components/ProductSection";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      <Header />
      <ProductSection />
      <Articles />
      <ArticleSection />
      <Services />
      <Footer />
    </>
  );
}
