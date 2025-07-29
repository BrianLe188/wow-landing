import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Route, Star, Gift } from "lucide-react";
import Image from "next/image";

const AppPreview = () => {
  const highlights = [
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Bản đồ tương tác",
      description: "Giao diện bản đồ trực quan và dễ sử dụng",
    },
    {
      icon: <Route className="h-5 w-5" />,
      title: "Tuyến đường thông minh",
      description: "AI tối ưu hóa lộ trình di chuyển",
    },
    {
      icon: <Star className="h-5 w-5" />,
      title: "Đánh giá chất lượng",
      description: "Hệ thống review từ cộng đồng",
    },
    {
      icon: <Gift className="h-5 w-5" />,
      title: "Hệ thống thưởng",
      description: "Nhận quà khi hoàn thành nhiệm vụ",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-accent/30 to-travel-sky/20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative z-10">
              <Image
                src={"/assets/app-mockup.jpg"}
                alt="App Preview"
                className="w-full h-auto rounded-3xl shadow-[var(--shadow-float)] transform hover:scale-105 transition-transform duration-500"
                width={500}
                height={500}
              />
            </div>
            <div className="absolute -inset-6 bg-gradient-to-r from-primary/10 to-travel-ocean/10 rounded-3xl blur-3xl"></div>
          </div>

          <div className="order-1 lg:order-2">
            <Badge variant="secondary" className="mb-4 px-4 py-2 text-primary">
              ✨ Giao diện thân thiện
            </Badge>

            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-travel-ocean bg-clip-text text-transparent">
              Trải Nghiệm
              <br />
              Hoàn Hảo
            </h2>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Giao diện được thiết kế tối ưu cho trải nghiệm người dùng, giúp
              bạn dễ dàng lên kế hoạch và thực hiện chuyến đi một cách hoàn hảo
              nhất.
            </p>

            <div className="space-y-6 mb-8">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    {highlight.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1 text-primary">
                      {highlight.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Button variant="travel" size="lg" className="text-lg px-8 py-6">
              Khám Phá Ngay
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppPreview;
