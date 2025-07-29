import { Button } from "@/components/ui/button";
import { Download, Play } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-travel-sky to-background">
      <div className="absolute inset-0 bg-gradient-to-br from-travel-sky via-background to-travel-blue/20"></div>
      <div className="absolute inset-0 bg-[var(--gradient-mesh)] opacity-30"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl floating-animation"></div>
      <div
        className="absolute bottom-20 right-20 w-96 h-96 bg-travel-coral/15 rounded-full blur-3xl floating-animation"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left mt-25 lg:mt-0">
            <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-gradient block">Khám Phá</span>
              <span className="text-gradient-sunset block">Hành Trình</span>
              <span className="text-gradient block">Tối Ưu</span>
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

            <div className="mt-16 grid grid-cols-3 gap-8 max-w-md mx-auto lg:mx-0">
              <div className="text-center glass-effect rounded-xl p-4 border-primary/10">
                <div className="text-4xl font-bold text-gradient mb-1">
                  100K+
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  Người dùng
                </div>
              </div>
              <div className="text-center glass-effect rounded-xl p-4 border-primary/10">
                <div className="text-4xl font-bold text-gradient mb-1">
                  50K+
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  Địa điểm
                </div>
              </div>
              <div className="text-center glass-effect rounded-xl p-4 border-primary/10">
                <div className="text-4xl font-bold text-gradient mb-1">
                  4.8★
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  Đánh giá
                </div>
              </div>
            </div>
          </div>
          <div className="relative lg:justify-self-end">
            <div className="relative z-10 transform hover:scale-[1.02] transition-all duration-700 parallax-slow">
              <div className="glass-effect rounded-3xl p-6 border-primary/20">
                <Image
                  src={"/assets/hero-travel-app.jpg"}
                  alt="Travel App Hero"
                  className="w-full h-auto rounded-2xl shadow-[var(--shadow-float)]"
                  width={1000}
                  height={500}
                />
              </div>
            </div>
            <div className="absolute -inset-8 bg-gradient-to-r from-primary/30 via-travel-coral/20 to-travel-ocean/30 rounded-[3rem] blur-3xl floating-animation opacity-60"></div>
            <div className="absolute top-8 -right-8 w-32 h-32 bg-travel-sunset/40 rounded-full blur-2xl floating-animation"></div>
            <div
              className="absolute -bottom-8 -left-8 w-40 h-40 bg-travel-mint/30 rounded-full blur-2xl floating-animation"
              style={{ animationDelay: "3s" }}
            ></div>
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
