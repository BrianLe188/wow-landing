import { Button } from "@/components/ui/button";
import { Download, Smartphone, Apple } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-travel-ocean text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-32 w-48 h-48 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-32 left-1/3 w-40 h-40 bg-white/10 rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Bắt Đầu Hành Trình
            <br />
            Khám Phá Ngay Hôm Nay
          </h2>

          <p className="text-xl lg:text-2xl mb-12 opacity-90 leading-relaxed">
            Tải ứng dụng miễn phí và trải nghiệm cách du lịch thông minh, tối ưu
            và đầy thú vị như chưa từng có.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button
              variant="secondary"
              size="lg"
              className="text-lg px-8 py-6 bg-white text-primary hover:bg-white/90 shadow-xl"
            >
              <Apple className="mr-3 h-6 w-6" />
              Tải cho iOS
            </Button>
            <Button
              variant="secondary"
              size="lg"
              className="text-lg px-8 py-6 bg-white text-primary hover:bg-white/90 shadow-xl"
            >
              <Smartphone className="mr-3 h-6 w-6" />
              Tải cho Android
            </Button>
          </div>

          <div className="flex items-center justify-center gap-8 text-lg opacity-90">
            <div className="flex items-center gap-2">
              <Download className="h-5 w-5" />
              <span>Miễn phí 100%</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-white/30"></div>
            <div>⭐ 4.8/5 đánh giá</div>
            <div className="hidden sm:block w-px h-6 bg-white/30"></div>
            <div>🎉 100K+ tải xuống</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
