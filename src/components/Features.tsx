import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const Features = () => {
  const features = [
    {
      icon: "/assets/route-icon.jpg",
      title: "Tối Ưu Tuyến Đường",
      description:
        "Thuật toán thông minh tính toán đường đi ngắn nhất và tiết kiệm nhất giữa nhiều địa điểm du lịch.",
    },
    {
      icon: "/assets/discover-icon.jpg",
      title: "Khám Phá Địa Điểm",
      description:
        "Tìm kiếm và khám phá hàng ngàn địa điểm du lịch hấp dẫn với thông tin chi tiết và đánh giá từ cộng đồng.",
    },
    {
      icon: "/assets/rating-icon.jpg",
      title: "Đánh Giá & Chia Sẻ",
      description:
        "Đánh giá trải nghiệm của bạn và chia sẻ với cộng đồng du lịch để giúp người khác có chuyến đi tuyệt vời.",
    },
    {
      icon: "/assets/rewards-icon.jpg",
      title: "Nhiệm Vụ & Thưởng",
      description:
        "Hoàn thành các nhiệm vụ du lịch thú vị và nhận những phần thưởng hấp dẫn cho mỗi chuyến đi.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-accent/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl leading-15 font-bold mb-6 bg-gradient-to-r from-primary to-travel-ocean bg-clip-text text-transparent">
            Tính Năng Nổi Bật
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Trải nghiệm du lịch hoàn toàn mới với các tính năng thông minh được
            thiết kế đặc biệt cho người yêu thích khám phá.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-[var(--shadow-travel)] transition-all duration-300 hover:-translate-y-2 border-0 bg-[var(--gradient-card)]"
            >
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 mx-auto mb-4 rounded-2xl overflow-hidden shadow-[var(--shadow-card)] group-hover:shadow-[var(--shadow-travel)] transition-shadow duration-300">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    width={100}
                    height={100}
                  />
                </div>
                <CardTitle className="text-xl font-bold text-primary group-hover:text-travel-ocean transition-colors duration-300">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
