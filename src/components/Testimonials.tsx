import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Thuý Hằng",
      location: "Bình Định",
      rating: 5,
      comment:
        "App rất tiện lợi! Đã giúp tôi lên kế hoạch du lịch Đà Nẵng 3 ngày 2 đêm một cách hoàn hảo. Tuyến đường được đề xuất rất tối ưu.",
      avatar: "TH",
    },
    {
      name: "Hoàng Long",
      location: "TP.HCM",
      rating: 5,
      comment:
        "Tính năng tìm kiếm địa điểm rất chi tiết và chính xác. Đánh giá từ cộng đồng giúp tôi chọn được những nơi thực sự đáng đi.",
      avatar: "HL",
    },
    {
      name: "Nam Anh",
      location: "Quảng Trị",
      rating: 5,
      comment:
        "Hệ thống nhiệm vụ và thưởng rất thú vị! Khuyến khích tôi khám phá nhiều địa điểm mới và có những trải nghiệm tuyệt vời.",
      avatar: "NA",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold leading-15 mb-6 bg-gradient-to-r from-primary to-travel-ocean bg-clip-text text-transparent">
            Người Dùng Nói Gì
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hàng ngàn người dùng đã tin tưởng và có những trải nghiệm tuyệt vời
            cùng ứng dụng của chúng tôi.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="hover:shadow-[var(--shadow-travel)] transition-all duration-300 hover:-translate-y-1 border-0 bg-[var(--gradient-card)]"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-amber-300 text-amber-300"
                    />
                  ))}
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  &quot;{testimonial.comment}&quot;
                </p>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-primary">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
