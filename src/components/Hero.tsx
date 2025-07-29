import { Button } from "@/components/ui/button";
import { Download, Play } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-travel-sky to-background">
      <div className="absolute inset-0 bg-[var(--gradient-hero)] opacity-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left mt-25 lg:mt-0">
            <h1 className="text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-travel-ocean bg-clip-text text-transparent leading-tight">
              Khám Phá
              <br />
              Hành Trình
              <br />
              Tối Ưu
            </h1>

            <p className="text-center lg:text-left text-xl text-muted-foreground mb-8">
              Ứng dụng du lịch thông minh giúp bạn tìm đường đi tối ưu nhất giữa
              nhiều địa điểm, khám phá những trải nghiệm tuyệt vời và nhận
              thưởng từ mỗi chuyến đi.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                <Download className="mr-2 h-5 w-5" />
                Tải App Ngay
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                <Play className="mr-2 h-5 w-5" />
                Xem Demo
              </Button>
            </div>

            <div className="mt-12 flex items-center gap-8 justify-center lg:justify-start">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">100K+</div>
                <div className="text-sm text-muted-foreground">Người dùng</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">50K+</div>
                <div className="text-sm text-muted-foreground">Địa điểm</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">4.8★</div>
                <div className="text-sm text-muted-foreground">Đánh giá</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
              <Image
                src={"/assets/hero-travel-app.jpg"}
                alt="Travel App Hero"
                className="w-full h-auto rounded-2xl shadow-[var(--shadow-float)]"
                width={1000}
                height={500}
              />
            </div>
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-travel-ocean/20 rounded-3xl blur-2xl"></div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
